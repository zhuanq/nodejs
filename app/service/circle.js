/**
 * Created by army8735 on 2018/4/2.
 */

'use strict';

const egg = require('egg');
const Sequelize = require('sequelize');
const squel = require('squel');

const CACHE_TIME = 10;

class Service extends egg.Service {
  /**
   * 根据id获取圈子信息
   * @param id
   * @returns Object
   */
  async info(id) {
    if(!id) {
      return;
    }
    const { app } = this;
    let cacheKey = 'circleInfo_' + id;
    let res = await app.redis.get(cacheKey);
    if(res) {
      app.redis.expire(cacheKey, CACHE_TIME);
      return JSON.parse(res);
    }
    let sql = squel.select()
      .from('circle')
      .from('circle_type')
      .field('circle.id')
      .field('circle.name')
      .field('circle.describe')
      .field('circle.banner')
      .field('circle.is_public', 'isPublic')
      .field('circle.type')
      .field('circle_type.name', 'typeName')
      .where('circle.id=?', id)
      .where('is_delete=false')
      .where('circle.type=circle_type.id')
      .toString();
    res = await app.sequelizeCircling.query(sql, { type: Sequelize.QueryTypes.SELECT });
    if(res.length) {
      res = res[0];
    }
    else {
      res = null;
    }
    app.redis.setex(cacheKey, CACHE_TIME, JSON.stringify(res));
    return res;
  }

  async infoList(idList) {
    if(!idList) {
      return;
    }
    if(!idList.length) {
      return [];
    }
    const { app } = this;
    let cache = await Promise.all(
      idList.map(function(id) {
        return app.redis.get('circleInfo_' + id);
      })
    );
    let noCacheIdList = [];
    let noCacheIdHash = {};
    let noCacheIndexList = [];
    cache.forEach(function(item, i) {
      let id = idList[i];
      if(item) {
        cache[i] = JSON.parse(item);
        app.redis.expire('circleInfo_' + id, CACHE_TIME);
      }
      else if(id !== null && id !== undefined) {
        if(!noCacheIdHash[id]) {
          noCacheIdHash[id] = true;
          noCacheIdList.push(id);
        }
        noCacheIndexList.push(i);
      }
    });
    if(noCacheIdList.length) {
      let sql = squel.select()
        .from('circle')
        .from('circle_type')
        .field('circle.id')
        .field('circle.name')
        .field('circle.describe')
        .field('circle.banner')
        .field('circle.is_public', 'isPublic')
        .field('circle.type')
        .field('circle_type.name', 'typeName')
        .where('circle.id IN ?', noCacheIdList)
        .where('is_delete=false')
        .where('circle.type=circle_type.id')
        .toString();console.log(sql);
      let res = await app.sequelizeCircling.query(sql, { type: Sequelize.QueryTypes.SELECT });
      if(res.length) {
        let hash = {};
        res.forEach(function(item) {
          hash[item.id] = item;
        });
        noCacheIndexList.forEach(function(i) {
          let id = idList[i];
          let temp = hash[id];
          if(temp) {
            cache[i] = temp;
            app.redis.setex('circleInfo_' + id, CACHE_TIME, JSON.stringify(temp));
          }
          else {
            app.redis.setex('circleInfo_' + id, CACHE_TIME, 'null');
          }
        });
      }
    }
    return cache;
  }

  /**
   * 获取圈子下的画圈
   * @param id:int 圈子id
   * @param offset:int 分页开始
   * @param limit:int 分页数量
   * @returns Object{ count:int, data:Array<Object> }
   */
  async post(id, offset, limit) {
    if(!id) {
      return;
    }
    offset = parseInt(offset) || 0;
    limit = parseInt(limit) || 1;
    if(offset < 0 || limit < 1) {
      return;
    }
    let [data, count] = await Promise.all([
      this.postData(id, offset, limit),
      this.postCount(id)
    ]);
    return { data, count };
  }

  /**
   * 获取圈子下画圈数据
   * @param id:int 圈子的id
   * @param offset:int 分页开始
   * @param limit:int 分页数量
   * @returns Array<Object>
   */
  async postData(id, offset, limit) {
    if(!id) {
      return;
    }
    offset = parseInt(offset) || 0;
    limit = parseInt(limit) || 1;
    if(offset < 0 || limit < 1) {
      return;
    }
    const { app, service } = this;
    let sql = squel.select()
      .from('circle_comment_relation')
      .from('comment')
      .field('comment.id')
      .field('comment.user_id', 'uid')
      .field('comment.author_id', 'aid')
      .field('comment.content')
      .field('comment.parent_id', 'pid')
      .field('comment.root_id', 'rid')
      .field('comment.create_time', 'createTime')
      .where('circle_comment_relation.circle_id=?', id)
      .where('circle_comment_relation.comment_id=comment.id')
      .where('comment.is_delete=false')
      .order('comment.id', false)
      .offset(offset)
      .limit(limit)
      .toString();
    let res = await app.sequelizeCircling.query(sql, { type: Sequelize.QueryTypes.SELECT });
    res = await service.comment.plusList(res);
    return res;
  }

  /**
   * 获取圈子下画圈数量
   * @param id:int 圈子的id
   * @returns int
   */
  async postCount(id) {
    if(!id) {
      return;
    }
    const { app } = this;
    let cacheKey = 'circleCommentCount_' + id;
    let res = await app.redis.get(cacheKey);
    if(res) {
      app.redis.expire(cacheKey, CACHE_TIME);
      return JSON.parse(res);
    }
    let sql = squel.select()
      .from('circle_comment_relation')
      .from('comment')
      .field('COUNT(*)', 'num')
      .where('circle_comment_relation.circle_id=?', id)
      .where('circle_comment_relation.comment_id=comment.id')
      .where('comment.is_delete=false')
      .toString();
    res = await app.sequelizeCircling.query(sql, { type: Sequelize.QueryTypes.SELECT });
    if(res.length) {
      res = res[0].num || 0;
    }
    else {
      res = 0;
    }
    app.redis.setex(cacheKey, CACHE_TIME, JSON.stringify(res));
    return res;
  }

  /**
   * 获取全部圈子
   * @param offset:int 分页开始
   * @param limit:int 分页尺寸
   * @returns Object{ count:int, data:Array<Object> }
   */
  async all(offset, limit) {
    let [data, count] = await Promise.all([
      this.allData(offset, limit),
      this.allCount()
    ]);
    return { data, count };
  }

  /**
   * 获取全部圈子信息
   * @param offset:int 分页开始
   * @param limit:int 分页尺寸
   * @returns Array<Object>
   */
  async allData(offset, limit) {
    offset = parseInt(offset) || 0;
    limit = parseInt(limit) || 1;
    if(offset < 0 || limit < 1) {
      return;
    }
    const { app } = this;
    let cacheKey = 'allCircle_' + offset + '_' + limit;
    let res = await app.redis.get(cacheKey);
    if(res) {
      app.redis.expire(cacheKey, CACHE_TIME);
      return JSON.parse(res);
    }
    res = await app.model.circle.findAll({
      attributes: [
        'id',
        'name'
      ],
      where: {
        is_delete: false,
        is_public: true,
      },
      offset,
      limit,
      raw: true,
    });
    app.redis.setex(cacheKey, CACHE_TIME, JSON.stringify(res));
    return res;
  }

  /**
   * 获取全部圈子数量
   * @returns int
   */
  async allCount() {
    const { app } = this;
    let cacheKey = 'allCircleCount';
    let res = await app.redis.get(cacheKey);
    if(res) {
      app.redis.expire(cacheKey, CACHE_TIME);
      return JSON.parse(res);
    }
    res = await app.model.circle.findOne({
      attributes: [
        [Sequelize.fn('COUNT', '*'), 'num']
      ],
      where: {
        is_delete: false,
        is_public: true,
      },
      raw: true,
    });
    if(res) {
      res = res.num || 0;
    }
    else {
      res = 0;
    }
    app.redis.setex(cacheKey, CACHE_TIME, JSON.stringify(res));
    return res;
  }
}

module.exports = Service;
