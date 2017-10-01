/**
 * Created by army8735 on 2017/9/30.
 */

'use strict';

export default function(data) {
  let helper = data.helper;
  return `<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta charset="UTF-8"/>
  <title>发现</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta name="renderer" content="webkit"/>
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
  <meta name="format-detection" content="telephone=no"/>
  <meta name="format-detection" content="email=no"/>
  <meta name="wap-font-scale" content="no"/>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
  <link rel="stylesheet" href="${helper.getAssetsUrl('/common.css')}"/>
  <link rel="stylesheet" href="${helper.getAssetsUrl('/find.css')}"/>
</head>
<body>
<div id="page"></div>
<script>
  var $CONFIG = {
    kw: 'kw',
    worksID: '2757',
    authorID: '1',
    isLogin: 'True',
    userID: '123456',
    userName: 'mingzi',
    userPic: '',
    loginUrl: 'http://circling.cc/oauth/weibo'
  };
</script>
<script src="${helper.getAssetsUrl('/common.js')}"></script>
<script src="${helper.getAssetsUrl('/find.js')}"></script>
</body>
</html>
`;
};
