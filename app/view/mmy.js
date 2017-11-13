(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Created by army on 2017/5/20.
 */

let util = {
  goto: function(url) {
    location.href = url;
  },
  autoSsl: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return (url || '').replace(/^https?:\/\//i, '//');
  },
  img: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url.replace(/\.(\w+)-\d+_\d*/, '.$1') : url;
  },
  img1296_1296_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-1296_1296_80' : url;
  },
  img980_980_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-980_980_80' : url;
  },
  img750_750_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-750_750_80' : url;
  },
  img600_600_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-600_600_80' : url;
  },
  img480_480_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-480_480_80' : url;
  },
  img288__80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-288__80' : url;
  },
  img288_288_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-288_288_80' : url;
  },
  img240_240_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-240_240_80' : url;
  },
  img220_220_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-240_240_80' : url;
  },
  img200_200: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-200_200' : url;
  },
  img200_200_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-200_200_80' : url;
  },
  img192_192: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-192_192' : url;
  },
  img150_150_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-150_150_80' : url;
  },
  img144_: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-144_' : url;
  },
  img144_144: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-144_144' : url;
  },
  img144_144_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-144_144_80' : url;
  },
  img128_128_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-120_120_80' : url;
  },
  img120_120: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-120_120' : url;
  },
  img120_120_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-120_120_80' : url;
  },
  img100_100: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-100_100' : url;
  },
  img96_96_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-90_90' : url;
  },
  img90_90: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-90_90' : url;
  },
  img64_64_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-64_64_80' : url;
  },
  img60_60: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-60_60' : url;
  },
  img60_60_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-60_60_80' : url;
  },
  img__60: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-__60' : url;
  },
  img48_48_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-48_48_80' : url;
  },
  decode: function(str) {
    return str.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
  },
  formatTime: function(time) {
    if(!time) {
      return '00:00';
    }
    let res = '';
    if(time >= 1000 * 60 * 60) {
      let hour = Math.floor(time / (1000 * 60 * 60));
      time -= 1000 * 60 * 60 * hour;
      res += hour + ':';
    }
    if(time >= 1000 * 60) {
      let minute = Math.floor(time / (1000 * 60));
      time -= 1000 * 60 * minute;
      if(minute < 10) {
        minute = '0' + minute;
      }
      res += minute + ':';
    }
    else {
      res += '00:';
    }
    let second = Math.floor(time / 1000);
    if(second < 10) {
      second = '0' + second;
    }
    res += second;
    return res;
  },
  formatDate: function(time) {
    time = new Date(time);
    let now = Date.now();
    let diff = now - time;
    if(diff >= 1000 * 60 * 60 * 24 * 365) {
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365)) + '年前';
    }
    if(diff >= 1000 * 60 * 60 * 24 * 30) {
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) + '月前';
    }
    if(diff >= 1000 * 60 * 60 * 24) {
      return Math.floor(diff / (1000 * 60 * 60 * 24)) + '天前';
    }
    if(diff >= 1000 * 60 * 60) {
      return Math.floor(diff / (1000 * 60 * 60)) + '小时前';
    }
    if(diff >= 1000 * 60) {
      return Math.floor(diff / (1000 * 60)) + '分钟前';
    }
    return '刚刚';
  },
  ERROR_MESSAGE: '人气大爆发，请稍后再试。'
};

/* harmony default export */ __webpack_exports__["default"] = (util);


/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Created by army8735 on 2017/10/6.
 */



let net = {
  ajax: function(url, data, success, error, type) {
    let csrfToken = $.cookie('csrfToken');
    Object.keys(data).forEach(function(k) {
      if(data[k] === undefined || data[k] === null) {
        delete data[k];
      }
    });
    if(url.indexOf('?') === -1) {
      url += '?_=' + Date.now();
    }
    else {
      url += '&_=' + Date.now();
    }
    function load() {
      return $.ajax({
        url: url,
        data: data,
        dataType: 'json',
        crossDomain: true,
        timeout: 6000,
        type: type || 'get',
        headers: {
          'x-csrf-token': csrfToken,
        },
        // ajax 跨域设置必须加上
        beforeSend: function (xhr) {
          xhr.withCredentials = true;
        },
        success: function (data, state, xhr) {
          success(data, state, xhr);
        },
        error: function (data) {
          if(!error.__hasExec) {
            error.__hasExec = true;
            error(data || {});
          }
        }
      });
    }
    return load();
  },
  getJSON: function(url, data, success, error) {
    if(typeof data === 'function') {
      error = success;
      success = data;
      data = {};
    }
    error = error || function() {};
    return net.ajax(url, data, success, error);
  },
  postJSON: function(url, data, success, error) {
    if(typeof data === 'function') {
      error = success;
      success = data;
      data = {};
    }
    success = success || function() {};
    error = error || function() {};
    return net.ajax(url, data, success, error, 'post');
  },
};

/* harmony default export */ __webpack_exports__["default"] = (net);


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var userInfo = data.userInfo;
  var follows = data.follows;
  var favors = data.favors;
  var now = Date.now();
  var lastUpdateNickNameTime = data.lastUpdateNickNameTime;
  if (lastUpdateNickNameTime) {
    lastUpdateNickNameTime = new Date(lastUpdateNickNameTime);
  } else {
    lastUpdateNickNameTime = 0;
  }
  var updateNickNameTimeDiff = now - lastUpdateNickNameTime;
  var lastUpdateHeadTime = data.lastUpdateHeadTime;
  if (lastUpdateHeadTime) {
    lastUpdateHeadTime = new Date(lastUpdateHeadTime);
  } else {
    lastUpdateHeadTime = 0;
  }
  var updateHeadTimeDiff = now - lastUpdateHeadTime;

  var my = migi.preRender(migi.createCp(_My2.default, [["userInfo", userInfo], ["follows", follows], ["favors", favors], ["updateNickNameTimeDiff", updateNickNameTimeDiff], ["updateHeadTimeDiff", updateHeadTimeDiff]]));

  return '<!DOCTYPE html>\n<html>\n<head>\n  ' + data.helper.getMHead({ title: '我的' }) + '\n  <link rel="stylesheet" href="' + data.helper.getAssetUrl('/mcommon.css') + '"/>\n  <link rel="stylesheet" href="' + data.helper.getAssetUrl('/mmy.css') + '"/>\n</head>\n<body>\n<div id="page">' + my + '</div>\n' + data.helper.getMTopNav() + '\n' + data.helper.getMBotNav() + '\n<script>\n  ' + data.helper.$CONFIG + '\n  $CONFIG.userInfo = ' + data.helper.stringify(userInfo) + ';\n  $CONFIG.follows = ' + data.helper.stringify(data.follows) + ';\n  $CONFIG.favors = ' + data.helper.stringify(favors) + ';\n  $CONFIG.updateNickNameTimeDiff = ' + data.helper.stringify(updateNickNameTimeDiff) + ';\n  $CONFIG.updateHeadTimeDiff = ' + data.helper.stringify(updateHeadTimeDiff) + ';\n</script>\n<script src="' + data.helper.getAssetUrl('/mcommon.js') + '"></script>\n<script src="' + data.helper.getAssetUrl('/mmy.js') + '"></script>\n' + data.helper.getStat() + '\n</body>\n</html>';
};

var _My = __webpack_require__(53);

var _My2 = _interopRequireDefault(_My);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Profile = __webpack_require__(54);

var _Profile2 = _interopRequireDefault(_Profile);

var _Follow = __webpack_require__(55);

var _Follow2 = _interopRequireDefault(_Follow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var My = function (_migi$Component) {
  _inherits(My, _migi$Component);

  function My() {
    var _ref;

    _classCallCheck(this, My);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = My.__proto__ || Object.getPrototypeOf(My)).call.apply(_ref, [this].concat(data)));
  }

  _createClass(My, [{
    key: 'clickOut',
    value: function clickOut(e) {
      e.preventDefault();
      _net2.default.postJSON('/api/login/loginOut', function (res) {
        location.href = '/login';
      }, function (res) {
        alert(res.message || _util2.default.ERROR_MESSAGE);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "my"]], [migi.createCp(_Profile2.default, [["userInfo", this.props.userInfo], ["updateNickNameTimeDiff", this.props.updateNickNameTimeDiff], ["updateHeadTimeDiff", this.props.updateHeadTimeDiff]]), migi.createVd("div", [["class", "warn"]], [migi.createVd("div", [["class", "t fn-clear"]], [migi.createVd("img", [["class", "pic"], ["src", "//zhuanquan.xyz/temp/f3bcae7e2f60d9729a0e205dfb39ca6e.jpg"]]), migi.createVd("div", [["class", "txt"]], [migi.createVd("div", [], [migi.createVd("span", [["class", "name"]], ["圈儿"]), migi.createVd("small", [["class", "time"]], ["刚刚"])])])]), migi.createVd("div", [["class", "c"]], [migi.createVd("pre", [], ["未来在这里还会解锁各种信息哒！然而需要实现的功能太多，程序员小哥哥们需要一点一点搭建转圈的世界哦！\n\
请耐心等待，我们会努力做得更好=3="]), migi.createVd("b", [["class", "arrow"]])])]), migi.createCp(_Follow2.default, [["ref", "follow"], ["list", this.props.follows]]), migi.createVd("a", [["href", "#"], ["class", "loginout"], ["onClick", new migi.Cb(this, this.clickOut)]], ["退出登录"])]);
    }
  }]);

  return My;
}(migi.Component);

migi.name(My, "My");exports.default = My;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_migi$Component) {
  _inherits(Profile, _migi$Component);

  function Profile() {
    var _ref;

    _classCallCheck(this, Profile);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Profile.__proto__ || Object.getPrototypeOf(Profile)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.head = self.props.userInfo.Head_Url;
    self.sname = self.props.userInfo.NickName;
    self.updateNickNameTimeDiff = self.props.updateNickNameTimeDiff || 0;
    self.updateHeadTimeDiff = self.props.updateHeadTimeDiff || 0;
    return _this;
  }

  _createClass(Profile, [{
    key: 'click',
    value: function click(e) {
      e.preventDefault();
      var self = this;
      if (self.updateNickNameTimeDiff < 24 * 60 * 60 * 1000) {
        alert('昵称一天只能修改一次哦~');
        return;
      }
      $(self.ref.sname.element).addClass('fn-hide');
      $(self.ref.edit.element).addClass('fn-hide');
      $(self.ref.input.element).removeClass('fn-hide').focus().val(self.sname);
      $(self.ref.ok.element).removeClass('fn-hide');
    }
  }, {
    key: 'clickOk',
    value: function clickOk() {
      var self = this;
      $(self.ref.sname.element).removeClass('fn-hide');
      $(self.ref.input.element).addClass('fn-hide');
      $(self.ref.ok.element).addClass('fn-hide');
      var $edit = $(self.ref.edit.element);
      var newName = $(self.ref.input.element).val().trim();
      var length = newName.length;
      if (length < 4 || length > 8) {
        alert('昵称长度需要在4~8个字之间哦~');
        $edit.removeClass('fn-hide');
        return;
      }
      if (newName !== self.sname) {
        _net2.default.postJSON('/api/user/updateNickName', { nickName: newName }, function (res) {
          if (res.success) {
            self.sname = newName;
            self.updateNickNameTimeDiff = 0;
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $edit.removeClass('fn-hide');
        }, function (res) {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $edit.removeClass('fn-hide');
        });
      } else {
        $edit.removeClass('fn-hide');
      }
    }
  }, {
    key: 'clickHead',
    value: function clickHead(e) {
      var self = this;
      if (self.updateHeadTimeDiff < 24 * 60 * 60 * 1000) {
        e.preventDefault();
        alert('头像一天只能修改一次哦~');
      }
    }
  }, {
    key: 'change',
    value: function change(e) {
      var self = this;
      if (self.updateHeadTimeDiff < 24 * 60 * 60 * 1000) {
        e.preventDefault();
        alert('头像一天只能修改一次哦~');
        return;
      }
      if (window.FileReader) {
        var file = e.target.files[0];
        var size = file.size;
        if (size && size !== 0 && size <= 1024 * 500) {
          var $upload = $(self.ref.upload.element);
          $upload.addClass('fn-hide');
          var fileReader = new FileReader();
          fileReader.onload = function () {
            _net2.default.postJSON('/api/user/uploadHead', { img: fileReader.result }, function (res) {
              if (res.success) {
                self.head = res.url;
              } else {
                alert(res.message || _util2.default.ERROR_MESSAGE);
              }
              $upload.removeClass('fn-hide');
            }, function (res) {
              alert(res.message || _util2.default.ERROR_MESSAGE);
              $upload.removeClass('fn-hide');
            });
          };
          fileReader.readAsDataURL(file);
        } else {
          alert('图片体积太大啦，不能超过500k！');
        }
      } else {
        alert('您的浏览器暂不支持上传，请暂时使用Chrome或者IE10以上浏览器。');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "profile fn-clear"]], [migi.createVd("h4", [], ["我的资料"]), migi.createVd("div", [["class", "pic"], ["onClick", new migi.Cb(this, this.clickPic)]], [migi.createVd("img", [["src", new migi.Obj("head", this, function () {
        return _util2.default.autoSsl(_util2.default.img200_200_80(this.head)) || '//zhuanquan.xin/head/8fd9055b7f033087e6337e37c8959d3e.png';
      })]]), migi.createVd("div", [["class", "upload"], ["ref", "upload"]], [migi.createVd("input", [["ref", "file"], ["type", "file"], ["onChange", new migi.Cb(this, this.change)], ["onClick", new migi.Cb(this, this.clickHead)], ["accept", "image/gif, image/jpeg, image/png"]])])]), migi.createVd("div", [["class", "txt"]], [migi.createVd("strong", [["ref", "sname"]], [new migi.Obj("sname", this, function () {
        return this.sname;
      })]), migi.createVd("input", [["ref", "input"], ["type", "text"], ["class", "fn-hide"], ["value", ""], ["maxlength", "8"]]), migi.createVd("b", [["class", "edit"], ["ref", "edit"], ["onClick", new migi.Cb(this, this.click)]]), migi.createVd("button", [["class", "fn-hide"], ["ref", "ok"], ["onClick", new migi.Cb(this, this.clickOk)]], ["确定"])])]);
    }
  }, {
    key: 'head',
    set: function set(v) {
      this.__setBind("head", v);this.__data("head");
    },
    get: function get() {
      return this.__getBind("head");
    }
  }, {
    key: 'sname',
    set: function set(v) {
      this.__setBind("sname", v);this.__data("sname");
    },
    get: function get() {
      return this.__getBind("sname");
    }
  }, {
    key: 'updateNickNameTimeDiff',
    set: function set(v) {
      this.__setBind("updateNickNameTimeDiff", v);this.__data("updateNickNameTimeDiff");
    },
    get: function get() {
      return this.__getBind("updateNickNameTimeDiff");
    }
  }, {
    key: 'updateHeadTimeDiff',
    set: function set(v) {
      this.__setBind("updateHeadTimeDiff", v);this.__data("updateHeadTimeDiff");
    },
    get: function get() {
      return this.__getBind("updateHeadTimeDiff");
    }
  }]);

  return Profile;
}(migi.Component);

migi.name(Profile, "Profile");exports.default = Profile;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Follow = function (_migi$Component) {
  _inherits(Follow, _migi$Component);

  function Follow() {
    var _ref;

    _classCallCheck(this, Follow);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Follow.__proto__ || Object.getPrototypeOf(Follow)).call.apply(_ref, [this].concat(data)));

    _this.list = _this.props.list;
    _this.on(migi.Event.DOM, function () {
      this.autoWidth();
    });
    return _this;
  }

  _createClass(Follow, [{
    key: 'autoWidth',
    value: function autoWidth() {
      var $list = $(this.ref.list.element);
      var $c = $list.find('.c');
      $c.css('width', '9999rem');
      var $ul = $c.find('ul');
      $c.css('width', $ul.width() + 1);
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "cp-hotauthor follow"]], [migi.createVd("h4", [], ["我的关注"]), migi.createVd("div", [["class", "list"], ["ref", "list"]], [migi.createVd("div", [["class", "c"]], [migi.createVd("ul", [], [new migi.Obj("list", this, function () {
        return (this.list || []).map(function (item) {
          return migi.createVd("li", [], [migi.createVd("a", [["href", '/author/' + item.AuthorID], ["class", "pic"]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img120_120_80(item.Head_url)) || '//zhuanquan.xin/head/0d90e4f2e6f7ef48992df6b49f54cf40.png']])]), migi.createVd("a", [["href", "#"], ["class", "txt"]], [item.AuthorName]), migi.createVd("div", [["class", "info"]], [item.FansNumber, "粉丝"])]);
        });
      })])])])]);
    }
  }, {
    key: 'list',
    set: function set(v) {
      this.__setBind("list", v);this.__data("list");
    },
    get: function get() {
      return this.__getBind("list");
    }
  }]);

  return Follow;
}(migi.Component);

migi.name(Follow, "Follow");exports.default = Follow;

/***/ })

/******/ })));