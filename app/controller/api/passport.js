/**
 * Created by army8735 on 2018/7/30.
 */

'use strict';

const egg = require('egg');

class Controller extends egg.Controller {
  async login() {
    const { ctx, service } = this;
    let body = ctx.request.body;
    let phone = body.phone;
    let pw = body.pw;
    if(!phone || !/^1\d{10}$/.test(phone)) {
      return ctx.body = ctx.helper.errorJSON({
        message: '手机号不合法~',
      });
    }
    if(!pw || pw.length < 6) {
      return ctx.body = ctx.helper.errorJSON({
        message: '密码长度不符合要求~',
      });
    }
    let res = await service.passport.check(phone, pw);
    if(!res.success) {
      return ctx.body = ctx.helper.errorJSON({
        message: res.message,
      });
    }
    let uid = res.data;
    let user = await service.user.info(uid);
    ctx.session.uid = user.id;
    ctx.session.nickname = user.nickname;
    delete ctx.session.goto;
    ctx.body = ctx.helper.okJSON(user);
  }

  async resetCode() {
    const { ctx, service } = this;
    let body = ctx.request.body;
    let phone = body.phone;
    if(!phone || !/^1\d{10}$/.test(phone)) {
      return ctx.helper.errorJSON({
        message: '手机号不合法~',
      });
    }
    let res = await service.passport.resetCode(phone);
    if(res.success) {
      ctx.body = ctx.helper.okJSON();
    }
    else {
      ctx.body = ctx.helper.errorJSON({
        message: res.message,
      });
    }
  }

  async reset() {
    const { ctx, service } = this;
    let body = ctx.request.body;
    let phone = body.phone;
    let pw = body.pw;
    let code = body.code;
    if(!phone || !/^1\d{10}$/.test(phone)) {
      return ctx.helper.errorJSON({
        message: '手机号不合法~',
      });
    }
    if(!pw || pw.length < 6) {
      return ctx.body = ctx.helper.errorJSON({
        message: '密码长度不符合要求~',
      });
    }
    if(!code || code.length !== 6) {
      return ctx.body = ctx.helper.errorJSON({
        message: '验证码长度不符合要求~',
      });
    }
    let res = await service.passport.reset(phone, pw, code);
    if(res.success) {
      ctx.body = ctx.helper.okJSON();
    }
    else {
      ctx.body = ctx.helper.errorJSON({
        message: res.message,
      });
    }
  }

  async registerCode() {
    const { ctx, service } = this;
    let body = ctx.request.body;
    let phone = body.phone;
    if(!phone || !/^1\d{10}$/.test(phone)) {
      return ctx.helper.errorJSON({
        message: '手机号不合法~',
      });
    }
    let res = await service.passport.registerCode(phone);
    if(res.success) {
      ctx.body = ctx.helper.okJSON();
    }
    else {
      ctx.body = ctx.helper.errorJSON({
        message: res.message,
      });
    }
  }

  async register() {
    const { ctx, service } = this;
    let body = ctx.request.body;
    let phone = body.phone;
    let pw = body.pw;
    let code = body.code;
    if(!phone || !/^1\d{10}$/.test(phone)) {
      return ctx.helper.errorJSON({
        message: '手机号不合法~',
      });
    }
    if(!pw || pw.length < 6) {
      return ctx.body = ctx.helper.errorJSON({
        message: '密码长度不符合要求~',
      });
    }
    if(!code || code.length !== 6) {
      return ctx.body = ctx.helper.errorJSON({
        message: '验证码长度不符合要求~',
      });
    }
    let res = await service.passport.register(phone, pw, code);
    if(res.success) {
      ctx.body = ctx.helper.okJSON(res.data);
    }
    else {
      ctx.body = ctx.helper.errorJSON({
        message: res.message,
      });
    }
  }

  async loginOut() {
    const { ctx } = this;
    ctx.session = null;
    ctx.body = ctx.helper.okJSON();
  }
}

module.exports = Controller;
