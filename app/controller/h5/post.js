/**
 * Created by army8735 on 2017/12/4.
 */

'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    * index(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let postID = body.postID;
      if(!postID) {
        return;
      }
      let postData = {};
      let replyData = {};
      let res = yield {
        postData: ctx.helper.postServiceJSON2('api/circling/GetPostDetailes', {
          uid,
          PostID: postID,
        }),
        replyData: ctx.helper.postServiceJSON2('api/Users_Comment/GetToPostMessage_List', {
          uid,
          PostID: postID,
          Skip: 0,
          Take: 30,
          sortType: 0,
          currentCount: 0,
          myComment: 0,
        }),
      };
      if(res.postData.data.success) {
        postData = res.postData.data.data;
      }
      if(res.replyData.data.success) {
        replyData = res.replyData.data.data;
      }
      ctx.body = ctx.helper.okJSON({
        postData,
        replyData,
      });
    }
    * like(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON('api/tag/AddLikeBehavior', {
        uid,
        PostID: body.postID,
      });
      ctx.body = res.data;
    }
    * favor(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON2('api/circling/AddCollection', {
        uid,
        PostID: body.postID,
      });
      ctx.body = res.data;
    }
    * unFavor(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON2('api/circling/RemoveCollection', {
        uid,
        PostID: body.postID,
      });
      ctx.body = res.data;
    }
    * del(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON('api/tag/DelPost', {
        uid,
        PostID: body.postID,
      });
      ctx.body = res.data;
    }
    * commentList(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON2('api/Users_Comment/GetToPostMessage_List', {
        uid,
        PostID: body.postID,
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
      let res = yield ctx.helper.postServiceJSON('api/tag/AddComment', {
        uid,
        ParentID: body.parentID,
        RootID: body.rootID,
        Content: content,
        PostID: body.postID,
      });
      ctx.body = res.data;
    }
    * likeComment(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON2('api/Users_Comment/AddCommentLike', {
        uid,
        CommentID: body.commentID,
      });
      ctx.body = res.data;
    }
    * delComment(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON2('api/Users_Comment/DeleteCommentByID', {
        uid,
        CommentID: body.commentID,
      });
      ctx.body = res.data;
    }
    * subCommentList(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON2('api/Users_Comment/GetTocomment_T_List', {
        uid,
        RootID: body.rootID,
        Skip: body.skip,
        Take: body.take,
      });
      ctx.body = res.data;
    }
  }
  return Controller;
};
