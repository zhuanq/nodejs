/**
 * Created by army8735 on 2017/12/18.
 */

module.exports = app => {
  class Controller extends app.Controller {
    * job(ctx) {
      ctx.logger.info('job %s', '111111');
      ctx.logger.info('heads %j', ctx.request.headers);
      ctx.logger.info('head %j', ctx.request.header);
      ctx.logger.info('body %j', ctx.request.body);
      ctx.status = 204;
    }
  }
  return Controller;
};
