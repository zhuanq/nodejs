/**
 * Created by army8735 on 2018/3/30.
 */

'use strict';

const egg = require('egg');
const Sequelize = require('sequelize');
const squel = require('squel');

const CACHE_TIME = 10;

const WORKS_STATE_NAME = {
  0: '已完成',
  1: '未完成', // 公开
  2: '未完成', // 保密
};

class Service extends egg.Service {
  /**
   * 根据专辑id获取专辑信息
   * @param id:int 专辑id
   * @returns Object
   */
  async info(id) {
    if(!id) {
      return;
    }
    const { app, service } = this;
    let cacheKey = 'musicAlbumInfo_' + id;
    let res = await app.redis.get(cacheKey);
    if(res) {
      app.redis.expire(cacheKey, CACHE_TIME);
      res = JSON.parse(res);
    }
    else {
      res = await app.model.musicAlbum.findOne({
        attributes: [
          'id',
          'title',
          ['sub_title', 'subTitle'],
          'state',
          'cover',
          'type'
        ],
        where: {
          id,
        },
        raw: true,
      });
      app.redis.setex(cacheKey, CACHE_TIME, JSON.stringify(res));
    }
    if(res) {
      let type = await service.worksType.info(res.type);
      if(type) {
        res.typeName = type.name;
      }
    }
    return res;
  }

  /**
   * 根据专辑id列表获取专辑信息
   * @param idList:Array<int> 专辑id列表
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
        if(id !== null && id !== undefined) {
          return app.redis.get('musicAlbumInfo_' + id);
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
        app.redis.expire('musicAlbumInfo_' + id, CACHE_TIME);
      }
      else if(id !== null && id !== undefined) {
        if(!noCacheIdHash[id]) {
          noCacheIdList.push(id);
        }
        noCacheIndexList.push(i);
      }
    });
    if(noCacheIdList.length) {
      let sql = squel.select()
        .from('music_album')
        .from('works_type')
        .field('music_album.id')
        .field('music_album.title')
        .field('music_album.sub_title', 'subTitle')
        .field('music_album.state')
        .field('music_album.cover')
        .field('music_album.type')
        .field('works_type.name', 'typeName')
        .where('music_album.id IN ?', noCacheIdList)
        .where('music_album.type=works_type.id')
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
        app.redis.setex('musicAlbumInfo_' + id, CACHE_TIME, JSON.stringify(temp));
      });
    }
    return cache;
  }
  /**
   * 根据专辑id获取小作品集合信息
   * @param id:int 专辑id
   * @param uid:int 用户id
   * @returns Array<Object>
   */
  async collection(id, uid) {
    if(!id) {
      return;
    }
    const { app, service } = this;
    let cacheKey = 'musicAlbumCollection_' + id;
    let res = await app.redis.get(cacheKey);
    if(res) {
      app.redis.expire(cacheKey, CACHE_TIME);
      res = JSON.parse(res);
    }
    else {
      res = await app.model.musicAlbumWorkRelation.findAll({
        attributes: [
          ['works_id', 'worksId'],
          ['work_id', 'workId'],
          'kind'
        ],
        where: {
          album_id: id,
          is_delete: false,
        },
        order: [
          ['weight', 'DESC'],
          'kind'
        ],
        raw: true,
      });
      app.redis.setex(cacheKey, CACHE_TIME, JSON.stringify(res));
    }
    let videoIdList = [];
    let audioIdList = [];
    let worksIdList = [];
    let worksIdHash = {};
    let workIdList = [];
    res.forEach((item) => {
      switch(item.kind) {
        case 1:
          videoIdList.push(item.workId);
          break;
        case 2:
          audioIdList.push(item.workId);
          break;
      }
      workIdList.push(item.workId);
      if(item.worksId && !worksIdHash[item.worksId]) {
        worksIdList.push(item.worksId);
      }
    });
    let [
      videoList,
      audioList,
      userLikeList,
      userFavorList,
      likeCountList,
      favorCountList,
      worksList
    ] = await Promise.all([
      service.work.videoList(videoIdList),
      service.work.audioList(audioIdList),
      service.work.isLikeList(workIdList, uid),
      service.work.isFavorList(workIdList, uid),
      service.work.likeCountList(workIdList),
      service.work.favorCountList(workIdList),
      service.works.infoList(worksIdList)
    ]);
    let videoHash = {};
    let audioHash = {};
    videoList.forEach((item) => {
      if(item) {
        videoHash[item.id] = item;
      }
    });
    audioList.forEach((item) => {
      if(item) {
        audioHash[item.id] = item;
      }
    });
    let userLikeHash = {};
    let userFavorHash = {};
    userLikeList.forEach((item, i) => {
      if(item) {
        let id = workIdList[i];
        userLikeHash[id] = item;
      }
    });
    userFavorList.forEach((item, i) => {
      if(item) {
        let id = workIdList[i];
        userFavorHash[id] = item;
      }
    });
    let likeCountHash = {};
    let favorCountHash = {};
    likeCountList.forEach((item, i) => {
      if(item !== null && item !== undefined) {
        let id = workIdList[i];
        likeCountHash[id] = item;
      }
    });
    favorCountList.forEach((item, i) => {
      if(item !== null && item !== undefined) {
        let id = workIdList[i];
        favorCountHash[id] = item;
      }
    });
    let worksHash = {};
    worksList.forEach((item) => {
      worksHash[item.id] = item;
    });console.log(worksIdList);console.log(worksList);
    return res.map((item) => {
      let temp = {
        id: item.workId,
        kind: item.kind,
      };
      temp.isLike = userLikeHash[temp.id];
      temp.isFavor = userFavorHash[temp.id];
      temp.likeCount = likeCountHash[temp.id];
      temp.favorCount = favorCountHash[temp.id];
      switch(temp.kind) {
        case 1:
          if(videoHash[temp.id]) {
            Object.assign(temp, videoHash[temp.id]);
          }
          break;
        case 2:
          if(audioHash[temp.id]) {
            Object.assign(temp, audioHash[temp.id]);
          }
          break;
      }
      if(worksHash[item.worksId]) {
        temp.works = worksHash[item.worksId];
      }
      return temp;
    });
  }

  /**
   * 获取作品作者列表
   * @param id:int 作品id
   * @returns Array<Object>
   */
  async author(id) {
    if(!id) {
      return;
    }
    const { app, service } = this;
    let cacheKey = 'worksAuthors_' + id;
    let res = await app.redis.get(cacheKey);
    if(res) {
      res = JSON.parse(res);
      app.redis.expire(cacheKey, CACHE_TIME);
    }
    else {
      res = await app.model.musicAlbumAuthorProfessionRelation.findAll({
        attributes: [
          ['work_id', 'workId'],
          ['author_id', 'authorId'],
          ['profession_id', 'professionId']
        ],
        where: {
          album_id: id,
          is_delete: false,
        },
        raw: true,
      });
      app.redis.setex(cacheKey, CACHE_TIME, JSON.stringify(res));
    }
    let authorIdList = [];
    let authorIdHash = {};
    let professionIdList = [];
    let professionIdHash = {};
    res.forEach((item) => {
      let authorId = item.authorId;
      if(!authorIdHash[authorId]) {
        authorIdHash[authorId] = true;
        authorIdList.push(authorId);
      }
      let professionId = item.professionId;
      if(!professionIdHash[professionId]) {
        professionIdHash[professionId] = true;
        professionIdList.push(professionId);
      }
    });
    let [authorList, professionList] = await Promise.all([
      service.author.infoList(authorIdList),
      service.profession.infoList(professionIdList)
    ]);
    let authorHash = {};
    let professionHash = {};
    authorList.forEach((item) => {
      if(item) {
        authorHash[item.id] = item;
      }
    });
    professionList.forEach((item) => {
      if(item) {
        professionHash[item.id] = item;
      }
    });
    res.forEach((item) => {
      let authorInfo = authorHash[item.authorId];
      if(authorInfo) {
        item.headUrl = authorInfo.headUrl;
        item.name = authorInfo.name;
        item.isSettle = authorInfo.isSettle;
      }
      let professionInfo = professionHash[item.professionId];
      if(professionInfo) {
        item.professionName = professionInfo.name;
      }
    });
    return res;
  }

  /**
   * 获取专辑的评论id
   * @param id:int 专辑id
   * @returns int
   */
  async commentId(id) {
    if(!id) {
      return;
    }
    const { app } = this;
    let cacheKey = 'musicAlbumComment_' + id;
    let res = await app.redis.get(cacheKey);
    if(res) {
      app.redis.expire(cacheKey, CACHE_TIME);
      return JSON.parse(res);
    }
    res = await app.model.worksCommentRelation.findOne({
      attributes: [
        ['comment_id', 'commentId']
      ],
      where: {
        works_id: id,
      },
      raw: true,
    });
    if(res) {
      res = res.commentId;
      app.redis.setex(cacheKey, CACHE_TIME, JSON.stringify(res));
    }
    else {
      return;
    }
    return res;
  }

  /**
   * 获取评论全部信息
   * @param id:int 作品id
   * @param uid:int 用户id
   * @param offset:int 分页开始
   * @param limit:int 分页数量
   * @returns Object{ data:Array<Object>, count:int }
   */
  async commentList(id, uid, offset, limit) {
    if(!id) {
      return;
    }
    const { service } = this;
    let commentId = await this.commentId(id);
    return await service.post.commentList(commentId, uid, offset, limit);
  }
}

module.exports = Service;
