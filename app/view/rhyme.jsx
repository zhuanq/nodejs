/**
 * Created by army8735 on 2017/10/16.
 */

'use strict';

export default function(data) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta charset="utf-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta name="renderer" content="webkit"/>
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
  <meta name="format-detection" content="telephone=no"/>
  <meta name="format-detection" content="email=no"/>
  <meta name="wap-font-scale" content="no"/>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
  <title>异世谣</title>
  <link rel="icon" href="//zhuanquan.xin/img/ba2257a30816928629e0b47f9e6f7b38.png" type="image/x-icon">
  <link rel="stylesheet" href="${data.helper.getAssetUrl('/rcommon.css')}"/>
  <link rel="stylesheet" href="${data.helper.getAssetUrl('/rsingle.css')}"/>
</head>
<body>
<script>
  var IS_LOGIN = false;
  var uid = 0;
  var LOGIN_URL = '';
  var FOLLOW = {};
  var FOLLOW_HETU = '0';
  var FOLLOW_SIXIA = '0';
  var FOLLOW_MUHAN = '0';
  var FOLLOW_MI = '0';
  var FOLLOW_JIEMENG = '0';
  var HETU_ID = '2017000000000001';
  var SIXIA_ID = '2017000000000004';
  var MUHAN_ID = '2017000000000007';
  var MI_ID = '2017000000000012';
  var JIEMENG_ID = '2017000000000002';
</script>
<div id="page" class="page"></div>
<script src="${data.helper.getAssetUrl('/rcommon.js')}" defer="defer"></script>
<script src="${data.helper.getAssetUrl('/rsingle.js')}" defer="defer"></script>
<div style="display:none"><script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1266706529'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s19.cnzz.com/z_stat.php%3Fid%3D1266706529' type='text/javascript'%3E%3C/script%3E"));</script></div>
</body>
</html>`;
};
