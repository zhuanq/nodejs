/**
 * Created by army8735 on 2018/3/25.
 */

'use strict';

const egg = require('egg');
const Sequelize = require('Sequelize');
const squel = require('squel');

const CACHE_TIME = 10;

class Service extends egg.Service {
  /**
   * 点赞作品
   * @param worksId:int 大作品id
   * @param workId:int 小作品id
   * @param uid:int 用户id
   * @param state:boolean 状态
   * @returns Object{ state:boolean, count:int }
   */
  async like(worksId, workId, uid, state) {
    return await this.operate(worksId, workId, uid, 1, state);
  }

  /**
   * 收藏作品
   * @param worksId:int 大作品id
   * @param workId:int 小作品id
   * @param uid:int 用户id
   * @param state:boolean 状态
   * @returns Object{ state:boolean, count:int }
   */
  async favor(worksId, workId, uid, state) {
    return await this.operate(worksId, workId, uid, 2, state);
  }

  /**
   * 操作作品
   * @param worksId:int 大作品id
   * @param workId:int 小作品id
   * @param uid:int 用户id
   * @param type:int 操作类型
   * @param state:boolean 状态
   * @returns Object{ state:boolean, count:int }
   */
  async operate(worksId, workId, uid, type, state) {
    if(!worksId || !workId || !uid || !type) {
      return;
    }
    state = !!state;
    let now = await this.isRelation(workId, uid, type);
    if(now === state) {
      let count = await this.count(workId, type);
      return {
        state,
        count,
      };
    }
    let kind = this.getKind(workId);
    if(!kind) {
      return;
    }
    const { app } = this;
    // 更新内存中用户对作品关系的状态，同时入库
    let cacheKey = 'userWorkRelation_' + uid + '_' + workId + '_' + type;
    if(state) {
      await Promise.all([
        app.redis.setex(cacheKey, CACHE_TIME, 'true'),
        app.model.userWorkRelation.create({
          user_id: uid,
          works_id: worksId,
          work_id: workId,
          kind,
          type,
        })
      ]);
    }
    else {
      await Promise.all([
        app.redis.setex(cacheKey, CACHE_TIME, 'false'),
        app.model.userWorkRelation.destroy({
          where: {
            work_id: workId,
            user_id: uid,
            type,
          },
        })
      ]);
    }
    // 更新计数，优先内存缓存
    cacheKey = 'workCount_' + workId + '_' + type;
    let count = await this.count(workId, type);
    if(state) {
      count++;
      app.redis.incr(cacheKey);
    }
    else {
      count--;
      app.redis.decr(cacheKey);
    }
    return {
      state,
      count,
    };
  }

  /**
   * 根据作品id获取作品类型
   * @param id:int 作品id
   * @returns int
   */
  getKind(id) {
    if(!id) {
      return;
    }
    return {
      2016: 2,
      2020: 1,
      2021: 3,
      2022: 4,
    }[id.slice(0, 4)] || 0;
  }

  /**
   * 根据kind返回类型名
   * @param kind:int 类型
   * @returns string
   */
  getKindName(kind) {
    return {
      1: '视频',
      2: '音频',
      3: '图片',
      4: '文字',
    }[kind] || '其它';
  }

  /**
   * 根据id列表返回小作品信息
   * @param idList:Array<int>
   * @param kind:int
   * @returns Array<Object>
   */
  async infoList(idList, kind) {
    switch(kind) {
      case 1:
        return await this.videoList(idList);
      case 2:
        return await this.audioList(idList);
      case 3:
        return await this.imageList(idList);
      case 4:
        return await this.textList(idList);
    }
    return [];
  }
  /**
   * 根据id列表获取视频信息
   * @param idList:Array<int>
   * @returns Array<Object>
   */
  async videoList(idList) {
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
          return app.redis.get('video_' + id);
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
        app.redis.expire('video_' + id, CACHE_TIME);
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
        .from('video')
        .from('work_type')
        .field('video.id')
        .field('video.title')
        .field('video.width')
        .field('video.height')
        .field('video.duration')
        .field('video.cover')
        .field('video.url')
        .field('video.type')
        .field('work_type.name', 'typeName')
        .where('video.id IN ?', noCacheIdList)
        .where('video.type=work_type.id')
        .toString();
      let res = await app.sequelizeCircling.query(sql, { type: Sequelize.QueryTypes.SELECT });
      let hash = {};
      if(res.length) {
        res.forEach((item) => {
          let id = item.id;
          hash[id] = item;
        });
      }
      noCacheIndexList.forEach((i) => {
        let id = idList[i];
        let temp = hash[id];
        if(temp) {
          cache[i] = temp;
          app.redis.setex('video_' + id, CACHE_TIME, JSON.stringify(temp));
        }
        else {
          app.redis.setex('video_' + id, CACHE_TIME, 'null');
        }
      });
    }
    return cache;
  }

  /**
   * 根据id列表获取音频信息
   * @param idList:Array<int>
   * @returns Array<Object>
   */
  async audioList(idList) {
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
          return app.redis.get('audio_' + id);
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
        app.redis.expire('audio_' + id, CACHE_TIME);
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
        .from('audio')
        .from('work_type')
        .field('audio.id')
        .field('audio.title')
        .field('audio.duration')
        .field('audio.cover')
        .field('audio.url')
        .field('audio.type')
        .field('work_type.name', 'typeName')
        .where('audio.id IN ?', noCacheIdList)
        .where('audio.type=work_type.id')
        .toString();
      let res = await app.sequelizeCircling.query(sql, { type: Sequelize.QueryTypes.SELECT });
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
        app.redis.setex('audio_' + id, CACHE_TIME, JSON.stringify(temp));
      });
    }
    return cache;
  }

  /**
   * 根据id列表获取图片信息
   * @param idList:Array<int>
   * @returns Array<Object>
   */
  async imageList(idList) {
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
          return app.redis.get('image_' + id);
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
        app.redis.expire('image_' + id, CACHE_TIME);
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
        .from('image')
        .from('work_type')
        .field('image.id')
        .field('image.title')
        .field('image.width')
        .field('image.height')
        .field('image.url')
        .field('image.type')
        .field('work_type.name', 'typeName')
        .where('image.id IN ?', noCacheIdList)
        .where('image.type=work_type.id')
        .toString();
      let res = await app.sequelizeCircling.query(sql, { type: Sequelize.QueryTypes.SELECT });
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
        app.redis.setex('image_' + id, CACHE_TIME, JSON.stringify(temp));
      });
    }
    return cache;
  }

  /**
   * 根据id列表获取文本信息
   * @param idList:Array<int>
   * @returns Array<Object>
   */
  async textList(idList) {
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
          return app.redis.get('text_' + id);
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
        app.redis.expire('text_' + id, CACHE_TIME);
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
        .from('text')
        .from('work_type')
        .field('text.id')
        .field('text.title')
        .field('text.content')
        .field('text.type')
        .field('work_type.name', 'typeName')
        .where('text.id IN ?', noCacheIdList)
        .where('text.type=work_type.id')
        .toString();
      let res = await app.sequelizeCircling.query(sql, { type: Sequelize.QueryTypes.SELECT });
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
        app.redis.setex('text_' + id, CACHE_TIME, JSON.stringify(temp));
      });
    }
    return cache;
  }

  /**
   * 获取用户对作品的点赞关系
   * @param id:int 作品id
   * @param uid:int 用户id
   * @returns boolean
   */
  async isLike(id, uid) {
    return await this.isRelation(id, uid, 1);
  }

  /**
   * 获取用户对作品的收藏关系
   * @param id:int 作品id
   * @param uid:int 用户id
   * @returns boolean
   */
  async isFavor(id, uid) {
    return await this.isRelation(id, uid, 1);
  }

  async isRelation(id, uid, type) {
    if(!id || !uid || !type) {
      return;
    }
    const { app } = this;
    let cacheKey = 'userWorkRelation_' + uid + '_' + id + '_' + type;
    let res = await app.redis.get(cacheKey);
    if(res) {
      app.redis.expire(cacheKey, CACHE_TIME);
      return JSON.parse(res);
    }
    res = await app.model.userWorkRelation.findOne({
      attributes: [
        'id'
      ],
      where: {
        user_id: uid,
        type,
        work_id: id,
      },
      raw: true,
    });
    res = !!res;
    app.redis.setex(cacheKey, CACHE_TIME, JSON.stringify(res));
    return res;
  }

  /**
   * 获取用户对作品的点赞关系列表
   * @param idList:Array<int> 作品id
   * @param uid:int 用户id
   * @returns Array<boolean>
   */
  async isLikeList(idList, uid) {
    return await this.isRelationList(idList, uid, 1);
  }

  /**
   * 获取用户对作品的收藏关系列表
   * @param idList:Array<int> 作品id
   * @param uid:int 用户id
   * @returns Array<boolean>
   */
  async isFavorList(idList, uid) {
    return await this.isRelationList(idList, uid, 2);
  }

  async isRelationList(idList, uid, type) {
    if(!idList || !uid || !type) {
      return;
    }
    if(!idList.length) {
      return [];
    }
    const { app } = this;
    let cache = await Promise.all(
      idList.map((id) => {
        if(id !== null && id !== undefined) {
          return app.redis.get('userWorkRelation_' + uid + '_' + id + '_' + type);
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
        app.redis.expire('userWorkRelation_' + uid + '_' + id + '_' + type, CACHE_TIME);
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
      let res = await app.model.userWorkRelation.findAll({
        attributes: [
          ['work_id', 'workId']
        ],
        where: {
          user_id: uid,
          type,
          work_id: noCacheIdList,
        },
        raw: true,
      });
      let hash = {};
      if(res.length) {
        res.forEach((item) => {
          let id = item.workId;
          hash[id] = true;
        });
      }
      noCacheIndexList.forEach((i) => {
        let id = idList[i];
        let temp = hash[id] || false;
        cache[i] = temp;
        app.redis.setex('userWorkRelation_' + uid + '_' + id + '_' + type, CACHE_TIME, JSON.stringify(temp));
      });
    }
    return cache;
  }

  /**
   * 获取点赞统计数据
   * @param id:int 作品id
   * @returns int
   */
  async likeCount(id) {
    return await this.relationCount(id, 1);
  }

  /**
   * 获取收藏统计数据
   * @param id:int 作品id
   * @returns int
   */
  async favorCount(id) {
    return await this.relationCount(id, 2);
  }

  async relationCount(id, type) {
    if(!id || !type) {
      return;
    }
    const { app } = this;
    let cacheKey = 'workCount_' + id + '_' + type;
    let res = await app.redis.get(cacheKey);
    if(res) {
      app.redis.expire(cacheKey, CACHE_TIME);
      return JSON.parse(res);
    }
    res = await app.model.userWorkRelation.findOne({
      attributes: [
        [Sequelize.fn('COUNT', '*'), 'num']
      ],
      where: {
        work_id: id,
        type,
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

  /**
   * 获取点赞统计数据
   * @param idList:Array<int> 作品id列表
   * @returns Array<int>
   */
  async likeCountList(idList) {
    return await this.relationCountList(idList, 1);
  }

  /**
   * 获取收藏统计数据
   * @param idList:Array<int> 作品id列表
   * @returns Array<int>
   */
  async favorCountList(idList) {
    return await this.relationCountList(idList, 2);
  }

  /**
   * 根据id列表和type获取对应数据
   * @param idList:Array<int> 作品id列表
   * @param type:int 数据类型
   * @returns Array<int>
   */
  async relationCountList(idList, type) {
    if(!idList || !type) {
      return;
    }
    if(!idList.length) {
      return [];
    }
    const { app } = this;
    let cache = await Promise.all(
      idList.map((id) => {
        if(id !== null && id !== undefined) {
          return app.redis.get('workCount_' + id + '_' + type);
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
        app.redis.expire('workCount_' + id + '_' + type, CACHE_TIME);
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
      let res = await app.model.userWorkRelation.findAll({
        attributes: [
          ['work_id', 'workId'],
          [Sequelize.fn('COUNT', '*'), 'num']
        ],
        where: {
          work_id: noCacheIdList,
          type,
        },
        group: 'work_id',
        raw: true,
      });
      let hash = {};
      if(res.length) {
        res.forEach((item) => {
          let id = item.workId;
          hash[id] = item.num;
        });
      }
      noCacheIndexList.forEach((i) => {
        let id = idList[i];
        let temp = hash[id] || 0;
        cache[i] = temp;
        app.redis.setex('workCount_' + id + '_' + type, CACHE_TIME, JSON.stringify(temp));
      });
    }
    return cache;
  }

  /**
   * 获取播放数
   * @param id:int 作品id
   * @returns int
   */
  async playCount(id) {
    if(!id) {
      return;
    }
    const { app } = this;
    let cacheKey = 'playCount_' + id;
    let res = await app.redis.get(cacheKey);
    if(res) {
      app.redis.expire(cacheKey, CACHE_TIME);
      return JSON.parse(res);
    }
    res = await app.model.workNum.findOne({
      attributes: [
        'num'
      ],
      where: {},
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

  /**
   * 获取播放数列表
   * @param idList:Array<int> 作品id列表
   * @returns Array<int>
   */
  async playCountList(idList) {
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
          return app.redis.get('playCount_' + id);
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
        app.redis.expire('playCount_' + id, CACHE_TIME);
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
      let res = await app.model.workNum.findAll({
        attributes: [
          ['work_id', 'workId'],
          'num'
        ],
        where: {
          work_id: noCacheIdList,
        },
        raw: true,
      });
      let hash = {};
      if(res.length) {
        res.forEach((item) => {
          let id = item.workId;
          hash[id] = item.num || 0;
        });
      }
      noCacheIndexList.forEach((i) => {
        let id = idList[i];
        let temp = hash[id] || 0;
        cache[i] = temp;
        app.redis.setex('playCount_' + id, CACHE_TIME, JSON.stringify(temp));
      });
    }
    return cache;
  }
}

module.exports = Service;
