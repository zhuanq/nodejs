/**
 * Created by army8735 on 2017/12/24.
 */

'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    * list(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let res = yield ctx.helper.postServiceJSON2('api/Circling/GetTagPostList', {
        uid,
        TagName: body.tag,
        Skip: body.skip,
        Take: body.take,
      });
      ctx.body = res.data;
    }
  }
  return Controller;
};
