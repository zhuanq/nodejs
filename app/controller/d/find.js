/**
 * Created by army8735 on 2017/10/6.
 */

'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    * index(ctx) {
      let uid = ctx.session.uid;
      let hotWorkList = [];
      let hotAuthorList = [];
      let hotMusicAlbumList = [];
      let hotPhotoAlbumList = [];
      let hotCircleList = [];
      let hotPostList = [];
      let hotPlayList = [];
      let res = yield {
        hotWorkList: ctx.helper.postServiceJSON('api/find/Hot_works_List1', {
          uid,
          Skip: 0,
          Take: 10,
        }),
        hotAuthorList: ctx.helper.postServiceJSON('api/find/Hot_Author_List', {
          uid,
          Skip: 0,
          Take: 10,
        }),
        hotPhotoAlbumList: ctx.helper.postServiceJSON('api/find/Hot_PHOTO_List', {
          uid,
          Skip: 0,
          Take: 10,
        }),
        hotMusicAlbumList: ctx.helper.postServiceJSON('api/find/Hot_album_List', {
          uid,
          Skip: 0,
          Take: 10,
        }),
        hotCircleList: ctx.helper.postServiceJSON('api/find/GetPost', {
          uid,
          Skip: 0,
          Take: 6,
        }),
        hotPostList: ctx.helper.postServiceJSON('api/find/Hot_Post_List', {
          uid,
          Skip: 0,
          Take: 10,
        }),
        hotPlayList: ctx.helper.postServiceJSON('api/find/Hot_WorkItems', {
          uid,
          Skip: 0,
          Take: 30,
        }),
      };
      if(res.hotWorkList.data.success) {
        hotWorkList = res.hotWorkList.data.data;
      }
      if(res.hotAuthorList.data.success) {
        hotAuthorList = res.hotAuthorList.data.data;
      }
      if(res.hotMusicAlbumList.data.success) {
        hotMusicAlbumList = res.hotMusicAlbumList.data.data;
      }
      if(res.hotPhotoAlbumList.data.success) {
        hotPhotoAlbumList = res.hotPhotoAlbumList.data.data;
      }
      if(res.hotCircleList.data.success) {
        hotCircleList = res.hotCircleList.data.data.data;
      }
      if(res.hotPostList.data.success) {
        hotPostList = res.hotPostList.data.data.data;
      }
      if(res.hotPlayList.data.success) {
        hotPlayList = res.hotPlayList.data.data;
      }

      yield ctx.render('dfind', {
        hotWorkList,
        hotAuthorList,
        hotMusicAlbumList,
        hotPhotoAlbumList,
        hotCircleList,
        hotPostList,
        hotPlayList,
      });
    }
  }
  return Controller;
};
