/**
 * Created by army8735 on 2017/9/20.
 */

import './index.less';

import TopNav from '../component/topnav/TopNav.jsx';
import CIframe from '../component/ciframe/CIframe.jsx';
import QuanNiang from './QuanNiang.jsx';
import Welcome from './Welcome.jsx';

let topNav = migi.preExist(<TopNav userInfo={ $CONFIG.userInfo } authorInfo={ $CONFIG.authorInfo }
                                   isLogin={ $CONFIG.isLogin } isAuthor={ $CONFIG.isAuthor }/>);

let cIframe;
let url;

let quanNiang = migi.render(
  <QuanNiang/>,
  document.body
);

quanNiang.on('message', function() {
  setHash('/my/message');
});

migi.render(
  <div class="info"/>,
  document.body
);

if($CONFIG.isLogin && $CONFIG.userInfo.User_Reg_Stat !== 99 && $CONFIG.userInfo.User_Reg_Stat !== 100) {
  migi.render(
    <Welcome userInfo={ $CONFIG.userInfo } authorInfo={ $CONFIG.authorInfo }/>,
    document.body
  );
}

window.setHash = function(hash, noRedirect) {
  iframeGoto(hash, noRedirect);
  setMenu(hash);
  location.hash = hash;
};
window.setTitle = function(title) {
  document.title = title;
};
window.goto = function(url) {
  location.href = url;
};
window.setWidth = function(width) {
  let diff = document.documentElement.clientWidth - width;
  if(diff > 0) {
    topNav.setMarginRight(diff);
  }
};
window.upZIndex = function() {
  $(cIframe.element).addClass('up');
};
window.downZIndex = function() {
  $(cIframe.element).removeClass('up');
};
window.readMessage = function(n) {
  quanNiang.readMessage(n);
};
window.setMessageNum = function(n) {
  quanNiang.num = n;
};
let commentType = {};
window.comment = function(type) {
  commentType[type] = commentType[type] || [];
  let list = commentType[type];
  let now = Date.now();
  if(list.length) {
    let last = list[list.length - 1];
    if(now - last < 1000 * 60) {
      quanNiang.message = '为了方便其他小伙伴和大大们阅读，请尽量将每次想说的话在一条留言中发布哦~\n将一句留言在短时间内拆成多条发送，所获得的积分并没有作为一条完整留言发送所获得的积分多哦˵ •́ o •̀ ˵';
      quanNiang.show();
    }
  }
  list.push(now);
};

function iframeGoto(hash, noRedirect) {
  hash = hash || '';
  hash = hash.replace(/^#/, '');
  if(hash.charAt(0) !== '/') {
    hash = '/' + hash;
  }
  // 兼容
  if(hash.indexOf('/musicalbum/') === 0) {
    location.hash = '#/works/' + hash.slice(12);
    return;
  }
  if(!hash || hash === '/') {
    hash = '/find';
  }
  if(url === hash) {
    return;
  }
  url = hash;
  if(noRedirect) {
    return;
  }
  if(cIframe) {
    cIframe.clean();
  }
  cIframe = migi.render(
    <CIframe/>,
    document.body
  );
  cIframe.element.contentWindow.location.href = hash;
}

function setMenu(hash) {
  hash = hash || '';
  hash = hash.replace(/^#/, '');
  if(!hash || hash === '/' || hash === '/find') {
    topNav.setCur(0);
  }
  else if(hash === '/circling') {
    topNav.setCur(1);
  }
  else if(hash === '/follow') {
    topNav.setCur(2);
  }
  else {
    topNav.setCur();
  }
}

let hash = location.hash;
window.addEventListener('hashchange', function() {
  iframeGoto(location.hash);
  setMenu(location.hash);
});
iframeGoto(hash);
setMenu(hash);
