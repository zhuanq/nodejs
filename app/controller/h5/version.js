/**
 * Created by army8735 on 2017/10/5.
 */

'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    * index(ctx) {
      ctx.body = {
        success: true,
        version: 44,
        url: 'http://circling.net.cn/h5/h5-0.4.0.zip',
      };
    }
  }
  return Controller;
};
