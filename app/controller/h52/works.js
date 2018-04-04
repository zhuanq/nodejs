/**
 * Created by army8735 on 2018/3/26.
 */

'use strict';

const egg = require('egg');

class Controller extends egg.Controller {
  async index() {
    const { ctx, service } = this;
    let uid = ctx.session.uid;
    let body = ctx.request.body;
    let worksId = body.worksId;
    if(!worksId) {
      return;
    }
    let [[info, professionSort], author, collection, comment] = await Promise.all([
      service.works.infoAndTypeProfessionSort(worksId),
      service.works.author(worksId),
      service.works.collection(worksId, uid),
      service.works.comment(worksId, 0, 10)
    ]);
    comment.limit = 10;
    author = service.works.reorderAuthor(author, professionSort);
    ctx.body = ctx.helper.okJSON({
      info,
      collection,
      author,
      comment,
    });
  }
  async comment() {
    const { ctx, service } = this;
    let uid = ctx.session.uid;
    let body = ctx.request.body;
    let worksId = body.worksId;
    if(!worksId) {
      return;
    }
    let res = await service.works.comment(worksId, body.offset || 0, body.limit || 10);
    res.limit = 10;
    ctx.body = ctx.helper.okJSON(res);
  }
  async like() {
    const { ctx, service } = this;
    let uid = ctx.session.uid;
    let body = ctx.request.body;
    let worksId = body.worksId;
    let workId = body.workId;
    if(!worksId || !workId) {
      return;
    }
    let res = await service.work.like(uid, worksId, workId, true);
    ctx.body = ctx.helper.okJSON(res);
  }
  async unLike() {
    const { ctx, service } = this;
    let uid = ctx.session.uid;
    let body = ctx.request.body;
    let worksId = body.worksId;
    let workId = body.workId;
    if(!worksId || !workId) {
      return;
    }
    let res = await service.work.like(uid, worksId, workId, false);
    ctx.body = ctx.helper.okJSON(res);
  }
  async favor() {
    const { ctx, service } = this;
    let uid = ctx.session.uid;
    let body = ctx.request.body;
    let worksId = body.worksId;
    let workId = body.workId;
    if(!worksId || !workId) {
      return;
    }
    let res = await service.work.favor(uid, worksId, workId, true);
    ctx.body = ctx.helper.okJSON(res);
  }
  async unFavor() {
    const { ctx, service } = this;
    let uid = ctx.session.uid;
    let body = ctx.request.body;
    let worksId = body.worksId;
    let workId = body.workId;
    if(!worksId || !workId) {
      return;
    }
    let res = await service.work.favor(uid, worksId, workId, false);
    ctx.body = ctx.helper.okJSON(res);
  }
}

module.exports = Controller;
