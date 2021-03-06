/**
 * Created by army8735 on 2017/10/27.
 */

'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    * index(ctx) {
      let uid = ctx.session.uid;
      let userInfo = {};
      let lastUpdateNickNameTime;
      let lastUpdateHeadTime;
      let coins = {};
      let res = yield {
        userInfo: ctx.service.user.index(uid),
        lastUpdateNickNameTime: ctx.helper.postServiceJSON2('api/users/GetUpdateNickNameLastTime', {
          uid,
        }),
        lastUpdateHeadTime: ctx.helper.postServiceJSON2('api/users/GetUpdateHead_UrlLastTime', {
          uid,
        }),
        coins: ctx.helper.postServiceJSON2('api/users/GetUserCirclingCoins', {
          uid,
        }),
      };
      if(res.userInfo) {
        userInfo = res.userInfo;
      }
      if(res.lastUpdateNickNameTime.data.success) {
        lastUpdateNickNameTime = res.lastUpdateNickNameTime.data.data;
      }
      if(res.lastUpdateHeadTime.data.success) {
        lastUpdateHeadTime = res.lastUpdateHeadTime.data.data;
      }
      if(res.coins.data.success) {
        coins = res.coins.data.data;
      }
      ctx.session.uname = userInfo.NickName;
      ctx.session.head = userInfo.Head_Url;
      if(userInfo.ISAuthor) {
        ctx.session.authorId = ctx.session.authorID = userInfo.AuthorID;
        ctx.session.authorName = userInfo.AuthorName;
        ctx.session.authorHead = userInfo.AuthorHead_Url;
      }
      yield ctx.render('mmy', {
        userInfo,
        lastUpdateNickNameTime,
        lastUpdateHeadTime,
        coins,
      });
    }
    * private(ctx) {
      let uid = ctx.session.uid;
      let privateInfo = {};
      let res = yield {
        privateInfo: ctx.helper.postServiceJSON2('api/users/GetUserAddressInfo', {
          uid,
        }),
      };
      if(res.privateInfo.data.success) {
        privateInfo = res.privateInfo.data.data;
      }
      yield ctx.render('mmy_private', {
        privateInfo,
      });
    }
    * relation(ctx) {
      let uid = ctx.session.uid;
      let tag = ctx.query.tag;
      let follows = {};
      let userFriends = {};
      let userFollows = {};
      let userFollowers = {};
      let res = yield {
        follows: ctx.helper.postServiceJSON2('api/users/GetLikeAuthorList', {
          uid,
          Skip: 0,
          Take: 30,
        }),
        userFriends: ctx.helper.postServiceJSON2('api/users/User_Friends', {
          uid,
          Skip: 0,
          Take: 30,
        }),
        userFollows: ctx.helper.postServiceJSON2('api/users/User_FollowList', {
          uid,
          Skip: 0,
          Take: 30,
        }),
        userFollowers: ctx.helper.postServiceJSON2('api/users/User_FansList', {
          uid,
          Skip: 0,
          Take: 30,
        }),
      };
      if(res.follows.data.success) {
        follows = res.follows.data.data;
      }
      if(res.userFriends.data.success) {
        userFriends = res.userFriends.data.data;
      }
      if(res.userFollows.data.success) {
        userFollows = res.userFollows.data.data;
      }
      if(res.userFollowers.data.success) {
        userFollowers = res.userFollowers.data.data;
      }
      yield ctx.render('mmy_relation', {
        tag,
        follows,
        userFriends,
        userFollows,
        userFollowers,
      });
    }
    * message(ctx) {
      let uid = ctx.session.uid;
      let messages = yield ctx.helper.postServiceJSON2('api/users/GetUserNotify', {
        uid,
        Skip: 0,
        Take: 10,
      });
      messages = messages.data.data;
      yield ctx.render('mmy_message', {
        messages,
      });
    }
    * post(ctx) {
      let uid = ctx.session.uid;
      let postList = yield ctx.helper.postServiceJSON2('api/users/User_Post_List', {
        uid,
        Skip: 0,
        Take: 10,
        CurrentUid: uid,
      });
      postList = postList.data.data;
      yield ctx.render('mmy_post', {
        postList,
      });
    }
    * favor(ctx) {
      let uid = ctx.session.uid;
      let res = yield ctx.helper.postServiceJSON2('api/users/GetUserFavor', {
        uid,
        ItemsType: 1,
        Skip: 0,
        Take: 30,
      });
      yield ctx.render('mmy_favor', {
        dataList: res.data.data,
      });
    }
    * favorPic(ctx) {
      let uid = ctx.session.uid;
      let res = yield ctx.helper.postServiceJSON2('api/users/GetUserFavor', {
        uid,
        ItemsType: 2,
        Skip: 0,
        Take: 10,
      });
      yield ctx.render('mmy_favor_pic', {
        dataList: res.data.data,
      });
    }
    * favorPost(ctx) {
      let uid = ctx.session.uid;
      let res = yield ctx.helper.postServiceJSON2('api/users/GetUserFavor', {
        uid,
        ItemsType: 3,
        Skip: 0,
        Take: 30,
      });
      yield ctx.render('mmy_favor_post', {
        dataList: res.data.data,
      });
    }
  }
  return Controller;
};
