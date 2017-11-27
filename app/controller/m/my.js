/**
 * Created by army8735 on 2017/10/27.
 */

'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    * index(ctx) {
      let uid = ctx.session.uid;
      let userInfo = {};
      let follows = [];
      let userFollows = [];
      let userFans = [];
      let favors = [];
      let myPost = {};
      let bonusPoint = {};
      let lastUpdateNickNameTime;
      let lastUpdateHeadTime;
      let res = yield {
        userInfo: ctx.helper.postServiceJSON('api/users/GetUserInfo', {
          uid,
        }),
        follows: ctx.helper.postServiceJSON('api/users/GetLikeAuthorList', {
          uid,
        }),
        userFollows: ctx.helper.postServiceJSON('api/users/User_FollowList', {
          uid,
          Skip: 0,
          Take: 10,
        }),
        userFans: ctx.helper.postServiceJSON('api/users/User_FansList', {
          uid,
          Skip: 0,
          Take: 10,
        }),
        favors: ctx.helper.postServiceJSON('api/users/GetLikeWorksList', {
          uid,
        }),
        myPost: ctx.helper.postServiceJSON('api/users/User_Post_List', {
          uid,
          Skip: 0,
          Take: 10,
          currentuid: uid,
        }),
        bonusPoint: ctx.helper.postServiceJSON('api/users/getuserrank', {
          uid,
        }),
        lastUpdateNickNameTime: ctx.helper.postServiceJSON('api/users/GetUpdateNickNameLastTime', {
          uid,
        }),
        lastUpdateHeadTime: ctx.helper.postServiceJSON('api/users/GetUpdateHead_UrlLastTime', {
          uid,
        }),
      };
      if(res.userInfo.data.success) {
        userInfo = res.userInfo.data.data;
      }
      if(res.follows.data.success) {
        follows = res.follows.data.data;
      }
      if(res.userFollows.data.success) {
        userFollows = res.userFollows.data.data;
      }
      if(res.userFans.data.success) {
        userFans = res.userFans.data.data;
      }
      if(res.favors.data.success) {
        favors = res.favors.data.data;
      }
      if(res.myPost.data.success) {
        myPost = res.myPost.data.data;
      }
      if(res.bonusPoint.data.success) {
        bonusPoint = res.bonusPoint.data.data || {};
      }
      if(res.lastUpdateNickNameTime.data.success) {
        lastUpdateNickNameTime = res.lastUpdateNickNameTime.data.data;
      }
      if(res.lastUpdateHeadTime.data.success) {
        lastUpdateHeadTime = res.lastUpdateHeadTime.data.data;
      }
      ctx.session.uname = userInfo.NickName;
      ctx.session.head = userInfo.Head_Url;
      if(userInfo.ISAuthor) {
        ctx.session.authorID = userInfo.AuthorID;
        ctx.session.authorName = userInfo.AuthorName;
        ctx.session.authorHead = userInfo.AuthorHead_Url;
      }
      yield ctx.render('mmy', {
        userInfo,
        follows,
        userFollows,
        userFans,
        favors,
        myPost,
        bonusPoint,
        lastUpdateNickNameTime,
        lastUpdateHeadTime,
      });
    }
    * message(ctx) {
      let uid = ctx.session.uid;
      let messages = yield ctx.helper.postServiceJSON('api/users/GetUserNotify', {
        uid,
        Skip: 0,
        Take: 10,
      });
      messages = messages.data.data;
      yield ctx.render('mmy_message', {
        messages,
      });
    }
  }
  return Controller;
};
