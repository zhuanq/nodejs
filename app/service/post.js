/**
 * Created by army8735 on 2018/3/19.
 */

'use strict';

const egg = require('egg');
const Sequelize = require('sequelize');
const squel = require('squel');

class Service extends egg.Service {
  /**
   * 根据id获取画圈信息
   * @param id
   * @param uid:int 用户id
   * @returns Object
   */
  async info(id, uid) {
    if(!id) {
      return;
    }
    const { service } = this;
    let res = await service.comment.info(id);
    if(res) {
      res = await service.comment.plusFull(res, uid);
    }
    return res;
  }

  /**
   * 根据id列表获取画圈信息列表
   * @param idList:Array<int>
   * @param uid:int 用户ida
   * @returns Array<Object>
   */
  async infoList(idList, uid) {
    if(!idList) {
      return;
    }
    if(!idList.length) {
      return [];
    }
    const { service } = this;
    let res = await service.comment.infoList(idList);
    if(res) {
      res = await service.comment.plusListFull(res, uid);
    }
    return res;
  }

  /**
   * 获取画圈下的言论
   * @param id:int 画圈id
   * @param uid:int 用户id
   * @param offset:int 分页开始
   * @param limit:int 分页数量
   * @returns Object{ count:int, data:Array<Object> }
   */
  async commentList(id, uid, offset, limit) {
    if(!id) {
      return;
    }
    offset = parseInt(offset) || 0;
    limit = parseInt(limit) || 1;
    if(offset < 0 || limit < 1) {
      return;
    }
    const { service } = this;
    let [data, count] = await Promise.all([
      this.commentData(id, uid, offset, limit),
      service.comment.replyCount(id)
    ]);
    return { data, count };
  }

  /**
   * 获取画圈下留言
   * @param id:int 画圈的id
   * @param uid:int 用户id
   * @param offset:int 分页开始
   * @param limit:int 分页数量
   * @returns int 留言数量
   */
  async commentData(id, uid, offset, limit) {
    if(!id) {
      return;
    }
    offset = parseInt(offset) || 0;
    limit = parseInt(limit) || 1;
    if(offset < 0 || limit < 1) {
      return;
    }
    const { app, service } = this;
    let res = await app.model.comment.findAll({
      attributes: [
        'id',
        ['user_id', 'userId'],
        ['author_id', 'authorId'],
        'content',
        ['parent_id', 'parentId'],
        ['root_id', 'rootId'],
        ['create_time', 'createTime']
      ],
      where: {
        root_id: id,
        is_delete: false,
      },
      order: [
        ['id', 'DESC']
      ],
      offset,
      limit,
      raw: true,
    });
    res = await service.comment.plusList(res, uid);
    return res;
  }

  /**
   * 获取画圈下留言数量
   * @param id:int 画圈的id
   * @returns int 留言数量
   */
  async commentCount(id) {
    if(!id) {
      return;
    }
    const { app } = this;
    let cacheKey = 'commentCount_' + id;
    let res = await app.redis.get(cacheKey);
    if(res) {
      res = JSON.parse(res);
    }
    else {
      res = await app.model.comment.findOne({
        attributes: [
          [Sequelize.fn('COUNT', '*'), 'num']
        ],
        where: {
          root_id: id,
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
    }
    return res;
  }

  /**
   * 获取画圈列表下留言数量列表
   * @param idList:Array<int> 画圈的id列表
   * @returns Array<int> 留言数量列表
   */
  async commentCountList(idList) {
    if(!idList) {
      return;
    }
    if(!idList.length) {
      return [];
    }
    const { app } = this;
    let cache = await Promise.all(
      idList.map((id) => {
        if(id !== null && id !== undefined) {
          return app.redis.get('commentCount_' + id);
        }
      })
    );
    let noCacheIdList = [];
    let noCacheIdHash = {};
    let noCacheIndexList = [];
    cache.forEach((item, i) => {
      let id = idList[i];
      if(item) {
        cache[i] = JSON.parse(item);
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
      let res = await app.model.comment.findAll({
        attributes: [
          ['root_id', 'rootId'],
          [Sequelize.fn('COUNT', '*'), 'num']
        ],
        where: {
          root_id: noCacheIdList,
          is_delete: false,
        },
        group: 'rootId',
        raw: true,
      });
      let hash = {};
      if(res.length) {
        res.forEach((item) => {
          let id = item.rootId;
          hash[id] = item.num;
        });
      }
      noCacheIndexList.forEach((i) => {
        let id = idList[i];
        let temp = hash[id] || 0;
        cache[i] = temp;
        app.redis.setex('commentCount_' + id, app.config.redis.time, JSON.stringify(temp));
      });
    }
    return cache;
  }

  /**
   * 获取全部画圈
   * @param uid:int 用户id
   * @param offset:int 分页开始
   * @param limit:int 分页尺寸
   * @returns Object{ count:int, data:Array<Object> }
   */
  async all(uid, offset, limit) {
    let [data, count] = await Promise.all([
      this.allData(uid, offset, limit),
      this.allCount()
    ]);
    return { data, count };
  }

  /**
   * 获取全部画圈信息
   * @param uid:int 用户id
   * @param offset:int 分页开始
   * @param limit:int 分页尺寸
   * @returns Array<Object>
   */
  async allData(uid, offset, limit) {
    offset = parseInt(offset) || 0;
    limit = parseInt(limit) || 1;
    if(offset < 0 || limit < 1) {
      return;
    }
    const { app, service } = this;
    let cacheKey = 'allPost_' + offset + '_' + limit;
    let res = await app.redis.get(cacheKey);
    if(res) {
      res = JSON.parse(res);
    }
    else {
      res = await app.model.comment.findAll({
        attributes: [
          'id',
          ['user_id', 'userId'],
          ['author_id', 'authorId'],
          'content',
          ['parent_id', 'parentId'],
          ['root_id', 'rootId'],
          ['create_time', 'createTime']
        ],
        where: {
          root_id: 0,
          is_delete: false,
        },
        order: [
          ['id', 'DESC']
        ],
        offset,
        limit,
        raw: true,
      });
      app.redis.setex(cacheKey, app.config.redis.time, JSON.stringify(res));
    }
    return await service.comment.plusListFull(res, uid);
  }

  /**
   * 获取全部画圈信息
   * @returns int
   */
  async allCount() {
    const { app } = this;
    let cacheKey = 'allPostCount';
    let res = await app.redis.get(cacheKey);
    if(res) {
      return JSON.parse(res);
    }
    res = await app.model.comment.findOne({
      attributes: [
        [Sequelize.fn('COUNT', '*'), 'num']
      ],
      where: {
        is_delete: false,
        root_id: 0,
      },
      raw: true,
    });
    if(res) {
      res = res.num || 0;
    }
    else {
      res = 0;
    }
    app.redis.setex(cacheKey, app.config.redis.time, JSON.stringify(res));
    return res;
  }

  /**
   * 添加画圈
   * @param uid:int 用户id
   * @param data:Object 数据
   */
  async add(uid, data) {
    if(!uid || !data) {
      return;
    }
    const { app, service } = this;
    if(data.authorId) {
      let check = await service.author.isUser(data.authorId, uid);
      if(!check) {
        return;
      }
    }
    let now = new Date();
    let create = await app.model.comment.create({
      user_id: uid,
      author_id: data.authorId || 0,
      content: data.content,
      is_delete: false,
      review: 0,
      state: 0,
      parent_id: 0,
      root_id: 0,
      create_time: now,
      update_time: now,
    });
    if(create) {
      let query = [];
      if(data.chooseTagIdList) {
        query = data.chooseTagIdList.map((id) => {
          return app.model.tagCommentRelation.create({
            tag_id: id,
            comment_id: create.id,
            type: 1,
            is_comment_delete: false,
            create_time: now,
            update_time: now,
          });
        });
      }
      if(data.inputTagIdList) {
        query = query.concat(data.inputTagIdList.map((id) => {
          return app.model.tagCommentRelation.create({
            tag_id: id,
            comment_id: create.id,
            type: 2,
            is_comment_delete: false,
            create_time: now,
            update_time: now,
          });
        }));
      }
      if(data.image) {
        query = query.concat(data.image.map((item) => {
          return app.model.commentMedia.create({
            comment_id: create.id,
            kind: 3,
            url: item.url,
            width: item.width,
            height: item.height,
            duration: 0,
            update_time: now,
          });
        }));
      }
      if(data.audioUrl) {
        query = query.concat(
          app.model.commentMedia.create({
            comment_id: create.id,
            kind: 2,
            url: data.audioUrl,
            update_time: now,
          })
        );
      }
      if(data.videoUrl) {
        query = query.concat(
          app.model.commentMedia.create({
            comment_id: create.id,
            kind: 1,
            url: data.videoUrl,
            update_time: now,
          })
        );
      }
      if(data.worksId && data.workId) {
        query.push(app.model.commentWork.create({
          comment_id: create.id,
          works_id: data.worksId,
          work_id: data.workId,
          kind: service.work.getKind(data.workId),
        }));
      }
      await Promise.all(query);
    }
    let res = await service.comment.info(create.id);
    if(data.authorId) {
      app.model.authorDynamic.create({
        author_id: data.authorId,
        target_id: create.id,
        type: 1,
      });
    }
    res = await service.comment.plusFull(res, uid);
    return res;
  }
}

module.exports = Service;
