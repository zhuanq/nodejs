/**
 * Created by army8735 on 2017/10/17.
 */

'use strict';

const OSS = require('ali-oss');
const Spark = require('spark-md5');

module.exports = app => {
  class Controller extends app.Controller {
    * settle(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      // 不入驻，设置状态为10走普通用户流程
      if(body.settle === 'false') {
        let res = yield ctx.helper.postServiceJSON2('api/users/SaveUser_Reg_Stat', {
          uid,
          User_Reg_Stat: 10,
        });
        return ctx.body = res.data;
      }
      // 入驻，设置状态为公开10马甲1，走设置马甲昵称流程
      else if(body.settle === 'true') {
        let res = yield ctx.helper.postServiceJSON2('api/users/SaveAuthorSettled', {
          uid,
          AuthorID: ctx.session.authorID,
          SettledType: body.public === 'true' ? 0 : 1,
        });
        if(res.data.success) {
          let res2 = yield ctx.helper.postServiceJSON2('api/users/SaveUser_Reg_Stat', {
            uid,
            User_Reg_Stat: body.public === 'true' ? 10 : 1,
          });
          return ctx.body = res2.data;
        }
      }
      ctx.body = {
        success: false,
      };
    }
    * settleShadowName(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let nickName = body.nickName || '';
      nickName = nickName.trim();
      let length = (nickName || '').length;
      if(length < 2 || length > 8) {
        return ctx.body = {
          success: false,
          message: '昵称长度需要在2~8个字之间哦！',
        };
      }
      if(nickName.indexOf('转圈') === 0) {
        return ctx.body = {
          success: false,
          message: '昵称不能以"转圈"开头哦！',
        };
      }
      let scan = yield ctx.service.green.textScan(nickName);
      if(scan.data.code === 200 && scan.data.data[0].code === 200) {
        let suggestion = scan.data.data[0].results[0].suggestion;
        if(suggestion !== 'pass') {
          return ctx.body = {
            success: false,
            message: '昵称中可能含有违规信息，请尝试换一个哦~',
          };
        }
        let res = yield ctx.helper.postServiceJSON2('api/users/UpdateNickName', {
          uid,
          NickName: nickName,
        });
        if(res.data.success) {
          let res2 = yield ctx.helper.postServiceJSON2('api/users/SaveUser_Reg_Stat', {
            uid,
            User_Reg_Stat: 10,
          });
          return ctx.body = res2.data;
        }
        else if(res.data.code === 1006) {
          return ctx.body = {
            success: false,
            message: '昵称已被占用，换个名字试试吧~',
          }
        }
        return ctx.body = res.data;
      }
      ctx.body = {
        success: false,
      };
    }
    * settleShadow(ctx) {
      let uid = ctx.session.uid;
      let res = yield ctx.helper.postServiceJSON2('api/users/SaveAuthorSettled', {
        uid,
        AuthorID: ctx.session.authorID,
        SettledType: 1,
      });
      if(res.data.success) {
        let res2 = yield ctx.helper.postServiceJSON2('api/users/SaveUser_Reg_Stat', {
          uid,
          User_Reg_Stat: 10,
        });
        return ctx.body = res2.data;
      }
      ctx.body = {
        success: false,
      };
    }
    * guideSuggest(ctx) {
      let uid = ctx.session.uid;
      let res = yield {
        tags: ctx.helper.postServiceJSON2('api/users/GetCirclingInfo', {
          uid,
          Skip: 0,
          Take: 99,
        }),
        authors: ctx.helper.postServiceJSON2('api/users/GetAuthor', {
          uid,
          Skip: 0,
          Take: 32,
        }),
      };
      ctx.body = {
        success: true,
        data: {
          tags: res.tags.data.data || {},
          authors: res.authors.data.data || {},
        },
      };
    }
    * guideSave(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let tags = body.tags || [];
      let authors = body.authors || [];
      // 关注接口降级
      if(tags.length) {
        yield ctx.helper.postServiceJSON2('api/users/SaveTagToUser', {
          uid,
          TaglID: tags.join(',')
        });
      }
      if(authors.length) {
        yield ctx.helper.postServiceJSON2('api/users/SaveAuthorToUser', {
          uid,
          AuthorID: authors.join(',')
        });
      }
      let res = yield ctx.helper.postServiceJSON2('api/users/SaveUser_Reg_Stat', {
        uid,
        User_Reg_Stat: ctx.session.authorID ? 100 : 99,
      });
      return ctx.body = res.data;
    }
    * uploadPic(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      let img = body.img;
      let suffix = 'jpg';
      if(/^data:image\/(\w+);base64,/.test(img)) {
        let file = /^data:image\/(\w+);base64,(.*)$/.exec(img);
        if(!file) {
          return ctx.body = {
            success: false,
          };
        }
        img = file[2];
        suffix = file[1]
      }

      let equalIndex = img.indexOf('=');
      if(equalIndex > 0) {
        let temp = img.slice(0, equalIndex);
        let strLen = temp.length;
        let fileLen = Math.ceil(strLen - (strLen / 8) * 2);
        if(fileLen > 1024 * 1024 * 15) {
          return ctx.body = {
            success: false,
            message: '图片体积太大啦，不能超过15M！',
          };
        }
      }

      // md5
      let spark = new Spark();
      spark.append(img);
      let md5 = spark.end();

      let name = 'pic/' + md5 + '.' + suffix;
      let url = '//zhuanquan.xin/' + name;
      let b = new Buffer(img, 'base64');
      let client = new OSS({
        region: 'oss-cn-shanghai',
        accessKeyId: 'LTAIbZSVA2e931EB',
        accessKeySecret: '5v756TGc1Gv3gkg4rhzoe0OYyLe8Xc',
        bucket: 'circling-assets',
      });
      let check = yield client.list({
        prefix: name,
      });
      if(check.res && check.res.status === 200) {
        let objects = check.objects;
        if(!objects || objects.length === 0) {
          let upload = yield client.put(name, b);
        }
        return ctx.body = {
          success: true,
          data: url,
        };
      }
      ctx.body = {
        success: false,
      };
    }
    * postList(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      if(!body.userID) {
        return;
      }
      let res = yield ctx.helper.postServiceJSON2('api/users/User_Post_List', {
        uid: body.userID,
        Skip: body.skip,
        Take: body.take,
        currentuid: uid,
      });
      ctx.body = res.data;
    }
    * follow(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      if(!body.userID) {
        return;
      }
      let res = yield ctx.helper.postServiceJSON2('api/users/AddFollowUser', {
        uid,
        touid: body.userID,
      });
      ctx.body = res.data;
    }
    * unFollow(ctx) {
      let uid = ctx.session.uid;
      let body = ctx.request.body;
      if(!body.userID) {
        return;
      }
      let res = yield ctx.helper.postServiceJSON2('api/users/RemoveFollowUser', {
        uid,
        touid: body.userID,
      });
      ctx.body = res.data;
    }
  }
  return Controller;
};
