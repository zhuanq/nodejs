/**
 * Created by army8735 on 2017/10/4.
 */

'use strict';

import TopNav from '../assets/m/component/topnav/TopNav.jsx';
import BotNav from '../assets/m/component/botnav/BotNav.jsx';
import Search from '../assets/m/search/Search.jsx';

export default function(data) {
  migi.Element.resetUid();
  let kw = data.kw;
  let datas = data.datas;

  let search = migi.preRender(<Search kw={ kw } datas={ datas }/>);
  let topNav = migi.preRender(<TopNav kw={ kw }/>);
  let botNav = migi.preRender(<BotNav/>);

  return `<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta charset="UTF-8"/>
  <title>${kw}</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta name="renderer" content="webkit"/>
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
  <meta name="format-detection" content="telephone=no"/>
  <meta name="format-detection" content="email=no"/>
  <meta name="wap-font-scale" content="no"/>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">
  <link rel="stylesheet" href="${data.helper.getAssetUrl('/common.css')}"/>
  <link rel="stylesheet" href="${data.helper.getAssetUrl('/search.css')}"/>
</head>
<body>
<div id="page">${ search }</div>
${ topNav }
${ botNav }
<script>
  var $CONFIG = {
    kw: ${JSON.stringify(kw)},
    datas: ${JSON.stringify(datas)},
  };
</script>
<script src="${data.helper.getAssetUrl('/common.js')}"></script>
<script src="${data.helper.getAssetUrl('/search.js')}"></script>
</body>
</html>`;
};
