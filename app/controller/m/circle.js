/**
 * Created by army8735 on 2017/11/5.
 */

'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    * index(ctx) {
      let uid = ctx.session.uid;
      let circleID = ctx.params.circleID;
      if(!circleID) {
        return;
      }
      let circleDetail = {};
      let stick = {};
      let postList = {};
      let res = yield {
        circleDetail: ctx.helper.postServiceJSON2('api/circling/GetCirclingDetails', {
          uid,
          circlingID: circleID,
        }),
        stick: ctx.helper.postServiceJSON2('api/Circling/GetTopPostList', {
          uid,
          circlingID: circleID,
        }),
        postList: ctx.helper.postServiceJSON2('api/circling/GetPostList', {
          uid,
          circlingID: circleID,
          Skip: 0,
          Take: 10,
        }),
      };
      if(res.circleDetail.data.success) {
        circleDetail = res.circleDetail.data.data;
      }
      if(res.stick.data.success) {
        stick = res.stick.data.data;
      }
      if(res.postList.data.success) {
        postList = res.postList.data.data;
      }
      yield ctx.render('mcircle', {
        uid,
        circleID,
        circleDetail,
        stick,
        postList,
      });
    }
    * post(ctx) {
      let uid = ctx.session.uid;
      let circleID = ctx.query.circleID;
      let circleDetail = {};
      let myCircleList = [];
      let res = yield {
        circleDetail: circleID ? ctx.helper.postServiceJSON2('api/circling/GetCirclingDetails', {
          uid,
          circlingID: circleID,
        }) : null,
        myCircleList: ctx.helper.postServiceJSON2('api/Circling/GetAddPostCircling', {
          uid,
          Skip: 0,
          Take: 6,
        }),
      };
      if(res.circleDetail && res.circleDetail.data.success) {
        circleDetail = res.circleDetail.data.data;
      }
      if(res.myCircleList.data.success) {
        myCircleList = res.myCircleList.data.data.data;
      }
      yield ctx.render('mcpost', {
        uid,
        circleID,
        circleDetail,
        myCircleList,
      });
    }
  }
  return Controller;
};
