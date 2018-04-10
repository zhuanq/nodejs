/**
 * Created by army8735 on 2018/4/9.
 */

'use strict';

const egg = require('egg');
const Sequelize = require('sequelize');
const squel = require('squel');

const CACHE_TIME = 10;

class Service extends egg.Service {
  /**
   * 获取标签信息
   * @param id:int 标签id
   * @returns Object
   */
  async info(id) {
    if(!id) {
      return;
    }
    const { app } = this;
    let cacheKey = 'tag_' + id;
    let res = await this.app.redis.get(cacheKey);
    if(res) {
      app.redis.expire(cacheKey, CACHE_TIME);
      return JSON.parse(res);
    }
    res = await app.model.tag.findOne({
      attributes: [
        'id',
        'name'
      ],
      where: {
        id,
      },
      raw: true,
    });
    app.redis.setex(cacheKey, CACHE_TIME, JSON.stringify(res));
    return res;
  }

  /**
   * 获取标签列表信息
   * @param idList:Array<int> 标签id列表
   * @returns Array<Object>
   */
  async infoList(idList) {
    if(!idList) {
      return;
    }
    if(!idList.length) {
      return [];
    }
    const { app } = this;
    let cache = await Promise.all(
      idList.map((id) => {
        return app.redis.get('tag_' + id);
      })
    );
    let noCacheIdList = [];
    let noCacheIdHash = {};
    let noCacheIndexList = [];
    cache.forEach((item, i) => {
      let id = idList[i];
      if(item) {
        cache[i] = JSON.parse(item);
        app.redis.expire('tag_' + id, CACHE_TIME);
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
      let res = await app.model.tag.findAll({
        attributes: [
          'id',
          'name'
        ],
        where: {
          id: noCacheIdList,
        },
        raw: true,
      });
      let hash = {};
      if(res.length) {
        res.forEach((item) => {
          let id = item.id;
          hash[id] = item;
        });
      }
      noCacheIndexList.forEach((i) => {
        let id = idList[i];
        let temp = hash[id] || null;
        cache[i] = temp;
        app.redis.setex('tag_' + id, CACHE_TIME, JSON.stringify(temp));
      });
    }
    return cache;
  }

  /**
   * 根据名字获取id
   * @param name:String tag名
   * @returns int
   */
  async getIdByName(name) {
    if(!name) {
      return;
    }
    const { app } = this;
    let cacheKey = 'tagName_' + name;
    let res = await app.redis.get(cacheKey);
    if(res) {
      app.redis.expire(cacheKey, CACHE_TIME);
      return JSON.parse(res);
    }
    res = await app.model.tag.findOne({
      attributes: [
        'id'
      ],
      where: {
        name,
      },
      raw: true,
    });
    if(res) {
      res = res.id;
    }
    else {
      res = null;
    }
    app.redis.setex(cacheKey, CACHE_TIME, JSON.stringify(res));
    return res;
  }

  /**
   * 获取标签下的画圈
   * @param id:int 标签id
   * @param uid:int 用户id
   * @param offset:int 分页开始
   * @param limit:int 分页数量
   * @returns Object{ count:int, data:Array<Object> }
   */
  async postList(id, uid, offset, limit) {
    if(!id) {
      return;
    }
    let [data, count] = await Promise.all([
      this.postData(id, uid, offset, limit),
      this.postCount(id)
    ]);
    return { data, count };
  }

  /**
   * 获取标签下画圈数据
   * @param id:int 标签id
   * @param uid:int 用户id
   * @param offset:int 分页开始
   * @param limit:int 分页数量
   * @returns Array<Object>
   */
  async postData(id, uid, offset, limit) {
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
      .from('tag_comment_relation FORCE INDEX (tag_id_is_delete_is_comment_delete_comment_id)')
      .from('comment')
      .field('comment.id')
      .field('comment.user_id', 'uid')
      .field('comment.author_id', 'aid')
      .field('comment.content')
      .field('comment.parent_id', 'pid')
      .field('comment.root_id', 'rid')
      .field('comment.create_time', 'createTime')
      .where('tag_comment_relation.tag_id=?', id)
      .where('tag_comment_relation.is_delete=false')
      .where('tag_comment_relation.is_comment_delete=false')
      .where('tag_comment_relation.comment_id=comment.id')
      .order('tag_comment_relation.comment_id', false)
      .offset(offset)
      .limit(limit)
      .toString();
    let res = await app.sequelizeCircling.query(sql, { type: Sequelize.QueryTypes.SELECT });
    res = await service.comment.plusListFull(res, uid);
    return res;
  }

  /**
   * 获取标签下画圈数量
   * @param id:int 标签id
   * @returns int
   */
  async postCount(id) {
    if(!id) {
      return;
    }
    const { app } = this;
    let cacheKey = 'tagCommentCount_' + id;
    let res = await app.redis.get(cacheKey);
    if(res) {
      // app.redis.expire(cacheKey, CACHE_TIME);
      return JSON.parse(res);
    }
    let sql = squel.select()
      .from('tag_comment_relation FORCE INDEX (tag_id_is_delete_is_comment_delete_comment_id)')
      .field('COUNT(*)', 'num')
      .where('tag_id=?', id)
      .where('is_delete=false')
      .where('is_comment_delete=false')
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
   * 获取类似名字的标签
   * @param name:String 名字
   * @param offset:int 分页开始
   * @param limit:int 分页尺寸
   * @returns Object{data: Array<Object>, count: int}
   */
  async listByName(name, offset, limit) {
    if(!name) {
      return;
    }
    let [data, count] = await Promise.all([
      this.listByNameDetail(name, offset, limit),
      this.countByName(name)
    ]);
    return {
      data,
      count,
    };
  }

  async listByNameDetail(name, offset, limit) {
    if(!name) {
      return;
    }
    offset = parseInt(offset) || 0;
    limit = parseInt(limit) || 1;
    if(offset < 0 || limit < 1) {
      return;
    }
    const { app } = this;
    let cacheKey = 'tagListByName_' + name + '_' + offset + '_' + limit;
    let res;
    if(offset === 0) {
      res = await app.redis.get(cacheKey);
      if(res) {
        res = JSON.parse(res);
      }
    }
    if(!res) {
      res = await app.model.tag.findAll({
        attributes: [
          'id',
          'name'
        ],
        where: {
          name: {
            $like: '%' + name + '%',
          },
          is_delete: false,
        },
        offset,
        limit,
        raw: true,
      });
      if(offset === 0) {
        app.redis.setex(cacheKey, CACHE_TIME, JSON.stringify(res));
      }
    }
    return res;
  }

  async countByName(name) {
    if(!name) {
      return;
    }
    const { app } = this;
    let cacheKey = 'tagCountByName_' + name;
    let res = await app.redis.get(cacheKey);
    if(res) {
      return JSON.parse(res);
    }
    res = await app.model.tag.findOne({
      attributes: [
        [Sequelize.fn('COUNT', '*'), 'num']
      ],
      where: {
        name: {
          $like: '%' + name + '%',
        },
        is_delete: false,
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
