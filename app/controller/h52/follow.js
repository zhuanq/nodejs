/**
 * Created by army8735 on 2018/4/6.
 */

'use strict';

const egg = require('egg');
const Sequelize = require('sequelize');
const squel = require('squel');

const LIMIT = 10;

class Controller extends egg.Controller {
  async index() {
    const { ctx, service } = this;
    let uid = ctx.session.uid;
    let [personList, circleList, postList, friendPostList] = await Promise.all([
      service.user.followPersonList(uid, 0, LIMIT),
      service.user.circleList(uid, 0, LIMIT),
      service.user.followPostList(uid, 0, LIMIT),
      service.user.friendPostList(uid, 0, LIMIT)
    ]);
    personList.limit = LIMIT;
    circleList.limit = LIMIT;
    postList.limit = LIMIT;
    ctx.body = ctx.helper.okJSON({
      personList,
      circleList,
      postList,
      friendPostList,
    });
  }

  async circle() {
    const { ctx, service } = this;
    let uid = ctx.session.uid;
    let body = ctx.request.body;
    let offset = body.offset || 0;
    offset = parseInt(offset) || 0;
    let res = await service.user.circleList(uid, offset, LIMIT);
    res.limit = LIMIT;
    ctx.body = ctx.helper.okJSON(res);
  }

  async postList() {
    const { ctx, service } = this;
    let uid = ctx.session.uid;
    let body = ctx.request.body;
    let res = await service.user.followPostList(uid, body.offset || 0, LIMIT);
    res.limit = LIMIT;
    ctx.body = ctx.helper.okJSON(res);
  }
}

module.exports = Controller;
