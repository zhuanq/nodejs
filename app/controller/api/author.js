/**
 * Created by army8735 on 2017/10/3.
 */

'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    * follow(ctx) {
      let uid = ctx.session.uid;
      let authorID = ctx.request.body.authorID;
      let res = yield ctx.helper.postServiceJSON('api/author/SaveAuthorToUser', {
        uid,
        Author: authorID,
      });
      ctx.body = res.data;
    }
    * unFollow(ctx) {
      let uid = ctx.session.uid;
      let authorID = ctx.request.body.authorID;
      let res = yield ctx.helper.postServiceJSON('api/author/RemoveAuthorToUser', {
        uid,
        Author: authorID,
      });
      ctx.body = res.data;
    }
    * commentList(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON('api/author/GetToAuthorMessage_List', {
        uid,
        AuthorID: body.authorID,
        Skip: body.skip,
        Take: body.take,
        SortType: body.sortType,
        MyComment: body.myComment,
        CurrentCount: body.currentCount,
      });
      ctx.body = res.data;
    }
    * addComment(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let content = (body.content || '').trim();
      if(content.length < 3 || content.length > 2048) {
        return ctx.body = {
          success: false,
        };
      }
      let res = yield ctx.helper.postServiceJSON('api/author/AddComment', {
        uid,
        ParentID: body.parentID,
        RootID: body.rootID,
        Content: content,
        AuthorCommentID: body.authorID,
      });
      ctx.body = res.data;
    }
    * likeComment(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON('api/author/AddWorkCommentLike', {
        uid,
        CommentID: body.commentID,
      });
      ctx.body = res.data;
    }
    * delComment(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON('api/author/DeleteCommentByID', {
        uid,
        CommentID: body.commentID,
      });
      ctx.body = res.data;
    }
    * subCommentList(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON('api/author/GetTocomment_T_List', {
        uid,
        RootID: body.rootID,
        Skip: body.skip,
        Take: body.take,
      });
      ctx.body = res.data;
    }
    * maList(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON('api/find/Hot_WorkItems', {
        uid,
        AuthorID: body.authorID,
        Skip: body.skip,
        Take: body.take,
      });
      ctx.body = res.data;
    }
  }
  return Controller;
};
