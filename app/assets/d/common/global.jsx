/**
 * Created by army8735 on 2017/9/18.
 */

'use strict';

import net from './net';
import MLogin from '../component/mlogin/MLogin.jsx';
import Share from '../component/share/Share.jsx';
import uuidv4 from 'uuid/v4';

let mlogin;
migi.eventBus.on('NEED_LOGIN', function() {
  if(!mlogin) {
    mlogin = migi.render(
      <MLogin/>,
      document.body
    );
  }
  mlogin.show();
});

let share;
migi.eventBus.on('SHARE', function(url) {
  if(!share) {
    share = migi.render(
      <Share/>,
      document.body
    );
  }
  share.url = url;
  share.show();
});

migi.eventBus.on('SET_VOLUME', function(v) {
  let uid = window.$CONFIG ? $CONFIG.uid : '';
  let key = uid + 'volume';
  localStorage[key] = v;
});

migi.eventBus.on('COMMENT', function(type) {
  let parent = window.parent;
  if(parent !== window) {
    parent.comment && parent.comment(type);
  }
});

let login = document.querySelector('#gTop .login');
login && login.addEventListener('click', function(e) {
  e.preventDefault();
  migi.eventBus.emit('NEED_LOGIN');
});

document.addEventListener('DOMContentLoaded', function() {
  let UUID = localStorage['UUID'];
  let first = !UUID;
  if(first) {
    UUID = uuidv4().replace(/-/g, '');
    localStorage['UUID'] = UUID;
  }
  let img = new Image();
  img.style.position = 'absolute';
  img.style.display = 'none';
  img.src = '/api/count/index?platform=1'
    + '&url=' + encodeURIComponent(location.pathname.replace(/^\//, ''))
    + '&search=' + encodeURIComponent(location.search.replace(/^\?/, ''))
    + '&uuid=' + UUID
    + '&first=' + first
    + '&_=' + Date.now() + Math.random();
  img.onload = function() {
    document.removeChild(img);
  };
  document.body.appendChild(img);
});
