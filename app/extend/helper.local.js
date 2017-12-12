/**
 * Created by army8735 on 2017/10/1.
 */

'use strict';

let helper = {
  * postServiceJSON(url, data) {
    if(url.indexOf('//') === -1) {
      url = 'http://192.168.0.6/' + url.replace(/^\//, '');
    }
    url += url.indexOf('?') > -1 ? '&' : '?';
    url += 'traceID=' + this.ctx.traceID || '';
    let uid = this.ctx.session ? this.ctx.session.uid || '-' : '-';
    let ip = this.ctx.request.header['x-real-ip'];
    let start = Date.now();
    let res;
    try {
      res = yield this.ctx.curl(url, {
        method: 'POST',
        data,
        dataType: 'json',
        gzip: true,
      });
    }
    catch(e) {
      let end = Date.now();
      this.ctx.getLogger('serviceLogger').error('[%s/%s/%s/%sms POST %s]', uid, ip, this.ctx.traceID, end - start, url);
      throw new Error(e);
    }
    let end = Date.now();
    this.ctx.getLogger('serviceLogger').info('[%s/%s/%s/%sms POST %s]', uid, ip, this.ctx.traceID, end - start, url);
    return res;
  },
  * postServiceJSON2(url, data) {
    if(url.indexOf('//') === -1) {
      url = 'http://192.168.0.3/' + url.replace(/^\//, '');
    }
    url += url.indexOf('?') > -1 ? '&' : '?';
    url += 'traceID=' + this.ctx.traceID || '';
    let uid = this.ctx.session ? this.ctx.session.uid || '-' : '-';
    let ip = this.ctx.request.header['x-real-ip'];
    let start = Date.now();
    let res;
    if(data && data.uid && data.uid.toString().length !== 16) {
      let temp = parseInt(data.uid);
      temp = 2018000000000000 + temp;
      data.uid = temp.toString().slice(0, 16);
    }console.log(data.uid);
    try {
      res = yield this.ctx.curl(url, {
        method: 'POST',
        data,
        dataType: 'json',
        gzip: true,
      });
    }
    catch(e) {
      let end = Date.now();
      this.ctx.getLogger('serviceLogger').error('[%s/%s/%s/%sms POST %s]', uid, ip, this.ctx.traceID, end - start, url);
      throw new Error(e);
    }
    let end = Date.now();
    this.ctx.getLogger('serviceLogger').info('[%s/%s/%s/%sms POST %s]', uid, ip, this.ctx.traceID, end - start, url);
    return res;
  },
  weiboAppKey: '1987340303',
  weiboAppSecret: 'ae82c745736d8dc78230d96388790b22',
  weiboRedirect: 'http://dev.circling.cc2/oauth/login',
  rhymeAppKey: '2120765784',
  rhymeAppSecret: '1db3207ed08ac5224a680898bbe10540',
  rhymeRedirect: 'http://dev.rhymesland.net/oauth/rhymeLogin',
};

module.exports = helper;
