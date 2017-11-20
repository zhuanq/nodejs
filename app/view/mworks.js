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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
  img1200__80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-1200__80' : url;
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
  img720__80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-720__80' : url;
  },
  img600_600_80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-600_600_80' : url;
  },
  img600__80: function(url) {
    if(!/\/\/zhuanquan\./i.test(url)) {
      return url;
    }
    return url ? url + '-600__80' : url;
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
  formatPost: function(str) {},
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Created by army8735 on 2017/10/6.
 */



let net = {
  ajax: function(url, data, success, error, type, timeout) {
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
        timeout: timeout || 30000,
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
  getJSON: function(url, data, success, error, timeout) {
    if(typeof data === 'function') {
      timeout = error;
      error = success;
      success = data;
      data = {};
    }
    if(typeof success !== 'function') {
      success = function() {};
      timeout = error;
      error = success;
    }
    if(typeof error !== 'function') {
      timeout = error;
      error = function() {};
    }
    return net.ajax(url, data, success, error, 'GET', timeout);
  },
  postJSON: function(url, data, success, error, timeout) {
    if(typeof data === 'function') {
      timeout = error;
      error = success;
      success = data;
      data = {};
    }
    if(typeof success !== 'function') {
      success = function() {};
      timeout = error;
      error = success;
    }
    if(typeof error !== 'function') {
      timeout = error;
      error = function() {};
    }
    return net.ajax(url, data, success, error, 'POST', timeout);
  },
};

/* harmony default export */ __webpack_exports__["default"] = (net);


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubCmt = function (_migi$Component) {
  _inherits(SubCmt, _migi$Component);

  function SubCmt() {
    var _ref;

    _classCallCheck(this, SubCmt);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SubCmt.__proto__ || Object.getPrototypeOf(SubCmt)).call.apply(_ref, [this].concat(data)));

    _this.value = _this.props.value || '';
    _this.invalid = _this.value.trim().length < 3;
    _this.maxlength = _this.props.maxlength;
    _this.subText = _this.props.subText;
    _this.tipText = _this.props.tipText;
    _this.placeholder = _this.props.placeholder;
    _this.originTo = _this.props.originTo;
    _this.readOnly = _this.props.readOnly;
    return _this;
  }

  _createClass(SubCmt, [{
    key: 'input',
    value: function input(e, vd) {
      if (!$CONFIG.isLogin) {
        migi.eventBus.emit('NEED_LOGIN');
      } else {
        this.invalid = $(vd.element).val().trim().length < 3;
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      if (!window.$CONFIG.isLogin) {
        migi.eventBus.emit('NEED_LOGIN');
      } else {
        this.emit('focus');
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.ref.input.element.focus();
    }
  }, {
    key: 'click',
    value: function click() {
      this.emit('click');
    }
  }, {
    key: 'submit',
    value: function submit(e) {
      e.preventDefault();
      if (!this.invalid) {
        this.emit('submit', this.value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "cp-subcmt"]], [migi.createVd("form", [["class", new migi.Obj(["to", "originTo"], this, function () {
        return 'fn-clear' + (this.to || this.originTo ? ' to' : '');
      })], ["ref", "form"], ["onSubmit", new migi.Cb(this, this.submit)], ["onClick", new migi.Cb(this, this.click)]], [migi.createVd("label", [], ["TO: ", new migi.Obj(["to", "originTo"], this, function () {
        return this.to || this.originTo;
      })]), migi.createVd("input", [["type", "text"], ["class", "text"], ["ref", "input"], ["placeholder", new migi.Obj(["to", "placeholder"], this, function () {
        return this.to ? '回复' + this.to + '的评论' : this.placeholder;
      })], ["onInput", new migi.Cb(this, this.input)], ["onFocus", new migi.Cb(this, this.onFocus)], ["maxlength", new migi.Obj("maxlength", this, function () {
        return this.maxlength || 256;
      })], ["value", new migi.Obj("value", this, function () {
        return this.value;
      })], ["readonly", new migi.Obj("readOnly", this, function () {
        return this.readOnly;
      })]]), migi.createVd("input", [["type", "submit"], ["class", new migi.Obj("invalid", this, function () {
        return 'submit' + (this.invalid ? ' dis' : '');
      })], ["value", new migi.Obj(["value", "tipText", "subText"], this, function () {
        return this.value.trim().length ? this.value.trim().length < 3 ? this.tipText ? this.tipText.replace('${n}', 3 - this.value.trim().length) : '还少' + (3 - this.value.trim().length) + '个字哦' : this.subText || '发布评论' : this.subText || '发布评论';
      })]])])]);
    }
  }, {
    key: 'maxlength',
    set: function set(v) {
      this.__setBind("maxlength", v);this.__data("maxlength");
    },
    get: function get() {
      return this.__getBind("maxlength");
    }
  }, {
    key: 'placeholder',
    set: function set(v) {
      this.__setBind("placeholder", v);this.__data("placeholder");
    },
    get: function get() {
      return this.__getBind("placeholder");
    }
  }, {
    key: 'subText',
    set: function set(v) {
      this.__setBind("subText", v);this.__data("subText");
    },
    get: function get() {
      return this.__getBind("subText");
    }
  }, {
    key: 'tipText',
    set: function set(v) {
      this.__setBind("tipText", v);this.__data("tipText");
    },
    get: function get() {
      return this.__getBind("tipText");
    }
  }, {
    key: 'value',
    set: function set(v) {
      this.__setBind("value", v);this.__data("value");
    },
    get: function get() {
      if (this.__initBind("value")) this.__setBind("value", '');return this.__getBind("value");
    }
  }, {
    key: 'to',
    set: function set(v) {
      this.__setBind("to", v);this.__data("to");
    },
    get: function get() {
      return this.__getBind("to");
    }
  }, {
    key: 'originTo',
    set: function set(v) {
      this.__setBind("originTo", v);this.__data("originTo");
    },
    get: function get() {
      return this.__getBind("originTo");
    }
  }, {
    key: 'invalid',
    set: function set(v) {
      this.__setBind("invalid", v);this.__data("invalid");
    },
    get: function get() {
      if (this.__initBind("invalid")) this.__setBind("invalid", true);return this.__getBind("invalid");
    }
  }, {
    key: 'readOnly',
    set: function set(v) {
      this.__setBind("readOnly", v);this.__data("readOnly");
    },
    get: function get() {
      return this.__getBind("readOnly");
    }
  }]);

  return SubCmt;
}(migi.Component);

migi.name(SubCmt, "SubCmt");exports.default = SubCmt;

/***/ }),
/* 4 */
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

var NOT_LOADED = 0;
var IS_LOADING = 1;
var HAS_LOADED = 2;
var subLoadHash = {};
var subSkipHash = {};
var $last = void 0;
var take = 10;
var ajax = void 0;

var Comment = function (_migi$Component) {
  _inherits(Comment, _migi$Component);

  function Comment() {
    var _ref;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Comment.__proto__ || Object.getPrototypeOf(Comment)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    var html = '';
    (self.props.data || []).forEach(function (item) {
      html += self.genComment(item);
    });
    self.html = html;
    if (!html) {
      self.message = '暂无评论';
    }

    self.on(migi.Event.DOM, function () {
      var $root = $(self.element);
      $root.on('click', '.like', function () {
        var $elem = $(this);
        var commentID = $elem.attr('cid');
        _net2.default.postJSON(self.props.zanUrl, { commentID: commentID }, function (res) {
          if (res.success) {
            var _data = res.data;
            if (_data.State === 'likeWordsUser') {
              $elem.addClass('liked');
            } else {
              $elem.removeClass('liked');
            }
            $elem.text(_data.LikeCount);
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
        });
      });
      $root.on('click', '.slide .sub, .slide span', function () {
        self.slide($(this).closest('li'));
      });
      $root.on('click', '.list>li>.c>pre', function () {
        self.slide($(this).closest('li'));
      });
      $root.on('click', '.list2 pre, .slide2 .sub', function () {
        var $this = $(this);
        var $li = $this.closest('li');
        if ($li.hasClass('on')) {
          $li.removeClass('on');
          var $slide = $last.find('.slide');
          self.emit('chooseSubComment', $slide.attr('rid'), $slide.attr('cid'), $slide.attr('name'));
        } else {
          $li.parent().find('.on').removeClass('on');
          $li.addClass('on');
          self.emit('chooseSubComment', $this.attr('rid'), $this.attr('cid'), $this.attr('name'));
        }
      });
      $root.on('click', '.more', function () {
        var $message = $(this);
        var rid = $message.attr('rid');
        $message.removeClass('more').text('读取中...');
        ajax = _net2.default.postJSON(self.props.subUrl, { rootID: rid, skip: subSkipHash[rid], take: take }, function (res) {
          if (res.success) {
            var _data2 = res.data;
            if (_data2.data.length) {
              subSkipHash[rid] += _data2.data.length;
              var s = '';
              _data2.data.forEach(function (item) {
                s += self.genChildComment(item);
              });
              var $ul = $message.prev();
              $ul.append(s);
              if (_data2.data.length < take) {
                $message.addClass('fn-hide');
              } else {
                $message.addClass('more').text('点击加载更多');
              }
            } else {
              $message.addClass('fn-hide');
            }
          } else {
            $message.addClass('more').text(res.message || _util2.default.ERROR_MESSAGE);
          }
        }, function (res) {
          $message.addClass('more').text(res.message || _util2.default.ERROR_MESSAGE);
        });
      });
      $root.on('click', '.remove', function () {
        var $btn = $(this);
        if (window.confirm('会删除子留言哦，确定要删除吗？')) {
          var cid = $btn.attr('cid');
          _net2.default.postJSON(self.props.delUrl, { commentID: cid }, function (res) {
            if (res.success) {
              $btn.closest('li').remove();
            } else if (res.code === 1000) {
              migi.eventBus.emit('NEED_LOGIN');
            } else {
              alert(res.message || _util2.default.ERROR_MESSAGE);
            }
          }, function (res) {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          });
        }
      });
    });
    return _this;
  }

  _createClass(Comment, [{
    key: 'slide',
    value: function slide($li) {
      var self = this;
      if (ajax) {
        ajax.abort();
      }
      var $slide = $li.find('.slide');
      var $list2 = $li.find('.list2');
      var $ul = $list2.find('ul');
      var $message = $list2.find('.message');
      var rid = $slide.attr('rid');
      if ($last && $last[0] !== $li[0] && $last.hasClass('on')) {
        self.hideLast();
      }
      if ($li.hasClass('on')) {
        $li.removeClass('on');
        $li.find('li.on').removeClass('on');
        $list2.css('height', 0);
        self.emit('closeSubComment');
        $last = null;
        if (subLoadHash[rid] === IS_LOADING) {
          subLoadHash[rid] = NOT_LOADED;
        }
      } else {
        $last = $li;
        $li.addClass('on');
        self.emit('chooseSubComment', $slide.attr('rid'), $slide.attr('cid'), $slide.attr('name'));
        var state = subLoadHash[rid];
        if (state === HAS_LOADED || state === IS_LOADING) {
          $list2.css('height', 'auto');
        } else {
          $list2.css('height', 'auto');
          subLoadHash[rid] = IS_LOADING;
          ajax = _net2.default.postJSON(self.props.subUrl, { rootID: rid, skip: 0, take: take }, function (res) {
            if (res.success) {
              subLoadHash[rid] = HAS_LOADED;
              var s = '';
              var data = res.data;
              data.data.forEach(function (item) {
                s += self.genChildComment(item);
              });
              $ul.append(s);
              if (data.data.length >= data.Size) {
                $message.addClass('fn-hide');
              } else {
                $message.addClass('more').text('点击加载更多');
                subSkipHash[rid] = data.data.length;
              }
              $ul.removeClass('fn-hide');
              $list2.css('height', 'auto');
            } else {
              subLoadHash[rid] = NOT_LOADED;
              $message.text(res.message || _util2.default.ERROR_MESSAGE);
            }
          }, function (res) {
            subLoadHash[rid] = NOT_LOADED;
            $message.text(res.message || _util2.default.ERROR_MESSAGE);
          });
        }
      }
    }
  }, {
    key: 'slideOn',
    value: function slideOn(cid) {
      var $slide = $(this.element).find('#comment_' + cid).find('.slide');
      if (!$slide.hasClass('on')) {
        $slide.find('.sub').click();
      }
    }
  }, {
    key: 'clearData',
    value: function clearData() {
      if (ajax) {
        ajax.abort();
      }
      this.message = '';
      this.setData();
      subLoadHash = {};
      subSkipHash = {};
      $last = null;
    }
  }, {
    key: 'setData',
    value: function setData(data) {
      var self = this;
      var s = '';
      (data || []).forEach(function (item) {
        s += self.genComment(item);
      });
      $(self.ref.list.element).html(s);
    }
  }, {
    key: 'appendData',
    value: function appendData(data) {
      var self = this;
      var s = '';
      (data || []).forEach(function (item) {
        s += self.genComment(item);
      });
      $(self.ref.list.element).append(s);
    }
  }, {
    key: 'prependData',
    value: function prependData(item) {
      this.genComment(item).prependTo(this.ref.list.element);
    }
  }, {
    key: 'prependChild',
    value: function prependChild(item, parentID) {
      var $comment = $('#comment_' + item.RootID);
      var $list2 = $comment.find('.list2');
      var $ul = $list2.find('ul');
      var state = subLoadHash[item.RootID];
      if (state === HAS_LOADED || state === IS_LOADING) {
        var li = this.genChildComment(item);
        li.prependTo($ul[0]);
      }
      if ($ul.closest('li').find('.slide').hasClass('on')) {
        $list2.css('height', $ul.height());
      }
      var $num = $comment.find('.slide small.sub');
      $num.text((parseInt($num.text()) || 0) + 1);
      // if(item.RootID !== parentID) {
      //   let $num = $('#comment_' + parentID).find('small.sub');
      //   $num.text((parseInt($num.text()) || 0) + 1);
      // }
    }
  }, {
    key: 'genComment',
    value: function genComment(item) {
      if (item.IsAuthor) {
        return migi.createVd("li", [["class", "author"], ["id", 'comment_' + item.Send_ID]], [migi.createVd("div", [["class", "t fn-clear"]], [migi.createVd("div", [["class", "profile fn-clear"]], [migi.createVd("img", [["class", "pic"], ["src", _util2.default.autoSsl(_util2.default.img60_60_80(item.Send_AuthorHeadUrl || '//zhuanquan.xin/head/8fd9055b7f033087e6337e37c8959d3e.png'))]]), migi.createVd("div", [["class", "txt"]], [item.IsAuthor === true ? migi.createVd("span", [["class", "name"]], [item.Send_AuthorName]) : migi.createVd("a", [["href", '/author/' + item.IsAuthor], ["class", "name"]], [item.Send_AuthorName]), migi.createVd("small", [["class", "time"], ["rel", item.Send_Time]], [_util2.default.formatDate(item.Send_Time)])])]), migi.createVd("div", [["class", "fn fn-clear"]], [item.ISOwn ? migi.createVd("span", [["cid", item.Send_ID], ["class", "remove"]], ["删除"]) : ''])]), migi.createVd("div", [["class", "c"]], [migi.createVd("pre", [], [item.Send_Content, migi.createVd("span", [["class", "placeholder"]])]), migi.createVd("div", [["class", "slide"], ["cid", item.Send_ID], ["rid", item.Send_ID], ["name", item.Send_AuthorName]], [migi.createVd("small", [["cid", item.Send_ID], ["class", 'like' + (item.IsLike ? ' liked' : '')]], [item.LikeCount]), migi.createVd("small", [["class", "sub"]], [item.sub_Count]), migi.createVd("span", [], ["收起"])]), migi.createVd("b", [["class", "arrow"]])]), migi.createVd("div", [["class", "list2"]], [migi.createVd("ul", [["class", "fn-hide"]]), migi.createVd("p", [["class", "message"], ["cid", item.Send_ID], ["rid", item.Send_ID]], ["读取中..."])])]);
      }
      return migi.createVd("li", [["id", 'comment_' + item.Send_ID]], [migi.createVd("div", [["class", "t fn-clear"]], [migi.createVd("div", [["class", "profile fn-clear"]], [migi.createVd("img", [["class", "pic"], ["src", _util2.default.autoSsl(_util2.default.img60_60_80(item.Send_UserHeadUrl || '//zhuanquan.xin/head/8fd9055b7f033087e6337e37c8959d3e.png'))]]), migi.createVd("div", [["class", "txt"]], [migi.createVd("a", [["class", "name"], ["href", '/user/' + item.Send_UserID]], [item.Send_UserName]), migi.createVd("small", [["class", "time"], ["rel", item.Send_Time]], [_util2.default.formatDate(item.Send_Time)])])]), migi.createVd("div", [["class", "fn fn-clear"]], [item.ISOwn ? migi.createVd("span", [["cid", item.Send_ID], ["class", "remove"]], ["删除"]) : ''])]), migi.createVd("div", [["class", "c"]], [migi.createVd("pre", [], [item.Send_Content, migi.createVd("span", [["class", "placeholder"]])]), migi.createVd("div", [["class", "slide"], ["cid", item.Send_ID], ["rid", item.Send_ID], ["name", item.Send_UserName]], [migi.createVd("small", [["cid", item.Send_ID], ["class", 'like' + (item.IsLike ? ' liked' : '')]], [item.LikeCount]), migi.createVd("small", [["class", "sub"]], [item.sub_Count]), migi.createVd("span", [], ["收起"])]), migi.createVd("b", [["class", "arrow"]])]), migi.createVd("div", [["class", "list2"]], [migi.createVd("ul", [["class", "fn-hide"]]), migi.createVd("p", [["class", "message"], ["cid", item.Send_ID], ["rid", item.Send_ID]], ["读取中..."])])]);
    }
  }, {
    key: 'genChildComment',
    value: function genChildComment(item) {
      if (item.IsAuthor) {
        return migi.createVd("li", [["class", "author"], ["id", 'comment_' + item.Send_ID]], [migi.createVd("div", [["class", "t fn-clear"]], [migi.createVd("div", [["class", "profile fn-clear"], ["cid", item.Send_ID], ["rid", item.RootID], ["name", item.Send_AuthorName]], [migi.createVd("img", [["class", "pic"], ["src", _util2.default.autoSsl(_util2.default.img60_60_80(item.Send_AuthorHeadUrl || '//zhuanquan.xin/head/8fd9055b7f033087e6337e37c8959d3e.png'))]]), migi.createVd("div", [["class", "txt"]], [migi.createVd("small", [["class", "time"], ["rel", item.Send_Time]], [_util2.default.formatDate(item.Send_Time)]), migi.createVd("a", [["href", '/author/' + item.IsAuthor], ["class", "name"]], [item.Send_AuthorName])])]), migi.createVd("div", [["class", "fn fn-clear"]], [item.ISOwn ? migi.createVd("span", [["cid", item.Send_ID], ["class", "remove"]], ["删除"]) : ''])]), migi.createVd("div", [["class", "c"]], [item.Content ? migi.createVd("p", [["class", "quote"]], [migi.createVd("label", [], ["回复@", item.Send_ToUserName, "："]), migi.createVd("span", [], [item.Content])]) : '', migi.createVd("pre", [["cid", item.Send_ID], ["rid", item.RootID], ["name", item.Send_AuthorName]], [item.Send_Content]), migi.createVd("div", [["class", "slide2"]], [migi.createVd("small", [["cid", item.Send_ID], ["class", 'like' + (item.IsLike ? ' liked' : '')]], [item.LikeCount]), migi.createVd("small", [["class", "sub"], ["cid", item.Send_ID], ["rid", item.RootID], ["name", item.Send_UserName]], ["回复"])]), migi.createVd("b", [["class", "arrow"]])])]);
      }
      return migi.createVd("li", [["id", 'comment_' + item.Send_ID]], [migi.createVd("div", [["class", "t fn-clear"]], [migi.createVd("div", [["class", "profile fn-clear"], ["cid", item.Send_ID], ["rid", item.RootID], ["name", item.Send_UserName]], [migi.createVd("img", [["class", "pic"], ["src", _util2.default.autoSsl(_util2.default.img60_60_80(item.Send_UserHeadUrl || '//zhuanquan.xin/head/8fd9055b7f033087e6337e37c8959d3e.png'))]]), migi.createVd("div", [["class", "txt"]], [migi.createVd("small", [["class", "time"], ["rel", item.Send_Time]], [_util2.default.formatDate(item.Send_Time)]), migi.createVd("a", [["class", "name"], ["href", '/user/' + item.Send_UserID]], [item.Send_UserName])])]), migi.createVd("div", [["class", "fn fn-clear"]], [item.ISOwn ? migi.createVd("span", [["cid", item.Send_ID], ["class", "remove"]], ["删除"]) : ''])]), migi.createVd("div", [["class", "c"]], [item.Content ? migi.createVd("p", [["class", "quote"]], [migi.createVd("label", [], ["回复@", item.Send_ToUserName, "："]), migi.createVd("span", [], [item.Content])]) : '', migi.createVd("pre", [["cid", item.Send_ID], ["rid", item.RootID], ["name", item.Send_UserName]], [item.Send_Content]), migi.createVd("div", [["class", "slide2"]], [migi.createVd("small", [["cid", item.Send_ID], ["class", 'like' + (item.IsLike ? ' liked' : '')]], [item.LikeCount]), migi.createVd("small", [["class", "sub"], ["cid", item.Send_ID], ["rid", item.RootID], ["name", item.Send_UserName]], ["回复"])]), migi.createVd("b", [["class", "arrow"]])])]);
    }
  }, {
    key: 'hideLast',
    value: function hideLast() {
      if ($last && $last.hasClass('on')) {
        $last.removeClass('on').find('.list2').css('height', 0).find('li.on').removeClass('on');
      }
      $last = null;
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "cp-comment"]], [migi.createVd("ul", [["class", "list"], ["ref", "list"], ["dangerouslySetInnerHTML", this.html]]), migi.createVd("p", [["class", new migi.Obj("message", this, function () {
        return 'message' + (this.message ? '' : ' fn-hide');
      })]], [new migi.Obj("message", this, function () {
        return this.message;
      })])]);
    }
  }, {
    key: 'message',
    set: function set(v) {
      this.__setBind("message", v);this.__data("message");
    },
    get: function get() {
      return this.__getBind("message");
    }
  }]);

  return Comment;
}(migi.Component);

migi.name(Comment, "Comment");exports.default = Comment;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Created by army8735 on 2017/8/13.
 */

let code2Data = {
  '901': {
    name: '出品',
    display: '出品',
    css: 'ce',
  },
  '902': {
    name: '策划',
    display: '策划',
    css: 'ce',
  },
  '111': {
    name: '演唱',
    display: '演唱',
    css: 'ge',
  },
  '112': {
    name: '和声',
    display: '和声',
    css: 'ge',
  },
  '113': {
    name: '伴唱',
    display: '伴唱',
    css: 'ge',
  },
  '114': {
    name: '戏腔',
    display: '戏腔',
    css: 'ge',
  },
  '115': {
    name: '合唱',
    display: '合唱',
    css: 'ge',
  },
  '121': {
    name: '作曲',
    display: '作曲',
    css: 'qu',
  },
  '122': {
    name: '编曲',
    display: '编曲',
    css: 'qu',
  },
  '131': {
    name: '混音',
    display: '混音',
    css: 'hun',
  },
  '132': {
    name: '母带',
    display: '母带',
    css: 'hun',
  },
  '133': {
    name: '录音',
    display: '录音',
    css: 'hun',
  },
  '134': {
    name: '修音',
    display: '修音',
    css: 'hun',
  },
  '141': {
    name: '演奏',
    display: '演奏', //优先显示乐器名。
    css: 'yue',
  },
  '151': {
    name: '配音',
    display: '配音',
    css: 'yue',
  },
  '211': {
    name: '视频',
    display: '视频',
    css: 'ying',
  },
  '212': {
    name: '压制',
    display: '压制',
    css: 'ying',
  },
  '213': {
    name: '拍摄',
    display: '拍摄',
    css: 'ying',
  },
  '311': {
    name: '立绘',
    display: '立绘',
    css: 'tu',
  },
  '312': {
    name: 'CG',
    display: 'CG',
    css: 'tu',
  },
  '313': {
    name: '场景',
    display: '场景',
    css: 'tu',
  },
  '314': {
    name: '线稿',
    display: '线稿',
    css: 'tu',
  },
  '315': {
    name: '上色',
    display: '上色',
    css: 'tu',
  },
  '316': {
    name: '手绘',
    display: '手绘',
    css: 'tu',
  },
  '317': {
    name: '插画',
    display: '插画',
    css: 'tu',
  },
  '331': {
    name: '设计',
    display: '设计',
    css: 'she',
  },
  '332': {
    name: '海报',
    display: '海报',
    css: 'she',
  },
  '333': {
    name: 'Logo设计',
    display: 'Logo设计',
    css: 'she',
  },
  '341': {
    name: '漫画',
    display: '漫画',
    css: 'she',
  },
  '351': {
    name: '书法',
    display: '书法',
    css: 'ji',
  },
  '391': {
    name: '沙画',
    display: '沙画',
    css: 'ji',
  },
  '411': {
    name: '作词',
    display: '作词',
    css: 'wen',
  },
  '421': {
    name: '文案',
    display: '文案',
    css: 'wen',
  },
  '422': {
    name: '剧本',
    display: '剧本',
    css: 'wen',
  },
  '423': {
    name: '小说',
    display: '小说',
    css: 'wen',
  },
};

let label2Code = {};
Object.keys(code2Data).forEach(function(k) {
  let v = code2Data[k];
  label2Code[v.css] = label2Code[v.css] || [];
  label2Code[v.css].push(k);
});

/* harmony default export */ __webpack_exports__["default"] = ({
  code2Data,
  label2Code,
});


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Created by army8735 on 2017/10/28.
 */



const TYPE = {
  originMusic: 1,
  musicAlbum: 5,
  photoAlbum: 11,
};

const NAME = {};
NAME[TYPE.originMusic] = '原创音乐';
NAME[TYPE.musicAlbum] = '音乐专辑';
NAME[TYPE.photoAlbum] = '相册';

/* harmony default export */ __webpack_exports__["default"] = ({
  TYPE,
  NAME,
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  isLyrics: function isLyrics(s) {
    return (/\[\d{2,}:\d{2}\.\d{2,3}]/.test(s)
    );
  },
  parse: function parse(s) {
    var match = s.match(/\[\d{2,}:\d{2}\.\d{2,3}].*/g);
    return match.map(function (item) {
      var time = item.slice(1, item.indexOf(']'));
      var times = time.split(/[^\d]/g);
      var ms = times[2];
      var timestamp = parseInt(times[0]) * 60 * 1000 + parseInt(times[1]) * 1000 + (ms.length === 3 ? parseInt(ms) : parseInt(ms) * 10);
      var txt = item.slice(item.indexOf(']') + 1);
      // console.log(time, timestamp, txt);
      return {
        time: time,
        timestamp: timestamp,
        txt: txt
      };
    });
  },
  getTxt: function getTxt(s) {
    return s.replace(/\[\d{2,}:\d{2}\.\d{2,3}]/g, '').replace(/\[\w+:\w+]/g, '');
  }
};

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Created by army8735 on 2017/8/13.
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  workType: function(type) {
    switch (type) {
      case 1111:
        return {
          bigType: 'audio',
          name: '原创音乐',
        };
      case 1113:
        return {
          bigType: 'audio',
          name: '原创伴奏',
        };
      case 2110:
        return {
          bigType: 'video',
          name: '原创视频',
        };
      case 3120:
        return {
          bigType: 'poster',
          name: '海报',
        };
      case 4110:
        return {
          bigType: 'text',
          name: '文案',
        };
      case 4211:
        return {
          bigType: 'lyric',
          name: '原创歌词',
          display: '歌词',
        };
      default:
        return {};
    }
  },
  authorType: [
    [901, 902],
    [423,422],
    [111],
    [115, 113, 112, 114, 151],
    [151],
    [121, 122],
    [411, 421],
    [331],
    [131, 132, 134,133],
    [141],
    [211,213,212,391],
    [317,316,312, 311, 313,314,315],
    [351],
    [331, 332,333]
  ],
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _authorTemplate = __webpack_require__(6);

var _authorTemplate2 = _interopRequireDefault(_authorTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Author = function (_migi$Component) {
  _inherits(Author, _migi$Component);

  function Author() {
    var _ref;

    _classCallCheck(this, Author);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Author.__proto__ || Object.getPrototypeOf(Author)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.setAuthor(self.props.authorList);
    return _this;
  }

  _createClass(Author, [{
    key: 'setAuthor',
    value: function setAuthor(data) {
      var list = [];
      (data || []).forEach(function (item) {
        var temp = [];
        var lis = [];
        var last = '';
        var lastTips = '';
        item.forEach(function (item) {
          if (item.WorksAuthorType !== last || item.Tips !== lastTips) {
            if (temp.length) {
              var li = migi.createVd("li", [], [temp.map(function (item) {
                return item;
              })]);
              lis.push(li);
              temp = [];
            }
            var type = _authorTemplate2.default.code2Data[item.WorksAuthorType];
            var label = item.Tips || (type ? type.display : '其它');
            temp.push(migi.createVd("span", [["class", "item"]], [migi.createVd("small", [], [label]), migi.createVd("a", [["class", "item"], ["href", '/author/' + item.ID], ["title", item.AuthName]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img48_48_80(item.HeadUrl || '//zhuanquan.xin/head/8fd9055b7f033087e6337e37c8959d3e.png'))]]), migi.createVd("span", [], [item.AuthName])])]));
          } else {
            temp.push(migi.createVd("a", [["class", "item"], ["href", '/author/' + item.ID], ["title", item.AuthName]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img48_48_80(item.HeadUrl || '//zhuanquan.xin/head/8fd9055b7f033087e6337e37c8959d3e.png'))]]), migi.createVd("span", [], [item.AuthName])]));
          }
          last = item.WorksAuthorType;
          lastTips = item.Tips;
        });
        if (temp.length) {
          var li = migi.createVd("li", [], [temp.map(function (item) {
            return item;
          })]);
          lis.push(li);
          temp = [];
        }
        var ul = migi.createVd("ul", [], [lis.map(function (item) {
          return item;
        })]);
        list.push(ul);
      });
      this.list = list;
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "mod mod-author"]], [migi.createVd("h5", [], ["作者"]), migi.createVd("div", [["class", "c"]], [new migi.Obj("list", this, function () {
        return (this.list || []).map(function (item) {
          return item;
        });
      })])]);
    }
  }, {
    key: 'list',
    set: function set(v) {
      this.__setBind("list", v);this.__data("list");
    },
    get: function get() {
      if (this.__initBind("list")) this.__setBind("list", []);return this.__getBind("list");
    }
  }]);

  return Author;
}(migi.Component);

migi.name(Author, "Author");exports.default = Author;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timeline = function (_migi$Component) {
  _inherits(Timeline, _migi$Component);

  function Timeline() {
    var _ref;

    _classCallCheck(this, Timeline);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call.apply(_ref, [this].concat(data)));
  }

  _createClass(Timeline, [{
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "mod mod-timeline"]], [migi.createVd("ul", [["class", "c fn-clear"]], [(this.props.datas || []).map(function (item) {
        var date = _util2.default.formatDate(item.LineDate);
        return migi.createVd("li", [["title", item.LineDate.replace(/:\d{2}$/, '')]], [migi.createVd("span", [], [item.Describe]), migi.createVd("small", [], [date])]);
      })])]);
    }
  }]);

  return Timeline;
}(migi.Component);

migi.name(Timeline, "Timeline");exports.default = Timeline;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_migi$Component) {
  _inherits(Text, _migi$Component);

  function Text() {
    var _ref;

    _classCallCheck(this, Text);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = Text.__proto__ || Object.getPrototypeOf(Text)).call.apply(_ref, [this].concat(data)));
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      return migi.createVd("div", [["class", "mod mod-text"]], [migi.createVd("h5", [], [this.props.datas.name]), migi.createVd("ul", [["class", "c"]], [(this.props.datas.value || []).map(function (item) {
        return migi.createVd("li", [], [migi.createVd("pre", [], [item.Text])]);
      })])]);
    }
  }]);

  return Text;
}(migi.Component);

migi.name(Text, "Text");exports.default = Text;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lyric = function (_migi$Component) {
  _inherits(Lyric, _migi$Component);

  function Lyric() {
    var _ref;

    _classCallCheck(this, Lyric);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = Lyric.__proto__ || Object.getPrototypeOf(Lyric)).call.apply(_ref, [this].concat(data)));
  }

  _createClass(Lyric, [{
    key: "render",
    value: function render() {
      return migi.createVd("div", [["class", "mod mod-lyric"]], [migi.createVd("h5", [], [this.props.datas.name]), migi.createVd("ul", [["class", "c"]], [(this.props.datas.value || []).map(function (item) {
        return migi.createVd("li", [], [migi.createVd("pre", [], [item.Text])]);
      })])]);
    }
  }]);

  return Lyric;
}(migi.Component);

migi.name(Lyric, "Lyric");exports.default = Lyric;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InspComment = function (_migi$Component) {
  _inherits(InspComment, _migi$Component);

  function InspComment() {
    var _ref;

    _classCallCheck(this, InspComment);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = InspComment.__proto__ || Object.getPrototypeOf(InspComment)).call.apply(_ref, [this].concat(data)));
  }

  _createClass(InspComment, [{
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "mod mod-insp"]], [migi.createVd("h5", [], ["创作灵感"]), migi.createVd("ul", [["class", "c"]], [(this.props.commentData || []).map(function (item) {
        return migi.createVd("li", [], [migi.createVd("div", [["class", "t"]], [migi.createVd("div", [["class", "profile fn-clear"]], [migi.createVd("img", [["class", "pic"], ["src", item.Head_Url || '//zhuanquan.xin/img/blank.png']]), migi.createVd("div", [["class", "txt"]], [migi.createVd("div", [], [migi.createVd("a", [["href", '/author/' + item.AuthorID], ["class", "name"]], [item.AuthorName]), migi.createVd("small", [["class", "time"]], [_util2.default.formatDate(item.LineDate)])]), migi.createVd("p", [], [item.sign])])])]), migi.createVd("div", [["class", "c"]], [migi.createVd("pre", [], [item.Content, migi.createVd("span", [["class", "placeholder"]])]), migi.createVd("b", [["class", "arrow"]])])]);
      })])]);
    }
  }]);

  return InspComment;
}(migi.Component);

migi.name(InspComment, "InspComment");exports.default = InspComment;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Poster = function (_migi$Component) {
  _inherits(Poster, _migi$Component);

  function Poster() {
    var _ref;

    _classCallCheck(this, Poster);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = Poster.__proto__ || Object.getPrototypeOf(Poster)).call.apply(_ref, [this].concat(data)));
  }

  _createClass(Poster, [{
    key: "render",
    value: function render() {
      return migi.createVd("div", [["class", "mod mod-poster"]], [migi.createVd("h5", [], [this.props.datas.name]), migi.createVd("ul", [["class", "c"]], [(this.props.datas.value || []).map(function (item) {
        return migi.createVd("li", [], [migi.createVd("img", [["src", item.FileUrl || '//zhuanquan.xin/img/blank.png']])]);
      })])]);
    }
  }]);

  return Poster;
}(migi.Component);

migi.name(Poster, "Poster");exports.default = Poster;

/***/ }),
/* 21 */
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

function setTranform($elem, n) {
  $elem.css('-moz-transform', 'scaleY(' + n + ')');
  $elem.css('-webkit-transform', 'scaleY(' + n + ')');
  $elem.css('transform', 'scaleY(' + n + ')');
}

var isPlaying = void 0;

var PlayList = function (_migi$Component) {
  _inherits(PlayList, _migi$Component);

  function PlayList() {
    var _ref;

    _classCallCheck(this, PlayList);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = PlayList.__proto__ || Object.getPrototypeOf(PlayList)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.list = self.props.workList;
    if (self.props.workID) {
      self.list.forEach(function (item, i) {
        if (self.props.workID === item.ItemID.toString()) {
          self.index = i;
        }
      });
    }
    self.on(migi.Event.DOM, function () {
      var $l1 = $(self.element).find('.l1');
      var $l2 = $(self.element).find('.l2');
      var $l3 = $(self.element).find('.l3');
      setInterval(function () {
        if (!isPlaying) {
          setTranform($l1, 0.1);
          setTranform($l2, 0.1);
          setTranform($l3, 0.1);
          return;
        }
        var n1 = Math.random();
        var n2 = Math.random();
        var n3 = Math.random();
        setTranform($l1, n1);
        setTranform($l2, n2);
        setTranform($l3, n3);
      }, 100);
    });
    migi.eventBus.on('play', function () {
      isPlaying = true;
    });
    migi.eventBus.on('pause', function () {
      isPlaying = false;
    });
    return _this;
  }

  _createClass(PlayList, [{
    key: 'clickType',
    value: function clickType(e, vd, tvd) {
      var $li = $(tvd.element);
      if (!$li.hasClass('cur')) {
        $(vd.element).find('.cur').removeClass('cur');
        $li.addClass('cur');
        this.ref.list.element.className = 'list ' + (tvd.props.rel || '');
      }
    }
  }, {
    key: 'clickItem',
    value: function clickItem(e, vd, tvd, avd) {
      if (avd.name === 'img') {
        return;
      }
      var $li = $(tvd.element);
      if ($li.hasClass('private')) {
        return;
      }
      if (!$li.hasClass('cur')) {
        var $ol = $(vd.element);
        $ol.find('.cur').removeClass('cur');
        $li.addClass('cur');
        var i = tvd.props.rel;
        migi.eventBus.emit('chooseMusic', this.list[i]);
        if (parent && parent !== window && parent.setHash) {
          parent.setHash('/works/' + this.props.worksID + '/' + this.list[i].ItemID, true);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "mod mod-playlist"]], [migi.createVd("ul", [["class", "type fn-clear"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.clickType)]]]], [
        /*<li class="video" rel="video">播放视频</li>*/
        /*<li class="audio" rel="audio">播放音频</li>*/
        /*<li class="music cur">播放全部</li>*/
      ,,]), migi.createVd("ol", [["class", "list"], ["ref", "list"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.clickItem)]]]], [new migi.Obj("list", this, function () {
        return (this.list || []).map(function (item, i) {
          var type = '';
          if (item.ItemType === 1111 || item.ItemType === 1113) {
            type = 'audio';
          } else if (item.ItemType === 2110) {
            type = 'video';
          }
          if (item.WorksState === 3) {
            return migi.createVd("li", [["class", "private"]], [migi.createVd("span", [["class", "name"]], ["待揭秘"])]);
          }
          if (item.WorksState === 2) {
            return migi.createVd("li", [["class", type + ' rel' + ((this.index === undefined ? i : this.index !== i) ? '' : ' cur')], ["rel", i]], [migi.createVd("a", [["href", '/works/' + item.WorksID], ["class", "pic"]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img64_64_80(item.WorksCoverPic || this.props.cover)) || '//zhuanquan.xin/img/blank.png']])]), migi.createVd("a", [["href", '/works/' + item.WorksID], ["class", 'name' + (item.ItemName ? '' : ' empty')]], [item.ItemName || '待揭秘'])]);
          }
          return migi.createVd("li", [["class", type + ' rel' + ((this.index === undefined ? i : this.index !== i) ? '' : ' cur') + (item.FileUrl ? '' : ' empty')], ["rel", i]], [migi.createVd("a", [["href", '/works/' + item.WorksID], ["class", "pic"]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img64_64_80(item.WorksCoverPic || this.props.cover)) || '//zhuanquan.xin/img/blank.png']])]), migi.createVd("span", [["class", 'name' + (item.ItemName ? '' : ' empty')]], [item.ItemName || '待揭秘']), migi.createVd("span", [["class", "icon"]], [migi.createVd("b", [["class", "l1"]]), migi.createVd("b", [["class", "l2"]]), migi.createVd("b", [["class", "l3"]])])]);
        }.bind(this));
      })])]);
    }
  }, {
    key: 'list',
    set: function set(v) {
      this.__setBind("list", v);this.__data("list");
    },
    get: function get() {
      return this.__getBind("list");
    }
  }, {
    key: 'index',
    set: function set(v) {
      this.__setBind("index", v);this.__data("index");
    },
    get: function get() {
      return this.__getBind("index");
    }
  }]);

  return PlayList;
}(migi.Component);

migi.name(PlayList, "PlayList");exports.default = PlayList;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WorksTypeEnum__ = __webpack_require__(8);
/**
 * Created by army8735 on 2017/11/4.
 */





/* harmony default export */ __webpack_exports__["default"] = ({
  getStateStr: function(type, state) {
    switch(type) {
      case __WEBPACK_IMPORTED_MODULE_0__WorksTypeEnum__["default"].TYPE.originMusic:
      case __WEBPACK_IMPORTED_MODULE_0__WorksTypeEnum__["default"].TYPE.musicAlbum:
        switch(state) {
          case 2:
          case 3:
            return '填坑中';
        }
        return '';
      case __WEBPACK_IMPORTED_MODULE_0__WorksTypeEnum__["default"].TYPE.photoAlbum:
        switch(state) {
          case 2:
          case 3:
            return '连载中';
        }
        return '';
    }
    return '';
  },
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Describe = function (_migi$Component) {
  _inherits(Describe, _migi$Component);

  function Describe() {
    var _ref;

    _classCallCheck(this, Describe);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(this, (_ref = Describe.__proto__ || Object.getPrototypeOf(Describe)).call.apply(_ref, [this].concat(data)));
  }

  _createClass(Describe, [{
    key: "render",
    value: function render() {
      return migi.createVd("div", [["class", "mod mod-describe"]], [migi.createVd("h4", [], ["专辑简介"]), migi.createVd("pre", [], [this.props.data])]);
    }
  }]);

  return Describe;
}(migi.Component);

migi.name(Describe, "Describe");exports.default = Describe;

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var isLogin = !!data.ctx.session.uid;
  var worksID = data.worksID;
  var workID = data.workID;
  var worksDetail = data.worksDetail;
  var commentData = data.commentData;
  var labelList = data.labelList;

  // 完成公开1，未完成公开2，未完成保密3
  if (worksDetail.WorkState === 3) {
    return '<!DOCTYPE html>\n<html>\n<head>\n  ' + data.helper.getMHead() + '\n  <link rel="stylesheet" href="' + data.helper.getAssetUrl('/mcommon.css') + '"/>\n  <link rel="stylesheet" href="' + data.helper.getAssetUrl('/mworks.css') + '"/>\n</head>\n<body>\n<div id="page"><h1 class="private">\u6B64\u4F5C\u54C1\u5C1A\u672A\u5B8C\u6210\u516C\u5F00</h1></div>\n' + data.helper.getMTopNav() + '\n' + data.helper.getMBotNav() + '\n<script>\n  ' + data.helper.$CONFIG + '\n</script>\n<script src="' + data.helper.getAssetUrl('/mcommon.js') + '"></script>\n' + data.helper.getStat() + '\n</body>\n</html>';
  }

  var works = migi.preRender(migi.createCp(_Works2.default, [["isLogin", isLogin], ["worksID", worksID], ["workID", workID], ["worksDetail", worksDetail], ["labelList", labelList], ["commentData", commentData]]));

  return '<!DOCTYPE html>\n<html>\n<head>\n  ' + data.helper.getMHead({ title: worksDetail.Title }) + '\n  <link rel="stylesheet" href="' + data.helper.getAssetUrl('/mcommon.css') + '"/>\n  <link rel="stylesheet" href="' + data.helper.getAssetUrl('/mworks.css') + '"/>\n</head>\n<body>\n<div id="page">' + works + '</div>\n' + data.helper.getMTopNav() + '\n' + data.helper.getMBotNav() + '\n<script>\n  ' + data.helper.$CONFIG + '\n  $CONFIG.worksID = ' + data.helper.stringify(worksID) + ';\n  $CONFIG.workID = ' + data.helper.stringify(workID) + ';\n  $CONFIG.worksDetail = ' + data.helper.stringify(worksDetail) + ';\n  $CONFIG.labelList = ' + data.helper.stringify(labelList) + ';\n  $CONFIG.commentData = ' + data.helper.stringify(commentData) + ';\n</script>\n<script src="' + data.helper.getAssetUrl('/mcommon.js') + '"></script>\n<script src="' + data.helper.getAssetUrl('/mworks.js') + '"></script>\n' + data.helper.getStat() + '\n</body>\n</html>';
};

var _Works = __webpack_require__(34);

var _Works2 = _interopRequireDefault(_Works);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _Media = __webpack_require__(35);

var _Media2 = _interopRequireDefault(_Media);

var _itemTemplate = __webpack_require__(14);

var _itemTemplate2 = _interopRequireDefault(_itemTemplate);

var _PhotoAlbum = __webpack_require__(38);

var _PhotoAlbum2 = _interopRequireDefault(_PhotoAlbum);

var _Author = __webpack_require__(15);

var _Author2 = _interopRequireDefault(_Author);

var _Timeline = __webpack_require__(16);

var _Timeline2 = _interopRequireDefault(_Timeline);

var _Text = __webpack_require__(17);

var _Text2 = _interopRequireDefault(_Text);

var _Lyric = __webpack_require__(18);

var _Lyric2 = _interopRequireDefault(_Lyric);

var _InspComment = __webpack_require__(19);

var _InspComment2 = _interopRequireDefault(_InspComment);

var _Poster = __webpack_require__(20);

var _Poster2 = _interopRequireDefault(_Poster);

var _WorkComment = __webpack_require__(39);

var _WorkComment2 = _interopRequireDefault(_WorkComment);

var _SubCmt = __webpack_require__(3);

var _SubCmt2 = _interopRequireDefault(_SubCmt);

var _WorksTypeEnum = __webpack_require__(8);

var _WorksTypeEnum2 = _interopRequireDefault(_WorksTypeEnum);

var _LyricsParser = __webpack_require__(9);

var _LyricsParser2 = _interopRequireDefault(_LyricsParser);

var _MusicAlbum = __webpack_require__(40);

var _MusicAlbum2 = _interopRequireDefault(_MusicAlbum);

var _PlayList = __webpack_require__(21);

var _PlayList2 = _interopRequireDefault(_PlayList);

var _ImageView = __webpack_require__(41);

var _ImageView2 = _interopRequireDefault(_ImageView);

var _worksState = __webpack_require__(22);

var _worksState2 = _interopRequireDefault(_worksState);

var _Describe = __webpack_require__(23);

var _Describe2 = _interopRequireDefault(_Describe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var first = void 0;

var Works = function (_migi$Component) {
  _inherits(Works, _migi$Component);

  function Works() {
    var _ref;

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    _classCallCheck(this, Works);

    var _this = _possibleConstructorReturn(this, (_ref = Works.__proto__ || Object.getPrototypeOf(Works)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.worksID = self.props.worksID;
    self.workID = self.props.workID;
    self.worksType = self.props.worksDetail.WorkType;
    self.setWorks(self.props.worksDetail.Works_Items);
    self.on(migi.Event.DOM, function () {
      var workComment = self.ref.workComment;
      var comment = workComment.ref.comment;
      var subCmt = self.ref.subCmt;
      if (self.worksType === _WorksTypeEnum2.default.TYPE.originMusic) {
        var media = self.ref.media;
        media.on('switchTo', function (data) {
          workComment.workID = data.ItemID;
        });
      }
      comment.on('chooseSubComment', function (rid, cid, name) {
        self.rootID = rid;
        self.parentID = cid;
        subCmt.to = name;
        subCmt.focus();
      });
      comment.on('closeSubComment', function () {
        self.rootID = -1;
        self.parentID = -1;
        subCmt.to = '';
      });
      subCmt.on('submit', function (content) {
        subCmt.invalid = true;
        var rootID = self.rootID;
        var parentID = self.parentID;
        _net2.default.postJSON('/api/works/addComment', {
          parentID: parentID,
          rootID: rootID,
          worksID: self.worksID,
          workID: self.workID,
          barrageTime: self.barrageTime,
          content: content
        }, function (res) {
          if (res.success) {
            var _data = res.data;
            subCmt.value = '';
            if (rootID === -1) {
              comment.prependData(_data);
              comment.message = '';
            } else {
              comment.prependChild(_data, parentID);
            }
            self.clickSel(null, self.ref.sel, self.ref.sel.children[self.ref.sel.children.length - 1]);
            migi.eventBus.emit('COMMENT', 'work');
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
            subCmt.invalid = false;
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
            subCmt.invalid = false;
          }
        }, function (res) {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          subCmt.invalid = false;
        });
      });
    });
    return _this;
  }

  _createClass(Works, [{
    key: 'setWorks',
    value: function setWorks(works) {
      var self = this;
      var workList = [];
      var authorList = self.props.worksDetail.Works_Author || [];
      if (self.worksType === _WorksTypeEnum2.default.TYPE.musicAlbum) {
        works.forEach(function (item) {
          if (item.ItemType === 1111 || item.ItemType === 1113) {
            var l = {};
            if (_LyricsParser2.default.isLyrics(item.lrc)) {
              l.is = true;
              l.txt = _LyricsParser2.default.getTxt(item.lrc);
              l.data = _LyricsParser2.default.parse(item.lrc);
            } else {
              l.is = false;
              l.txt = item.lrc;
            }
            item.formatLyrics = l;
            workList.push(item);
          } else if (item.ItemType === 2110) {
            workList.push(item);
          }
        });
        self.workList = workList;

        self.setAuthors(authorList);
        return;
      } else if (self.worksType === _WorksTypeEnum2.default.TYPE.photoAlbum) {
        self.setAuthors(self.props.worksDetail.Works_Author || []);
        return;
      }
      var workHash = {};
      works.forEach(function (item) {
        // 将每个小作品根据小类型映射到大类型上，再归类
        var type = _itemTemplate2.default.workType(item.ItemType);
        var bigType = type.bigType;
        var name = type.display || type.name;
        if (bigType) {
          workHash[bigType] = workHash[bigType] || {
            name: name,
            value: []
          };
          workHash[bigType].value.push(item);
          authorList = authorList.concat(item.Works_Item_Author);
        }
      });
      Object.keys(workHash).forEach(function (k) {
        workList.push({
          bigType: k,
          name: workHash[k].name,
          value: workHash[k].value
        });
      });

      workList.forEach(function (item) {
        if (item.bigType === 'audio') {
          self.audioData = item.value;
        } else if (item.bigType === 'video') {
          self.videoData = item.value;
        } else if (item.bigType === 'text') {
          self.textData = item;
        } else if (item.bigType === 'poster') {
          self.posterData = item;
        } else if (item.bigType === 'lyric') {
          self.lyricData = item;
        }
      });

      if (self.workID) {
        if (self.videoData) {
          self.videoData.forEach(function (item) {
            if (item.ItemID.toString() === self.workID) {
              first = 'video';
            }
          });
        }
        if (self.audioData) {
          self.audioData.forEach(function (item) {
            if (item.ItemID.toString() === self.workID) {
              first = 'audio';
            }
          });
        }
      } else {
        if (self.videoData) {
          first = 'video';
          self.workID = self.videoData[0].ItemID;
        } else if (self.audioData) {
          first = 'audio';
          self.workID = self.audioData[0].ItemID;
        }
      }

      self.setAuthors(authorList);
    }
  }, {
    key: 'setAuthors',
    value: function setAuthors(authors) {
      var self = this;
      var hash = {};
      var typeHash = {};
      (authors || []).forEach(function (item) {
        hash[item.ID] = item;
        typeHash[item.WorksAuthorType] = typeHash[item.WorksAuthorType] || {
          hash: {},
          list: []
        };
        var type = typeHash[item.WorksAuthorType];
        if (!type.hash.hasOwnProperty(item.ID)) {
          type.hash[item.ID] = true;
          type.list.push(item);
        }
      });
      self.isManager = hash.hasOwnProperty(self.props.authorID);
      // 按类型将作者整理排序
      var authorList = [];
      _itemTemplate2.default.authorType.forEach(function (typeList) {
        var list = [];
        typeList.forEach(function (type) {
          if (typeHash.hasOwnProperty(type)) {
            list = list.concat(typeHash[type].list);
            delete typeHash[type];
          }
        });
        if (list.length) {
          authorList.push(list);
        }
      });
      var unKnowList = [];
      var unKnowHash = {};
      Object.keys(typeHash).forEach(function (type) {
        typeHash[type].list.forEach(function (item) {
          if (!unKnowHash.hasOwnProperty(item.ID)) {
            unKnowHash[item.ID] = true;
            unKnowList.push(item);
          }
        });
      });
      authorList = authorList.concat([unKnowList]);
      self.authorList = authorList;
    }
  }, {
    key: 'clickSel',
    value: function clickSel(e, vd, tvd) {
      var self = this;
      //最后一个可能是文本节点
      if (!tvd || !tvd.name) {
        return;
      }
      var $li = $(tvd.element);
      if (!$li.hasClass('cur') && !$li.hasClass('state')) {
        $(vd.element).find('.cur').removeClass('cur');
        $li.addClass('cur');
        var rel = tvd.props.rel;
        if (self.worksType === _WorksTypeEnum2.default.TYPE.musicAlbum) {
          if (rel === 'playList') {
            $(self.ref.workComment.element).addClass('fn-hide');
            $(self.ref.intro.element).addClass('fn-hide');
            $(self.ref.playList.element).removeClass('fn-hide');
          } else if (rel === 'intro') {
            $(self.ref.workComment.element).addClass('fn-hide');
            $(self.ref.playList.element).addClass('fn-hide');
            $(self.ref.intro.element).removeClass('fn-hide');
          } else if (rel === 'comment') {
            $(self.ref.intro.element).addClass('fn-hide');
            $(self.ref.playList.element).addClass('fn-hide');
            $(self.ref.workComment.element).removeClass('fn-hide');
          }
        } else if (self.worksType === _WorksTypeEnum2.default.TYPE.photoAlbum) {
          if (rel === 'photoAlbum') {
            $(self.ref.workComment.element).addClass('fn-hide');
            $(self.ref.intro.element).addClass('fn-hide');
            $(self.ref.photoAlbum.element).removeClass('fn-hide');
          } else if (rel === 'intro') {
            $(self.ref.workComment.element).addClass('fn-hide');
            $(self.ref.photoAlbum.element).addClass('fn-hide');
            $(self.ref.intro.element).removeClass('fn-hide');
          } else if (rel === 'comment') {
            $(self.ref.intro.element).addClass('fn-hide');
            $(self.ref.photoAlbum.element).addClass('fn-hide');
            $(self.ref.workComment.element).removeClass('fn-hide');
          }
        } else if (self.worksType === _WorksTypeEnum2.default.TYPE.originMusic) {
          if (rel === 'intro') {
            $(self.ref.workComment.element).addClass('fn-hide');
            $(self.ref.intro.element).removeClass('fn-hide');
          } else if (rel === 'comment') {
            $(self.ref.intro.element).addClass('fn-hide');
            $(self.ref.workComment.element).removeClass('fn-hide');
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      var state = _worksState2.default.getStateStr(self.worksType, this.props.worksDetail.WorkState);
      if (self.worksType === _WorksTypeEnum2.default.TYPE.musicAlbum) {
        return migi.createVd("div", [["class", new migi.Obj("worksType", this, function () {
          return 'works t' + self.worksType;
        })]], [migi.createCp(_MusicAlbum2.default, [["ref", "musicAlbum"], ["worksID", new migi.Obj("worksID", this, function () {
          return this.worksID;
        })], ["workID", new migi.Obj("workID", this, function () {
          return this.workID;
        })], ["cover", this.props.worksDetail.cover_Pic], ["workList", this.workList]]), migi.createVd("ul", [["class", "sel fn-clear"], ["ref", "sel"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.clickSel)]]]], [migi.createVd("li", [["class", "cur"], ["rel", "playList"]], ["曲目"]), migi.createVd("li", [["rel", "intro"]], ["简介"]), migi.createVd("li", [["rel", "comment"]], ["留言"]), state ? migi.createVd("li", [["class", "state"]], [state]) : '']), migi.createCp(_PlayList2.default, [["ref", "playList"], ["cover", this.props.worksDetail.cover_Pic], ["worksID", new migi.Obj("worksID", this, function () {
          return this.worksID;
        })], ["workID", new migi.Obj("workID", this, function () {
          return this.workID;
        })], ["workList", this.workList]]), migi.createVd("div", [["class", "intro fn-hide"], ["ref", "intro"]], [migi.createCp(_Describe2.default, [["data", this.props.worksDetail.Describe]]), migi.createCp(_Author2.default, [["authorList", this.authorList]]), this.props.worksDetail.WorkTimeLine && this.props.worksDetail.WorkTimeLine.length ? migi.createCp(_Timeline2.default, [["datas", this.props.worksDetail.WorkTimeLine]]) : '', this.props.worksDetail.WorksAuthorComment ? migi.createCp(_InspComment2.default, [["ref", "inspComment"], ["commentData", this.props.worksDetail.WorksAuthorComment]]) : '']), migi.createCp(_WorkComment2.default, [["ref", "workComment"], ["isLogin", this.props.isLogin], ["worksID", new migi.Obj("worksID", this, function () {
          return this.worksID;
        })], ["workID", new migi.Obj("workID", this, function () {
          return this.workID;
        })], ["originTo", this.props.worksDetail.Title], ["commentData", this.props.commentData]]), migi.createCp(_SubCmt2.default, [["ref", "subCmt"], ["originTo", this.props.worksDetail.Title], ["subText", "发送"], ["tipText", "-${n}"], ["placeholder", "夸夸这个作品吧"]])]);
      }
      if (self.worksType === _WorksTypeEnum2.default.TYPE.photoAlbum) {
        return migi.createVd("div", [["class", new migi.Obj("worksType", this, function () {
          return 'works t' + self.worksType;
        })]], [migi.createVd("ul", [["class", "sel fn-clear"], ["ref", "sel"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.clickSel)]]]], [migi.createVd("li", [["class", "cur"], ["rel", "photoAlbum"]], ["相册"]), migi.createVd("li", [["rel", "intro"]], ["简介"]), migi.createVd("li", [["rel", "comment"]], ["留言"]), state ? migi.createVd("li", [["class", "state"]], [state]) : '']), migi.createCp(_PhotoAlbum2.default, [["ref", "photoAlbum"], ["worksID", new migi.Obj("worksID", this, function () {
          return this.worksID;
        })], ["labelList", this.props.labelList]]), migi.createVd("div", [["class", "intro fn-hide"], ["ref", "intro"]], [migi.createCp(_Author2.default, [["authorList", this.authorList]]), this.props.worksDetail.WorkTimeLine && this.props.worksDetail.WorkTimeLine.length ? migi.createCp(_Timeline2.default, [["datas", this.props.worksDetail.WorkTimeLine]]) : '', this.textData && this.textData.value && this.textData.value.length ? migi.createCp(_Text2.default, [["datas", this.textData]]) : '', this.props.worksDetail.WorksAuthorComment ? migi.createCp(_InspComment2.default, [["ref", "inspComment"], ["commentData", this.props.worksDetail.WorksAuthorComment]]) : '']), migi.createCp(_WorkComment2.default, [["ref", "workComment"], ["isLogin", this.props.isLogin], ["worksID", new migi.Obj("worksID", this, function () {
          return this.worksID;
        })], ["workID", new migi.Obj("workID", this, function () {
          return this.workID;
        })], ["originTo", this.props.worksDetail.Title], ["commentData", this.props.commentData]]), migi.createCp(_SubCmt2.default, [["ref", "subCmt"], ["originTo", this.props.worksDetail.Title], ["subText", "发送"], ["tipText", "-${n}"], ["placeholder", "夸夸这个作品吧"]]), migi.createCp(_ImageView2.default, [["ref", "imageView"]])]);
      }
      return migi.createVd("div", [["class", new migi.Obj("worksType", this, function () {
        return 'works t' + self.worksType;
      })]], [migi.createCp(_Media2.default, [["ref", "media"], ["worksID", new migi.Obj("worksID", this, function () {
        return this.worksID;
      })], ["workID", new migi.Obj("workID", this, function () {
        return this.workID;
      })], ["cover", this.props.worksDetail.cover_Pic], ["audioData", this.audioData], ["videoData", this.videoData], ["first", first]]), migi.createVd("ul", [["class", "sel fn-clear"], ["ref", "sel"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.clickSel)]]]], [migi.createVd("li", [["class", "cur"], ["rel", "intro"]], ["简介"]), migi.createVd("li", [["rel", "comment"]], ["留言"]), state ? migi.createVd("li", [["class", "state"]], [state]) : '']), migi.createVd("div", [["class", "intro"], ["ref", "intro"]], [migi.createCp(_Author2.default, [["authorList", this.authorList]]), this.props.worksDetail.WorkTimeLine && this.props.worksDetail.WorkTimeLine.length ? migi.createCp(_Timeline2.default, [["datas", this.props.worksDetail.WorkTimeLine]]) : '', this.textData && this.textData.value && this.textData.value.length ? migi.createCp(_Text2.default, [["datas", this.textData]]) : '', this.lyricData && this.lyricData.value && this.lyricData.value.length && this.lyricData.value[0].Text ? migi.createCp(_Lyric2.default, [["datas", this.lyricData]]) : '', this.props.worksDetail.WorksAuthorComment ? migi.createCp(_InspComment2.default, [["ref", "inspComment"], ["commentData", this.props.worksDetail.WorksAuthorComment]]) : '', this.posterData ? migi.createCp(_Poster2.default, [["datas", this.posterData]]) : '']), migi.createCp(_WorkComment2.default, [["ref", "workComment"], ["isLogin", this.props.isLogin], ["worksID", new migi.Obj("worksID", this, function () {
        return this.worksID;
      })], ["workID", new migi.Obj("workID", this, function () {
        return this.workID;
      })], ["originTo", this.props.worksDetail.Title], ["commentData", this.props.commentData]]), migi.createCp(_SubCmt2.default, [["ref", "subCmt"], ["originTo", this.props.worksDetail.Title], ["subText", "发送"], ["tipText", "-${n}"], ["placeholder", "夸夸这个作品吧"]])]);
    }
  }, {
    key: 'worksID',
    set: function set(v) {
      this.__setBind("worksID", v);this.__data("worksID");
    },
    get: function get() {
      return this.__getBind("worksID");
    }
  }, {
    key: 'workID',
    set: function set(v) {
      this.__setBind("workID", v);this.__data("workID");
    },
    get: function get() {
      return this.__getBind("workID");
    }
  }, {
    key: 'worksType',
    set: function set(v) {
      this.__setBind("worksType", v);this.__data("worksType");
    },
    get: function get() {
      return this.__getBind("worksType");
    }
  }, {
    key: 'rootID',
    set: function set(v) {
      this.__setBind("rootID", v);this.__data("rootID");
    },
    get: function get() {
      if (this.__initBind("rootID")) this.__setBind("rootID", -1);return this.__getBind("rootID");
    }
  }, {
    key: 'parentID',
    set: function set(v) {
      this.__setBind("parentID", v);this.__data("parentID");
    },
    get: function get() {
      if (this.__initBind("parentID")) this.__setBind("parentID", -1);return this.__getBind("parentID");
    }
  }, {
    key: 'barrageTime',
    set: function set(v) {
      this.__setBind("barrageTime", v);this.__data("barrageTime");
    },
    get: function get() {
      if (this.__initBind("barrageTime")) this.__setBind("barrageTime", 0);return this.__getBind("barrageTime");
    }
  }]);

  return Works;
}(migi.Component);

migi.name(Works, "Works");exports.default = Works;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _Audio = __webpack_require__(36);

var _Audio2 = _interopRequireDefault(_Audio);

var _Video = __webpack_require__(37);

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Media = function (_migi$Component) {
  _inherits(Media, _migi$Component);

  function Media() {
    var _ref;

    _classCallCheck(this, Media);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Media.__proto__ || Object.getPrototypeOf(Media)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    if (self.props.workID) {
      if (self.props.first === 'video') {
        self.props.videoData.forEach(function (item, i) {
          if (self.props.workID === item.ItemID.toString()) {
            self.vIndex = i;
          }
        });
      } else if (self.props.first === 'audio') {
        self.props.audioData.forEach(function (item, i) {
          if (self.props.workID === item.ItemID.toString()) {
            self.aIndex = i;
          }
        });
      }
    }
    self.on(migi.Event.DOM, function () {});
    return _this;
  }

  _createClass(Media, [{
    key: 'clickType',
    value: function clickType(e, vd, tvd) {
      var self = this;
      var $dd = $(tvd.element);
      var $parent = $dd.parent();
      if (tvd.name === 'dt' && !$parent.hasClass('cur') || tvd.name === 'dd' && (!$dd.hasClass('cur') || !$parent.hasClass('cur'))) {
        var type = $parent.attr('rel');
        var index = $dd.attr('rel');
        var audio = self.ref.audio;
        var video = self.ref.video;
        if ($parent.hasClass('cur')) {
          if (tvd.name === 'dd') {
            $parent.find('.cur').removeClass('cur');
            $dd.addClass('cur');
          }
          if (type === 'audio') {
            audio.switchTo(this.aIndex = index);
            history.replaceState(null, '', '/works/' + this.props.worksID + '/' + this.props.audioData[this.aIndex].ItemID);
          } else if (type === 'video') {
            video.switchTo(this.vIndex = index);
            history.replaceState(null, '', '/works/' + this.props.worksID + '/' + this.props.videoData[this.vIndex].ItemID);
          }
        } else {
          var $type = $(vd.element);
          $type.find('dl.cur').removeClass('cur');
          $parent.addClass('cur');
          if (tvd.name === 'dd') {
            $parent.find('.cur').removeClass('cur');
            $dd.addClass('cur');
          }
          if (type === 'audio') {
            video && video.pause().hide();
            audio.show();
            audio.switchTo(this.aIndex = index);
            history.replaceState(null, '', '/works/' + this.props.worksID + '/' + this.props.audioData[this.aIndex].ItemID);
          } else if (type === 'video') {
            audio && audio.pause().hide();
            video.show();
            video.switchTo(this.vIndex = index);
            history.replaceState(null, '', '/works/' + this.props.worksID + '/' + this.props.videoData[this.vIndex].ItemID);
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var showLabel = this.props.videoData && this.props.audioData;
      var worksID = this.props.worksID;
      var workID = this.props.workID;
      var first = this.props.first;
      if (showLabel) {
        return migi.createVd("div", [["class", "mod mod-media fn-clear"], ["style", 'background-image:url(' + _util2.default.autoSsl(_util2.default.img750_750_80(this.props.cover || '//zhuanquan.xin/img/blank.png')) + ')']], [this.props.videoData ? migi.createCp(_Video2.default, [["ref", "video"], ["worksID", worksID], ["workID", workID], ["cover", this.props.cover], ["datas", this.props.videoData], ["show", this.props.first === 'video']]) : '', this.props.audioData ? migi.createCp(_Audio2.default, [["ref", "audio"], ["worksID", worksID], ["workID", workID], ["cover", this.props.cover], ["datas", this.props.audioData], ["show", this.props.first === 'audio']]) : '', migi.createVd("div", [["class", "type fn-clear"], ["ref", "type"], ["onClick", [[{ "dt": { "_v": true } }, new migi.Cb(this, this.clickType)], [{ "dd": { "_v": true } }, new migi.Cb(this, this.clickType)]]]], [this.props.videoData ? migi.createVd("dl", [["class", 'video fn-clear' + (this.props.first === 'video' ? ' cur' : '')], ["rel", "video"]], [migi.createVd("dt", [["rel", new migi.Obj("vIndex", this, function () {
          return this.vIndex;
        })]], ["视频"]), this.props.videoData.length && this.props.videoData.length > 1 ? this.props.videoData.map(function (item, i) {
          if (workID !== undefined && first === 'video') {
            return migi.createVd("dd", [["class", workID === item.ItemID.toString() ? 'cur' : ''], ["rel", i]], [item.ItemName]);
          }
          return migi.createVd("dd", [["class", this.vIndex === i ? 'cur' : ''], ["rel", i]], [item.ItemName]);
        }.bind(this)) : '']) : '', this.props.audioData ? migi.createVd("dl", [["class", 'audio fn-clear' + (this.props.first === 'audio' ? ' cur' : '')], ["rel", "audio"]], [migi.createVd("dt", [["rel", new migi.Obj("aIndex", this, function () {
          return this.aIndex;
        })]], ["音频"]), this.props.audioData.length && this.props.audioData.length > 1 ? this.props.audioData.map(function (item, i) {
          if (workID !== undefined && first === 'audio') {
            return migi.createVd("dd", [["class", workID === item.ItemID.toString() ? 'cur' : ''], ["rel", i]], [item.ItemName]);
          }
          return migi.createVd("dd", [["class", this.aIndex === i ? 'cur' : ''], ["rel", i]], [item.ItemName]);
        }.bind(this)) : '']) : ''])]);
      }
      return migi.createVd("div", [["class", "mod mod-media no-type fn-clear"], ["style", 'background-image:url(' + _util2.default.autoSsl(_util2.default.img750_750_80(this.props.cover || '//zhuanquan.xin/img/blank.png')) + ')']], [this.props.videoData ? migi.createCp(_Video2.default, [["ref", "video"], ["worksID", worksID], ["workID", workID], ["cover", this.props.cover], ["datas", this.props.videoData], ["show", this.props.first === 'video']]) : '', this.props.audioData ? migi.createCp(_Audio2.default, [["ref", "audio"], ["worksID", worksID], ["workID", workID], ["cover", this.props.cover], ["datas", this.props.audioData], ["show", this.props.first === 'audio']]) : '']);
    }
  }, {
    key: 'vIndex',
    set: function set(v) {
      this.__setBind("vIndex", v);this.__data("vIndex");
    },
    get: function get() {
      if (this.__initBind("vIndex")) this.__setBind("vIndex", 0);return this.__getBind("vIndex");
    }
  }, {
    key: 'aIndex',
    set: function set(v) {
      this.__setBind("aIndex", v);this.__data("aIndex");
    },
    get: function get() {
      if (this.__initBind("aIndex")) this.__setBind("aIndex", 0);return this.__getBind("aIndex");
    }
  }]);

  return Media;
}(migi.Component);

migi.name(Media, "Media");exports.default = Media;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _LyricsParser = __webpack_require__(9);

var _LyricsParser2 = _interopRequireDefault(_LyricsParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isStart = void 0;
var offsetX = void 0;

var Audio = function (_migi$Component) {
  _inherits(Audio, _migi$Component);

  function Audio() {
    var _ref;

    _classCallCheck(this, Audio);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Audio.__proto__ || Object.getPrototypeOf(Audio)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    if (self.props.datas) {
      self.setData(self.props.datas);
      if (self.props.workID) {
        self.props.datas.forEach(function (item, i) {
          if (item.ItemID.toString() === self.props.workID) {
            self.index = i;
          }
        });
      }
      if (self.props.show) {
        self.on(migi.Event.DOM, function () {
          self.addMedia();
        });
      }
    }
    return _this;
  }

  _createClass(Audio, [{
    key: 'setData',
    value: function setData(datas) {
      var self = this;
      self.datas = datas;
      datas.forEach(function (item) {
        var l = {};
        if (_LyricsParser2.default.isLyrics(item.lrc)) {
          l.is = true;
          l.txt = _LyricsParser2.default.getTxt(item.lrc);
          l.data = _LyricsParser2.default.parse(item.lrc);
        } else {
          l.is = false;
          l.txt = item.lrc;
        }
        item.formatLyrics = l;
      });
      return this;
    }
  }, {
    key: 'addMedia',
    value: function addMedia() {
      var audio = migi.createVd("audio", [["src", this.datas[this.index].FileUrl], ["onTimeupdate", this.onTimeupdate.bind(this)], ["onLoadedmetadata", this.onLoadedmetadata.bind(this)], ["onPlaying", this.onPlaying.bind(this)], ["onPause", this.onPause.bind(this)], ["onProgress", this.onProgress.bind(this)], ["preload", "meta"]], ["\n\
      your browser does not support the audio tag\n\
    "]);
      this.audio = audio;
      audio.appendTo(this.element);
    }
  }, {
    key: 'switchTo',
    value: function switchTo(index) {
      this.index = index;
      if (!this.audio) {
        this.addMedia();
      }
      this.audio.element.src = this.datas[this.index].FileUrl;
      this.pause();
      this.emit('switchTo', this.datas[this.index]);
    }
  }, {
    key: 'show',
    value: function show() {
      $(this.element).removeClass('fn-hide');
      if (!this.audio) {
        this.addMedia();
      }
      $(this.ref.fn.element).removeClass('fn-hidden');
      return this;
    }
  }, {
    key: 'hide',
    value: function hide() {
      $(this.element).addClass('fn-hide');
      return this;
    }
  }, {
    key: 'onTimeupdate',
    value: function onTimeupdate(e) {
      var currentTime = this.currentTime = e.target.currentTime;
      var item = this.datas[this.index];
      var formatLyrics = item.formatLyrics;
      var formatLyricsData = formatLyrics.data;
      if (formatLyrics.is && formatLyricsData.length) {
        var tempIndex = this.lyricsIndex;
        for (var i = 0, len = formatLyricsData.length; i < len; i++) {
          if (currentTime * 1000 >= formatLyricsData[i].timestamp) {
            tempIndex = i;
          } else {
            break;
          }
        }
        if (tempIndex !== this.lyricsIndex) {
          this.lyricsIndex = tempIndex;
        }
      }
      var percent = currentTime / this.duration;
      this.setBarPercent(percent);
    }
  }, {
    key: 'onProgress',
    value: function onProgress(e) {}
  }, {
    key: 'onLoadedmetadata',
    value: function onLoadedmetadata(e) {
      this.duration = e.target.duration;
      this.canControl = true;
    }
  }, {
    key: 'onPlaying',
    value: function onPlaying(e) {
      this.duration = e.target.duration;
    }
  }, {
    key: 'onPause',
    value: function onPause(e) {}
  }, {
    key: 'play',
    value: function play() {
      this.audio.element.play();
      this.isPlaying = true;
      this.hasStart = true;
      return this;
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.audio && this.audio.element.pause();
      this.isPlaying = false;
      return this;
    }
  }, {
    key: 'altLyrics',
    value: function altLyrics() {
      this.showLyricsMode = !this.showLyricsMode;
    }
  }, {
    key: 'clickStart',
    value: function clickStart(e) {
      this.play();
    }
  }, {
    key: 'touchStart',
    value: function touchStart(e) {
      e.preventDefault();
      if (this.canControl && e.touches.length === 1) {
        isStart = true;
        offsetX = $(this.ref.progress.element).offset().left;
        this.pause();
      }
    }
  }, {
    key: 'touchMove',
    value: function touchMove(e) {
      if (isStart && e.touches.length === 1) {
        e.preventDefault();
        var x = e.touches[0].pageX;
        var diff = x - offsetX;
        var width = $(this.ref.progress.element).width();
        diff = Math.max(0, diff);
        diff = Math.min(width, diff);
        var percent = diff / width;
        this.setBarPercent(percent);
        this.audio.element.currentTime = this.currentTime = Math.floor(this.duration * percent);
      }
    }
  }, {
    key: 'touchEnd',
    value: function touchEnd(e) {
      isStart = false;
    }
  }, {
    key: 'clickProgress',
    value: function clickProgress(e) {
      if (this.canControl && e.target.className !== 'p') {
        var $progress = $(this.ref.progress.element);
        var left = $progress.offset().left;
        var x = e.pageX - left;
        var percent = x / $progress.width();
        var currentTime = Math.floor(this.duration * percent);
        this.audio.element.currentTime = this.currentTime = currentTime;
      }
    }
  }, {
    key: 'setBarPercent',
    value: function setBarPercent(percent) {
      percent *= 100;
      $(this.ref.vol.element).css('width', percent + '%');
      $(this.ref.p.element).css('-moz-transform', 'translateX(' + percent + '%)');
      $(this.ref.p.element).css('-webkit-transform', 'translateX(' + percent + '%)');
      $(this.ref.p.element).css('transform', 'translateX(' + percent + '%)');
    }
  }, {
    key: 'clickPlay',
    value: function clickPlay(e) {
      this.isPlaying ? this.pause() : this.play();
    }
  }, {
    key: 'clickLike',
    value: function clickLike(e, vd) {
      if (!$CONFIG.isLogin) {
        migi.eventBus.emit('NEED_LOGIN');
        return;
      }
      var self = this;
      var $vd = $(vd.element);
      if (!$vd.hasClass('loading')) {
        $vd.addClass('loading');
        var data = self.datas[self.index];
        _net2.default.postJSON('/api/works/likeWork', { workID: data.ItemID }, function (res) {
          if (res.success) {
            data.ISLike = res.data === 211;
            self.fnLike = null;
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $vd.removeClass('loading');
        }, function () {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $vd.removeClass('loading');
        });
      }
    }
  }, {
    key: 'clickFavor',
    value: function clickFavor(e, vd) {
      if (!$CONFIG.isLogin) {
        migi.eventBus.emit('NEED_LOGIN');
        return;
      }
      var self = this;
      var $vd = $(vd.element);
      var data = self.datas[self.index];
      if ($vd.hasClass('loading')) {
        //
      } else if ($vd.hasClass('has')) {
        _net2.default.postJSON('/api/works/unFavorWork', { workID: data.ItemID }, function (res) {
          if (res.success) {
            data.ISFavor = false;
            self.fnFavor = null;
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $vd.removeClass('loading');
        }, function () {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $vd.removeClass('loading');
        });
      } else {
        _net2.default.postJSON('/api/works/favorWork', { workID: data.ItemID }, function (res) {
          if (res.success) {
            data.ISFavor = true;
            self.fnFavor = null;
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $vd.removeClass('loading');
        }, function () {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $vd.removeClass('loading');
        });
      }
    }
  }, {
    key: 'clickDownload',
    value: function clickDownload(e) {
      if (!$CONFIG.isLogin) {
        e.preventDefault();
        migi.eventBus.emit('NEED_LOGIN');
      }
    }
  }, {
    key: 'clickShare',
    value: function clickShare() {
      migi.eventBus.emit('SHARE', location.href);
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", new migi.Obj(["datas", "index"], this, function () {
        return 'audio' + (this.props.show ? '' : ' fn-hide') + (this.datas[this.index || 0].FileUrl ? '' : ' empty');
      })]], [migi.createVd("div", [["class", "c"]], [migi.createVd("div", [["class", new migi.Obj("hasStart", this, function () {
        return 'lyrics' + (this.hasStart ? '' : ' fn-hidden');
      })], ["ref", "lyrics"]], [migi.createVd("div", [["class", new migi.Obj(["showLyricsMode", "datas", "index"], this, function () {
        return 'roll' + (!this.showLyricsMode && this.datas[this.index].formatLyrics.data ? '' : ' fn-hide');
      })]], [migi.createVd("div", [["class", "c"], ["ref", "lyricsRoll"], ["style", new migi.Obj("lyricsIndex", this, function () {
        return '-webkit-transform:translateY(-' + this.lyricsIndex * 20 + 'px);transform:translateY(-' + this.lyricsIndex * 20 + 'px)';
      })]], [new migi.Obj(["datas", "index"], this, function () {
        return (this.datas[this.index].formatLyrics.data || []).map(function (item) {
          return migi.createVd("pre", [], [item.txt || ' ']);
        });
      })])]), migi.createVd("div", [["class", new migi.Obj(["showLyricsMode", "datas", "index"], this, function () {
        return 'line' + (this.showLyricsMode && this.datas[this.index].formatLyrics.txt ? '' : ' fn-hide');
      })]], [migi.createVd("pre", [["style", new migi.Obj("lyricsIndex", this, function () {
        return '-webkit-transform:translateY(-' + this.lyricsIndex * 20 + 'px);transform:translateY(-' + this.lyricsIndex * 20 + 'px)';
      })]], [new migi.Obj(["datas", "index"], this, function () {
        return this.datas[this.index].formatLyrics.txt;
      })])])]), migi.createVd("b", [["class", new migi.Obj("isPlaying", this, function () {
        return 'start' + (this.isPlaying ? ' fn-hide' : '');
      })], ["onClick", new migi.Cb(this, this.clickStart)]])]), migi.createVd("div", [["class", "fn"], ["ref", "fn"]], [migi.createVd("div", [["class", "control"]], [migi.createVd("b", [["class", new migi.Obj("showLyricsMode", this, function () {
        return 'lyrics' + (this.showLyricsMode ? '' : ' roll');
      })], ["onClick", new migi.Cb(this, this.altLyrics)]]), migi.createVd("small", [["class", "time"]], [new migi.Obj("currentTime", this, function () {
        return _util2.default.formatTime(this.currentTime * 1000);
      }), " / ", new migi.Obj("duration", this, function () {
        return _util2.default.formatTime(this.duration * 1000);
      })])]), migi.createVd("div", [["class", "bar"]], [migi.createVd("b", [["class", new migi.Obj("isPlaying", this, function () {
        return 'play' + (this.isPlaying ? ' pause' : '');
      })], ["onClick", new migi.Cb(this, this.clickPlay)]]), migi.createVd("div", [["class", "progress"], ["ref", "progress"], ["onClick", new migi.Cb(this, this.clickProgress)]], [migi.createVd("b", [["class", "load"]]), migi.createVd("b", [["class", "vol"], ["ref", "vol"]]), migi.createVd("b", [["class", "p"], ["ref", "p"], ["onTouchStart", new migi.Cb(this, this.touchStart)], ["onTouchMove", new migi.Cb(this, this.touchMove)], ["onTouchEnd", new migi.Cb(this, this.touchEnd)]])])]), migi.createVd("ul", [["class", "btn"]], [migi.createVd("li", [["class", new migi.Obj(["datas", "index", "fnLike"], this, function () {
        return 'like' + (this.datas[this.index].ISLike || this.fnLike ? ' has' : '');
      })], ["onClick", new migi.Cb(this, this.clickLike)]]), migi.createVd("li", [["class", new migi.Obj(["datas", "index", "fnFavor"], this, function () {
        return 'favor' + (this.datas[this.index].ISFavor || this.fnFavor ? ' has' : '');
      })], ["onClick", new migi.Cb(this, this.clickFavor)]]), migi.createVd("li", [["class", "download"]], [migi.createVd("a", [["href", new migi.Obj(["datas", "index"], this, function () {
        return this.datas[this.index].FileUrl;
      })], ["download", new migi.Obj(["datas", "index"], this, function () {
        return (this.datas[this.index].ItemName || '') + (this.datas[this.index].FileUrl ? /\.\w+$/.exec(this.datas[this.index].FileUrl)[0] || '' : '');
      })], ["onClick", new migi.Cb(this, this.clickDownload)]])]), migi.createVd("li", [["class", "share"], ["onClick", new migi.Cb(this, this.clickShare)]])])])]);
    }
  }, {
    key: 'datas',
    set: function set(v) {
      this.__setBind("datas", v);this.__data("datas");
    },
    get: function get() {
      if (this.__initBind("datas")) this.__setBind("datas", []);return this.__getBind("datas");
    }
  }, {
    key: 'index',
    set: function set(v) {
      this.__setBind("index", v);this.__data("index");
    },
    get: function get() {
      if (this.__initBind("index")) this.__setBind("index", 0);return this.__getBind("index");
    }
  }, {
    key: 'isPlaying',
    set: function set(v) {
      this.__setBind("isPlaying", v);this.__data("isPlaying");
    },
    get: function get() {
      return this.__getBind("isPlaying");
    }
  }, {
    key: 'hasStart',
    set: function set(v) {
      this.__setBind("hasStart", v);this.__data("hasStart");
    },
    get: function get() {
      return this.__getBind("hasStart");
    }
  }, {
    key: 'showLyricsMode',
    set: function set(v) {
      this.__setBind("showLyricsMode", v);this.__data("showLyricsMode");
    },
    get: function get() {
      return this.__getBind("showLyricsMode");
    }
  }, {
    key: 'lyricsIndex',
    set: function set(v) {
      this.__setBind("lyricsIndex", v);this.__data("lyricsIndex");
    },
    get: function get() {
      if (this.__initBind("lyricsIndex")) this.__setBind("lyricsIndex", 0);return this.__getBind("lyricsIndex");
    }
  }, {
    key: 'duration',
    set: function set(v) {
      this.__setBind("duration", v);this.__data("duration");
    },
    get: function get() {
      return this.__getBind("duration");
    }
  }, {
    key: 'canControl',
    set: function set(v) {
      this.__setBind("canControl", v);this.__data("canControl");
    },
    get: function get() {
      return this.__getBind("canControl");
    }
  }, {
    key: 'fnFavor',
    set: function set(v) {
      this.__setBind("fnFavor", v);this.__data("fnFavor");
    },
    get: function get() {
      return this.__getBind("fnFavor");
    }
  }, {
    key: 'fnLike',
    set: function set(v) {
      this.__setBind("fnLike", v);this.__data("fnLike");
    },
    get: function get() {
      return this.__getBind("fnLike");
    }
  }, {
    key: 'currentTime',
    get: function get() {
      return this._currentTime || 0;
    },
    set: function set(v) {
      this._currentTime = v;
      ;this.__array("currentTime", v);this.__data("currentTime");
    }
  }]);

  return Audio;
}(migi.Component);

migi.name(Audio, "Audio");exports.default = Audio;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isStart = void 0;
var offsetX = void 0;

var Video = function (_migi$Component) {
  _inherits(Video, _migi$Component);

  function Video() {
    var _ref;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    if (self.props.datas) {
      self.setData(self.props.datas);
      if (self.props.workID) {
        self.props.datas.forEach(function (item, i) {
          if (item.ItemID.toString() === self.props.workID) {
            self.index = i;
          }
        });
      }
      if (self.props.show) {
        self.on(migi.Event.DOM, function () {
          self.addMedia();
        });
      }
    }
    return _this;
  }

  _createClass(Video, [{
    key: 'setData',
    value: function setData(datas) {
      var self = this;
      self.datas = datas;
      return this;
    }
  }, {
    key: 'addMedia',
    value: function addMedia() {
      var video = migi.createVd("video", [["ref", "video"], ["src", this.datas[this.index].FileUrl], ["onClick", this.clickPlay.bind(this)], ["onTimeupdate", this.onTimeupdate.bind(this)], ["onLoadedmetadata", this.onLoadedmetadata.bind(this)], ["onPause", this.onPause.bind(this)], ["onPlaying", this.onPlaying.bind(this)], ["preload", "meta"], ["playsinline", "true"], ["webkit-playsinline", "true"]], ["\n\
      your browser does not support the video tag\n\
    "]);
      this.video = video;
      video.prependTo(this.ref.c.element);
    }
  }, {
    key: 'switchTo',
    value: function switchTo(index) {
      this.index = index;
      if (!this.video) {
        this.addMedia();
      }
      this.video.element.src = this.datas[this.index].FileUrl;
      this.pause();
      this.emit('switchTo', this.datas[this.index]);
    }
  }, {
    key: 'show',
    value: function show() {
      $(this.element).removeClass('fn-hide');
      if (!this.video) {
        this.addMedia();
      }
      $(this.ref.fn.element).removeClass('fn-hidden');
      return this;
    }
  }, {
    key: 'hide',
    value: function hide() {
      $(this.element).addClass('fn-hide');
      return this;
    }
  }, {
    key: 'onTimeupdate',
    value: function onTimeupdate(e) {
      var currentTime = this.currentTime = e.target.currentTime;
      var percent = currentTime / this.duration;
      this.setBarPercent(percent);
    }
  }, {
    key: 'onProgress',
    value: function onProgress(e) {}
  }, {
    key: 'onLoadedmetadata',
    value: function onLoadedmetadata(e) {
      this.duration = e.target.duration;
      this.canControl = true;
    }
  }, {
    key: 'onPlaying',
    value: function onPlaying(e) {
      this.duration = e.target.duration;
    }
  }, {
    key: 'onPause',
    value: function onPause() {}
  }, {
    key: 'play',
    value: function play() {
      this.video.element.play();
      this.isPlaying = true;
      return this;
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.video && this.video.element.pause();
      this.isPlaying = false;
      return this;
    }
  }, {
    key: 'clickType',
    value: function clickType(e, vd, tvd) {
      if (this.index !== tvd.props.rel) {
        this.index = tvd.props.rel;
        this.video.element.src = this.datas[this.index].FileUrl;
        this.emit('switchTo', this.datas[this.index]);
      }
    }
  }, {
    key: 'clickStart',
    value: function clickStart(e) {
      this.play();
    }
  }, {
    key: 'clickScreen',
    value: function clickScreen() {
      var video = this.video.element;
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullscreen) {
        video.mozRequestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (video.webkitEnterFullScreen) {
        video.webkitEnterFullScreen();
      }
    }
  }, {
    key: 'touchStart',
    value: function touchStart(e) {
      e.preventDefault();
      if (this.canControl && e.touches.length === 1) {
        isStart = true;
        offsetX = $(this.ref.progress.element).offset().left;
        this.pause();
      }
    }
  }, {
    key: 'touchMove',
    value: function touchMove(e) {
      if (isStart && e.touches.length === 1) {
        e.preventDefault();
        var x = e.touches[0].pageX;
        var diff = x - offsetX;
        var width = $(this.ref.progress.element).width();
        diff = Math.max(0, diff);
        diff = Math.min(width, diff);
        var percent = diff / width;
        this.setBarPercent(percent);
        this.video.element.currentTime = this.currentTime = Math.floor(this.duration * percent);
      }
    }
  }, {
    key: 'touchEnd',
    value: function touchEnd(e) {
      isStart = false;
    }
  }, {
    key: 'clickProgress',
    value: function clickProgress(e) {
      if (this.canControl && e.target.className !== 'p') {
        var $progress = $(this.ref.progress.element);
        var left = $progress.offset().left;
        var x = e.pageX - left;
        var percent = x / $progress.width();
        var currentTime = Math.floor(this.duration * percent);
        this.video.element.currentTime = this.currentTime = currentTime;
      }
    }
  }, {
    key: 'setBarPercent',
    value: function setBarPercent(percent) {
      percent *= 100;
      $(this.ref.vol.element).css('width', percent + '%');
      $(this.ref.p.element).css('-webkit-transform', 'translateX(' + percent + '%)');
      $(this.ref.p.element).css('transform', 'translateX(' + percent + '%)');
    }
  }, {
    key: 'clickPlay',
    value: function clickPlay(e) {
      this.isPlaying ? this.pause() : this.play();
    }
  }, {
    key: 'clickLike',
    value: function clickLike(e, vd) {
      if (!$CONFIG.isLogin) {
        migi.eventBus.emit('NEED_LOGIN');
        return;
      }
      var self = this;
      var $vd = $(vd.element);
      if (!$vd.hasClass('loading')) {
        $vd.addClass('loading');
        var data = self.datas[self.index];
        _net2.default.postJSON('/api/works/likeWork', { workID: data.ItemID }, function (res) {
          if (res.success) {
            data.ISLike = res.data === 211;
            self.fnLike = null;
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $vd.removeClass('loading');
        }, function () {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $vd.removeClass('loading');
        });
      }
    }
  }, {
    key: 'clickFavor',
    value: function clickFavor(e, vd) {
      if (!$CONFIG.isLogin) {
        migi.eventBus.emit('NEED_LOGIN');
        return;
      }
      var self = this;
      var $vd = $(vd.element);
      var data = self.datas[self.index];
      if ($vd.hasClass('loading')) {
        //
      } else if ($vd.hasClass('has')) {
        _net2.default.postJSON('/api/works/unFavorWork', { workID: data.ItemID }, function (res) {
          if (res.success) {
            data.ISFavor = false;
            self.fnFavor = null;
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $vd.removeClass('loading');
        }, function () {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $vd.removeClass('loading');
        });
      } else {
        _net2.default.postJSON('/api/works/favorWork', { workID: data.ItemID }, function (res) {
          if (res.success) {
            data.ISFavor = true;
            self.fnFavor = null;
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $vd.removeClass('loading');
        }, function () {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $vd.removeClass('loading');
        });
      }
    }
  }, {
    key: 'clickDownload',
    value: function clickDownload(e) {
      if (!$CONFIG.isLogin) {
        e.preventDefault();
        migi.eventBus.emit('NEED_LOGIN');
      }
    }
  }, {
    key: 'clickShare',
    value: function clickShare() {
      migi.eventBus.emit('SHARE', location.href);
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", new migi.Obj(["datas", "index"], this, function () {
        return 'video' + (this.props.show ? '' : ' fn-hide') + (this.datas[this.index || 0].FileUrl ? '' : ' empty');
      })]], [migi.createVd("div", [["class", new migi.Obj("isPlaying", this, function () {
        return 'c' + (this.isPlaying ? ' playing' : '');
      })], ["ref", "c"]], [migi.createVd("b", [["class", new migi.Obj("isPlaying", this, function () {
        return 'start' + (this.isPlaying ? ' fn-hide' : '');
      })], ["onClick", new migi.Cb(this, this.clickStart)]])]), migi.createVd("div", [["class", "fn"], ["ref", "fn"]], [migi.createVd("div", [["class", "control"]], [migi.createVd("small", [["class", "time"]], [new migi.Obj("currentTime", this, function () {
        return _util2.default.formatTime(this.currentTime * 1000);
      }), " / ", new migi.Obj("duration", this, function () {
        return _util2.default.formatTime(this.duration * 1000);
      })]), migi.createVd("b", [["class", "full"], ["onClick", new migi.Cb(this, this.clickScreen)]])]), migi.createVd("div", [["class", "bar"]], [migi.createVd("b", [["class", new migi.Obj("isPlaying", this, function () {
        return 'play' + (this.isPlaying ? ' pause' : '');
      })], ["onClick", new migi.Cb(this, this.clickPlay)]]), migi.createVd("div", [["class", "progress"], ["ref", "progress"], ["onClick", new migi.Cb(this, this.clickProgress)]], [migi.createVd("b", [["class", "load"]]), migi.createVd("b", [["class", "vol"], ["ref", "vol"]]), migi.createVd("b", [["class", "p"], ["ref", "p"], ["onTouchStart", new migi.Cb(this, this.touchStart)], ["onTouchMove", new migi.Cb(this, this.touchMove)], ["onTouchEnd", new migi.Cb(this, this.touchEnd)]])])]), migi.createVd("ul", [["class", "btn"]], [migi.createVd("li", [["class", new migi.Obj(["datas", "index", "fnLike"], this, function () {
        return 'like' + (this.datas[this.index].ISLike || this.fnLike ? ' has' : '');
      })], ["onClick", new migi.Cb(this, this.clickLike)]]), migi.createVd("li", [["class", new migi.Obj(["datas", "index", "fnFavor"], this, function () {
        return 'favor' + (this.datas[this.index].ISFavor || this.fnFavor ? ' has' : '');
      })], ["onClick", new migi.Cb(this, this.clickFavor)]]), migi.createVd("li", [["class", "download"]], [migi.createVd("a", [["href", new migi.Obj(["datas", "index"], this, function () {
        return this.datas[this.index].FileUrl;
      })], ["download", new migi.Obj(["datas", "index"], this, function () {
        return (this.datas[this.index].ItemName || '') + (this.datas[this.index].FileUrl ? /\.\w+$/.exec(this.datas[this.index].FileUrl)[0] || '' : '');
      })], ["onClick", new migi.Cb(this, this.clickDownload)]])]), migi.createVd("li", [["class", "share"], ["onClick", new migi.Cb(this, this.clickShare)]])])])]);
    }
  }, {
    key: 'datas',
    set: function set(v) {
      this.__setBind("datas", v);this.__data("datas");
    },
    get: function get() {
      if (this.__initBind("datas")) this.__setBind("datas", []);return this.__getBind("datas");
    }
  }, {
    key: 'index',
    set: function set(v) {
      this.__setBind("index", v);this.__data("index");
    },
    get: function get() {
      if (this.__initBind("index")) this.__setBind("index", 0);return this.__getBind("index");
    }
  }, {
    key: 'isPlaying',
    set: function set(v) {
      this.__setBind("isPlaying", v);this.__data("isPlaying");
    },
    get: function get() {
      return this.__getBind("isPlaying");
    }
  }, {
    key: 'duration',
    set: function set(v) {
      this.__setBind("duration", v);this.__data("duration");
    },
    get: function get() {
      return this.__getBind("duration");
    }
  }, {
    key: 'canControl',
    set: function set(v) {
      this.__setBind("canControl", v);this.__data("canControl");
    },
    get: function get() {
      return this.__getBind("canControl");
    }
  }, {
    key: 'fnFavor',
    set: function set(v) {
      this.__setBind("fnFavor", v);this.__data("fnFavor");
    },
    get: function get() {
      return this.__getBind("fnFavor");
    }
  }, {
    key: 'fnLike',
    set: function set(v) {
      this.__setBind("fnLike", v);this.__data("fnLike");
    },
    get: function get() {
      return this.__getBind("fnLike");
    }
  }, {
    key: 'currentTime',
    get: function get() {
      return this._currentTime || 0;
    },
    set: function set(v) {
      this._currentTime = v;
      ;this.__array("currentTime", v);this.__data("currentTime");
    }
  }]);

  return Video;
}(migi.Component);

migi.name(Video, "Video");exports.default = Video;

/***/ }),
/* 38 */
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

var skip = 0;
var take = 12;
var sortType = 0;
var list = [];
var index = 0;
var tagName = '';
var ajax = void 0;

var PhotoAlbum = function (_migi$Component) {
  _inherits(PhotoAlbum, _migi$Component);

  function PhotoAlbum() {
    var _ref;

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    _classCallCheck(this, PhotoAlbum);

    var _this = _possibleConstructorReturn(this, (_ref = PhotoAlbum.__proto__ || Object.getPrototypeOf(PhotoAlbum)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.on(migi.Event.DOM, function () {
      var $window = $(window);
      self.load($window);
      $window.on('scroll', function () {
        self.checkMore($window);
      });

      var $c = $(self.ref.c.element);
      $c.on('click', '.like', function () {
        var $b = $(this);
        if ($b.hasClass('loading')) {
          return;
        }
        $b.addClass('loading');
        var id = $b.attr('itemID');
        _net2.default.postJSON('/api/works/likeWork', { workID: id }, function (res) {
          if (res.success) {
            if (res.data === 211) {
              $b.addClass('has');
            } else {
              $b.removeClass('has');
            }
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $b.removeClass('loading');
        }, function (res) {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $b.removeClass('loading');
        });
      });
      $c.on('click', '.favor', function () {
        var $b = $(this);
        if ($b.hasClass('loading')) {
          return;
        }
        $b.addClass('loading');
        var id = $b.attr('itemID');
        var url = $b.hasClass('has') ? '/api/works/unFavorWork' : '/api/works/favorWork';
        _net2.default.postJSON(url, { workID: id }, function (res) {
          if (res.success) {
            if (url === '/api/works/favorWork') {
              $b.addClass('has');
            } else {
              $b.removeClass('has');
            }
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $b.removeClass('loading');
        }, function (res) {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $b.removeClass('loading');
        });
      });
      $c.on('click', 'li', function (e) {
        var $li = $(this);
        if (e.target.nodeName === 'LI' || e.target.nodeName === 'IMG') {
          var _index = $li.attr('rel');
          migi.eventBus.emit('choosePic', list, _index);
        }
      });

      migi.eventBus.on('photoLike', function (data) {
        var $li = $('#photo_' + data.ItemID);
        if (data.ISLike) {
          $li.find('.like').addClass('has');
        } else {
          $li.find('.like').removeClass('has');
        }
      });
      migi.eventBus.on('photoFavor', function (data) {
        var $li = $('#photo_' + data.ItemID);
        if (data.ISLike) {
          $li.find('.favor').addClass('has');
        } else {
          $li.find('.favor').removeClass('has');
        }
      });
    });
    return _this;
  }

  _createClass(PhotoAlbum, [{
    key: 'load',
    value: function load($window) {
      var self = this;
      if (self.loading) {
        return;
      }
      self.loading = true;
      var $l1 = $(self.ref.l1.element);
      var $l2 = $(self.ref.l2.element);
      function addWaterFall(li) {
        var $min = $l1;
        if ($l2.height() < $min.height()) {
          $min = $l2;
        }
        li.appendTo($min[0]);
      }
      self.loadImg(function (data) {
        var length = data.data.length;
        var i = 0;
        // 先把有高宽的直接加入流中
        for (; i < length; i++) {
          var item = data.data[i];
          if (item.Width && item.Height) {
            var li = self.genItem(item);
            addWaterFall(li);
          } else {
            break;
          }
        }
        //剩下的先获取高度再加入流
        var num = length - i;
        var count = 0;
        var j = i;
        if (num === 0) {
          self.loading = false;
          if ($(document.body).height() <= $window.height() && !self.loadEnd) {
            self.load($window);
          }
        }
        for (; i < length; i++) {
          var _item = data.data[i];
          self.loadImgSize(_item, function () {
            count++;
            if (count === num) {
              for (; j < length; j++) {
                var _item2 = data.data[j];
                var _li = self.genItem(_item2);
                addWaterFall(_li);
              }
              self.loading = false;
              if ($(document.body).height() <= $window.height() && !self.loadEnd) {
                self.load($window);
              }
            }
          });
        }
      });
    }
  }, {
    key: 'checkMore',
    value: function checkMore($window) {
      var self = this;
      var WIN_HEIGHT = $window.height();
      var HEIGHT = $(document.body).height();
      var bool = void 0;
      bool = $window.scrollTop() + WIN_HEIGHT + 30 > HEIGHT;
      if (!self.loading && !self.loadEnd && bool) {
        self.load($window);
      }
    }
  }, {
    key: 'loadImg',
    value: function loadImg(cb) {
      var self = this;
      if (ajax) {
        ajax.abort();
      }
      ajax = _net2.default.postJSON('/api/works/photoList', { worksID: this.props.worksID, skip: skip, take: take, sortType: sortType, tagName: tagName }, function (res) {
        if (res.success) {
          var data = res.data;
          skip += take;
          if (skip >= data.Size) {
            self.loadEnd = true;
          }
          cb(data);
        } else {
          alert(res.message || _util2.default.ERROR_MESSAGE);
        }
      }, function (res) {
        alert(res.message || _util2.default.ERROR_MESSAGE);
      });
    }
  }, {
    key: 'genItem',
    value: function genItem(data) {
      list.push(data);
      if (data.Width <= 144) {
        return migi.createVd("li", [["rel", index++], ["id", 'photo_' + data.ItemID]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img288__80(data.FileUrl)) || '//zhuanquan.xin/img/blank.png'], ["height", data.Height]]), migi.createVd("b", [["class", 'like' + (data.ISLike ? ' has' : '')], ["itemID", data.ItemID]]), migi.createVd("b", [["class", 'favor' + (data.ISFavor ? ' has' : '')], ["itemID", data.ItemID]])]);
      }
      var height = data.Height * 144 / data.Width;
      return migi.createVd("li", [["rel", index++], ["id", 'photo_' + data.ItemID]], [migi.createVd("img", [["src", _util2.default.autoSsl(_util2.default.img288__80(data.FileUrl)) || '//zhuanquan.xin/img/blank.png'], ["height", height]]), migi.createVd("b", [["class", 'like' + (data.ISLike ? ' has' : '')], ["itemID", data.ItemID]]), migi.createVd("b", [["class", 'favor' + (data.ISFavor ? ' has' : '')], ["itemID", data.ItemID]])]);
    }
  }, {
    key: 'loadImgSize',
    value: function loadImgSize(data, cb) {
      var img = document.createElement('img');
      img.className = 'temp';
      img.src = _util2.default.autoSsl(_util2.default.img__60(data.FileUrl));
      img.onload = function () {
        data.Width = img.width;
        data.Height = img.height;
        cb();
        document.body.removeChild(img);
      };
      img.onerror = function () {
        data.FileUrl = '//zhuanquan.xin/img/blank.png';
        data.Width = 1;
        data.Height = 100;
        cb();
        document.body.removeChild(img);
      };
      document.body.appendChild(img);
    }
  }, {
    key: 'clear',
    value: function clear() {
      var self = this;
      var $l1 = $(self.ref.l1.element);
      var $l2 = $(self.ref.l2.element);
      $l1.html('');
      $l2.html('');
      skip = 0;
      self.loadEnd = false;
    }
  }, {
    key: 'switchType',
    value: function switchType(e, vd) {
      var $ul = $(vd.element);
      $ul.toggleClass('alt');
      $ul.find('li').toggleClass('cur');
      var rel = $ul.find('cur').attr('rel');
      sortType = rel;
      skip = 0;
      this.clear();
      this.load($(window));
    }
  }, {
    key: 'switchType2',
    value: function switchType2(e, vd, tvd) {
      var $li = $(tvd.element);
      if (!$li.hasClass('cur')) {
        $(vd.element).find('.cur').removeClass('cur');
        $li.addClass('cur');
        tagName = tvd.props.rel;
        this.clear();
        this.load($(window));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "mod mod-photoalbum"]], [migi.createVd("div", [["class", "fn"]], [migi.createVd("ul", [["class", "type fn-clear"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.switchType2)]]]], [migi.createVd("li", [["class", "cur"], ["rel", ""]], ["全部"]), (this.props.labelList || []).map(function (item) {
        return migi.createVd("li", [["rel", item.Tag_Name]], [item.Tag_Name]);
      })]), migi.createVd("ul", [["class", "type2 fn-clear"], ["onClick", new migi.Cb(this, this.switchType)]], [migi.createVd("li", [["class", "cur"], ["rel", "0"]], ["最新"]), migi.createVd("li", [["rel", "1"]], ["最热"])])]), migi.createVd("div", [["class", "c"], ["ref", "c"]], [migi.createVd("div", [], [migi.createVd("ul", [["ref", "l1"]])]), migi.createVd("div", [], [migi.createVd("ul", [["ref", "l2"]])])])]);
    }
  }, {
    key: 'loading',
    set: function set(v) {
      this.__setBind("loading", v);this.__data("loading");
    },
    get: function get() {
      return this.__getBind("loading");
    }
  }, {
    key: 'loadEnd',
    set: function set(v) {
      this.__setBind("loadEnd", v);this.__data("loadEnd");
    },
    get: function get() {
      return this.__getBind("loadEnd");
    }
  }]);

  return PhotoAlbum;
}(migi.Component);

migi.name(PhotoAlbum, "PhotoAlbum");exports.default = PhotoAlbum;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

var _Comment = __webpack_require__(4);

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var skip = 10;
var take = 10;
var sortType = 0;
var myComment = 0;
var currentCount = 0;
var ajax = void 0;
var loadEnd = void 0;

var WorkComment = function (_migi$Component) {
  _inherits(WorkComment, _migi$Component);

  function WorkComment() {
    var _ref;

    _classCallCheck(this, WorkComment);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = WorkComment.__proto__ || Object.getPrototypeOf(WorkComment)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.worksID = self.props.worksID;
    self.workID = self.props.workID;
    self.on(migi.Event.DOM, function () {
      var $window = $(window);
      $window.on('scroll', function () {
        self.checkMore($window);
      });
    });
    return _this;
  }

  _createClass(WorkComment, [{
    key: 'checkMore',
    value: function checkMore($window) {
      var self = this;
      var WIN_HEIGHT = $window.height();
      var HEIGHT = $(document.body).height();
      var bool = void 0;
      bool = !$(self.element).hasClass('fn-hide') && $window.scrollTop() + WIN_HEIGHT + 30 > HEIGHT;
      if (!self.loading && !self.loadEnd && bool) {
        self.load();
      }
    }
  }, {
    key: 'load',
    value: function load() {
      var self = this;
      var comment = self.ref.comment;
      if (ajax) {
        ajax.abort();
      }
      self.loading = true;
      comment.message = '正在加载...';
      ajax = _net2.default.postJSON('/api/works/commentList', { worksID: self.worksID, skip: skip, take: take, sortType: sortType, myComment: myComment, currentCount: currentCount }, function (res) {
        if (res.success) {
          var data = res.data;
          // currentCount = data.Size;
          if (data.data.length) {
            comment.message = '';
            comment.appendData(res.data.data);
          } else {
            comment.message = skip === 0 ? '暂无评论' : '已经到底了';
            self.loadEnd = true;
          }
          skip += take;
        } else {
          if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          }
          comment.message = res.message || _util2.default.ERROR_MESSAGE;
        }
        self.loading = false;
      }, function (res) {
        comment.message = res.message || _util2.default.ERROR_MESSAGE;
        self.loading = false;
      });
    }
  }, {
    key: 'switchType',
    value: function switchType(e, vd) {
      var $ul = $(vd.element);
      $ul.toggleClass('alt');
      $ul.find('li').toggleClass('cur');
      var rel = $ul.find('.cur').attr('rel');
      currentCount = 0;
      sortType = rel;
      skip = 0;
      if (ajax) {
        ajax.abort();
      }
      loadEnd = false;
      this.loading = false;
      this.ref.comment.clearData();
      this.load();
    }
  }, {
    key: 'switchType2',
    value: function switchType2(e, vd, tvd) {
      var $li = $(tvd.element);
      if (!$li.hasClass('cur')) {
        var $ul = $(vd.element);
        $ul.toggleClass('alt');
        $ul.find('li').toggleClass('cur');
        var rel = $ul.find('.cur').attr('rel');
        currentCount = 0;
        myComment = rel;
        skip = 0;
        if (ajax) {
          ajax.abort();
        }
        loadEnd = false;
        this.loading = false;
        this.ref.comment.clearData();
        this.load();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "mod mod-comment fn-hide"]], [migi.createVd("div", [["class", "fn"]], [migi.createVd("ul", [["class", "type fn-clear"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.switchType2)]]]], [migi.createVd("li", [["class", "cur"], ["rel", "0"]], ["全部", migi.createVd("small", [], [this.props.commentData.Size])]), this.props.isLogin ? migi.createVd("li", [["rel", "1"]], ["我的"]) : '']), migi.createVd("ul", [["class", "type2 fn-clear"], ["onClick", [[{ "li": { "_v": true } }, new migi.Cb(this, this.switchType)]]]], [migi.createVd("li", [["class", "cur"], ["rel", "0"]], ["最新"]), migi.createVd("li", [["rel", "1"]], ["最热"])])]), migi.createCp(_Comment2.default, [["ref", "comment"], ["zanUrl", "/api/works/likeComment"], ["subUrl", "/api/works/subCommentList"], ["delUrl", "/api/works/delComment"], ["data", this.props.commentData.data]])]);
    }
  }, {
    key: 'loading',
    set: function set(v) {
      this.__setBind("loading", v);this.__data("loading");
    },
    get: function get() {
      return this.__getBind("loading");
    }
  }, {
    key: 'loadEnd',
    set: function set(v) {
      this.__setBind("loadEnd", v);this.__data("loadEnd");
    },
    get: function get() {
      return this.__getBind("loadEnd");
    }
  }, {
    key: 'worksID',
    set: function set(v) {
      this.__setBind("worksID", v);this.__data("worksID");
    },
    get: function get() {
      return this.__getBind("worksID");
    }
  }, {
    key: 'workID',
    set: function set(v) {
      this.__setBind("workID", v);this.__data("workID");
    },
    get: function get() {
      return this.__getBind("workID");
    }
  }, {
    key: 'rootID',
    set: function set(v) {
      this.__setBind("rootID", v);this.__data("rootID");
    },
    get: function get() {
      if (this.__initBind("rootID")) this.__setBind("rootID", -1);return this.__getBind("rootID");
    }
  }, {
    key: 'parentID',
    set: function set(v) {
      this.__setBind("parentID", v);this.__data("parentID");
    },
    get: function get() {
      if (this.__initBind("parentID")) this.__setBind("parentID", -1);return this.__getBind("parentID");
    }
  }, {
    key: 'barrageTime',
    set: function set(v) {
      this.__setBind("barrageTime", v);this.__data("barrageTime");
    },
    get: function get() {
      if (this.__initBind("barrageTime")) this.__setBind("barrageTime", 0);return this.__getBind("barrageTime");
    }
  }]);

  return WorkComment;
}(migi.Component);

migi.name(WorkComment, "WorkComment");exports.default = WorkComment;

/***/ }),
/* 40 */
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

var isStart = void 0;
var offsetX = void 0;

var MusicAlbum = function (_migi$Component) {
  _inherits(MusicAlbum, _migi$Component);

  function MusicAlbum() {
    var _ref;

    _classCallCheck(this, MusicAlbum);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MusicAlbum.__proto__ || Object.getPrototypeOf(MusicAlbum)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    if (self.props.workList && self.props.workList.length) {
      if (self.props.workID) {
        self.props.workList.forEach(function (item, i) {
          if (self.props.workID === item.ItemID.toString()) {
            self.setItem(self.props.workList[i]);
          }
        });
      } else {
        self.setItem(self.props.workList[0]);
      }
      self.on(migi.Event.DOM, function () {
        self.addOrAltMedia();
      });
      migi.eventBus.on('chooseMusic', function (item) {
        self.av.element.currentTime = self.currentTime = 0;
        self.setItem(item);
        self.addOrAltMedia();
        history.replaceState(null, '', '/works/' + self.props.worksID + '/' + self.workID);
      });
    }
    return _this;
  }

  _createClass(MusicAlbum, [{
    key: 'show',
    value: function show() {
      $(this.element).removeClass('fn-hide hidden');
    }
  }, {
    key: 'hide',
    value: function hide() {
      $(this.element).addClass('fn-hide');
    }
  }, {
    key: 'setItem',
    value: function setItem(item) {
      var self = this;
      self.item = item;
      self.type = item.ItemType;
      self.workID = item.ItemID;
      self.sname = item.ItemName;
      self.url = item.FileUrl;
      self.playNum = item.PlayHis;
      self.formatLyrics = item.formatLyrics || {};
      self.like = item.ISLike;
      self.favor = item.ISFavor;
      self.cover = item.ItemCoverPic;
    }
  }, {
    key: 'addOrAltMedia',
    value: function addOrAltMedia() {
      var self = this;
      var isPlaying = self.isPlaying;
      self.pause();
      switch (self.type) {
        case 1111:
        case 1113:
          if (!self.audio) {
            self.audio = migi.createVd("audio", [["src", self.url], ["onTimeupdate", self.onTimeupdate.bind(self)], ["onLoadedmetadata", self.onLoadedmetadata.bind(self)], ["onPlaying", self.onPlaying.bind(self)], ["onPause", self.onPause.bind(self)], ["onProgress", self.onProgress.bind(self)], ["preload", "meta"]], ["\n\
            your browser does not support the audio tag\n\
          "]);
            self.audio.appendTo(self.ref.c.element);
          } else {
            self.audio.element.src = self.url;
          }
          self.av = self.audio;
          break;
        case 2110:
          if (!self.video) {
            self.video = migi.createVd("video", [["ref", "video"], ["src", self.url], ["onClick", self.clickPlay.bind(self)], ["onTimeupdate", self.onTimeupdate.bind(self)], ["onLoadedmetadata", self.onLoadedmetadata.bind(self)], ["onPause", self.onPause.bind(self)], ["onPlaying", self.onPlaying.bind(self)], ["preload", "meta"], ["playsinline", "true"], ["webkit-playsinline", "true"]], ["\n\
            your browser does not support the video tag\n\
          "]);
            self.video.appendTo(self.ref.c.element);
          } else {
            self.video.element.src = self.url;
          }
          self.av = self.video;
          break;
      }
      self.volume = self.volume;
      self.av.element.currentTime = self.currentTime = 0;
      if (isPlaying) {
        self.play();
      }
    }
  }, {
    key: 'onTimeupdate',
    value: function onTimeupdate(e) {
      var self = this;
      var currentTime = self.currentTime = e.target.currentTime;
      var formatLyrics = self.formatLyrics || {};
      var formatLyricsData = formatLyrics.data;
      if (formatLyrics.is && formatLyricsData.length) {
        var tempIndex = this.lyricsIndex;
        for (var i = 0, len = formatLyricsData.length; i < len; i++) {
          if (currentTime * 1000 >= formatLyricsData[i].timestamp) {
            tempIndex = i;
          } else {
            break;
          }
        }
        if (tempIndex !== this.lyricsIndex) {
          this.lyricsIndex = tempIndex;
        }
      }
      var percent = currentTime / this.duration;
      this.setBarPercent(percent);
    }
  }, {
    key: 'onProgress',
    value: function onProgress(e) {}
  }, {
    key: 'onLoadedmetadata',
    value: function onLoadedmetadata(e) {
      this.duration = e.target.duration;
      this.canControl = true;
    }
  }, {
    key: 'onPlaying',
    value: function onPlaying(e) {
      this.duration = e.target.duration;
    }
  }, {
    key: 'onPause',
    value: function onPause(e) {}
  }, {
    key: 'play',
    value: function play() {
      this.av && this.av.element.play();
      this.isPlaying = true;
      this.hasStart = true;
      migi.eventBus.emit('play');
      return this;
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.av && this.av.element.pause();
      this.isPlaying = false;
      migi.eventBus.emit('pause');
      return this;
    }
  }, {
    key: 'altLyrics',
    value: function altLyrics() {
      this.showLyricsMode = !this.showLyricsMode;
    }
  }, {
    key: 'clickStart',
    value: function clickStart(e) {
      this.play();
    }
  }, {
    key: 'touchStart',
    value: function touchStart(e) {
      e.preventDefault();
      if (this.canControl && e.touches.length === 1) {
        isStart = true;
        offsetX = $(this.ref.progress.element).offset().left;
        this.pause();
      }
    }
  }, {
    key: 'touchMove',
    value: function touchMove(e) {
      if (isStart && e.touches.length === 1) {
        e.preventDefault();
        var x = e.touches[0].pageX;
        var diff = x - offsetX;
        var width = $(this.ref.progress.element).width();
        diff = Math.max(0, diff);
        diff = Math.min(width, diff);
        var percent = diff / width;
        this.setBarPercent(percent);
        this.video.element.currentTime = this.currentTime = Math.floor(this.duration * percent);
      }
    }
  }, {
    key: 'touchEnd',
    value: function touchEnd(e) {
      isStart = false;
    }
  }, {
    key: 'clickProgress',
    value: function clickProgress(e) {
      if (this.canControl && e.target.className !== 'p') {
        var $progress = $(this.ref.progress.element);
        var left = $progress.offset().left;
        var x = e.pageX - left;
        var percent = x / $progress.width();
        var currentTime = Math.floor(this.duration * percent);
        this.av.element.currentTime = this.currentTime = currentTime;
      }
    }
  }, {
    key: 'setBarPercent',
    value: function setBarPercent(percent) {
      percent *= 100;
      $(this.ref.vol.element).css('width', percent + '%');
      $(this.ref.p.element).css('-moz-transform', 'translateX(' + percent + '%)');
      $(this.ref.p.element).css('-webkit-transform', 'translateX(' + percent + '%)');
      $(this.ref.p.element).css('transform', 'translateX(' + percent + '%)');
    }
  }, {
    key: 'clickPlay',
    value: function clickPlay(e) {
      this.isPlaying ? this.pause() : this.play();
    }
  }, {
    key: 'clickLike',
    value: function clickLike(e, vd) {
      if (!$CONFIG.isLogin) {
        migi.eventBus.emit('NEED_LOGIN');
        return;
      }
      var self = this;
      var $vd = $(vd.element);
      if (!$vd.hasClass('loading')) {
        $vd.addClass('loading');
        var data = self.item;
        _net2.default.postJSON('/api/works/likeWork', { workID: self.workID }, function (res) {
          if (res.success) {
            data.ISLike = self.like = res.data === 211;
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $vd.removeClass('loading');
        }, function () {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $vd.removeClass('loading');
        });
      }
    }
  }, {
    key: 'clickFavor',
    value: function clickFavor(e, vd) {
      if (!$CONFIG.isLogin) {
        migi.eventBus.emit('NEED_LOGIN');
        return;
      }
      var self = this;
      var $vd = $(vd.element);
      var data = self.item;
      if ($vd.hasClass('loading')) {
        //
      } else if ($vd.hasClass('has')) {
        _net2.default.postJSON('/api/works/unFavorWork', { workID: self.workID }, function (res) {
          if (res.success) {
            data.ISFavor = self.favor = false;
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $vd.removeClass('loading');
        }, function () {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $vd.removeClass('loading');
        });
      } else {
        _net2.default.postJSON('/api/works/favorWork', { workID: self.workID }, function (res) {
          if (res.success) {
            data.ISFavor = self.favor = true;
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $vd.removeClass('loading');
        }, function () {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $vd.removeClass('loading');
        });
      }
    }
  }, {
    key: 'clickDownload',
    value: function clickDownload(e) {
      if (!$CONFIG.isLogin) {
        e.preventDefault();
        migi.eventBus.emit('NEED_LOGIN');
      }
    }
  }, {
    key: 'clickShare',
    value: function clickShare() {
      migi.eventBus.emit('SHARE', location.href);
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "mod mod-musicalbum"], ["style", 'background-image:url("' + (this.props.cover || '//zhuanquan.xin/img/blank.png') + '")']], [migi.createVd("div", [["class", "cover"], ["ref", "cover"], ["style", new migi.Obj("cover", this, function () {
        return this.cover ? 'background-image:url("' + this.cover + '")' : '';
      })]]), migi.createVd("div", [["class", new migi.Obj(["isPlaying", "type"], this, function () {
        return 'c' + (this.isPlaying ? ' playing' : '') + (this.type === 2110 ? ' tvideo' : '');
      })], ["ref", "c"]], [migi.createVd("div", [["class", new migi.Obj("hasStart", this, function () {
        return 'lyrics' + (this.hasStart ? '' : ' fn-hide');
      })], ["ref", "lyrics"]], [migi.createVd("div", [["class", new migi.Obj(["showLyricsMode", "formatLyrics"], this, function () {
        return 'roll' + (!this.showLyricsMode && this.formatLyrics.data ? '' : ' fn-hide');
      })]], [migi.createVd("div", [["class", "c"], ["ref", "lyricsRoll"], ["style", new migi.Obj("lyricsIndex", this, function () {
        return '-moz-transform:translateX(' + this.lyricsIndex * 20 + 'px);-webkit-transform:translateY(-' + this.lyricsIndex * 20 + 'px);transform:translateY(-' + this.lyricsIndex * 20 + 'px)';
      })]], [new migi.Obj("formatLyrics", this, function () {
        return (this.formatLyrics.data || []).map(function (item) {
          return migi.createVd("pre", [], [item.txt || ' ']);
        });
      })])]), migi.createVd("div", [["class", new migi.Obj(["showLyricsMode", "formatLyrics"], this, function () {
        return 'line' + (this.showLyricsMode && this.formatLyrics.txt ? '' : ' fn-hide');
      })]], [migi.createVd("pre", [["style", new migi.Obj("lyricsIndex", this, function () {
        return '-moz-transform:translateX(' + this.lyricsIndex * 20 + 'px);-webkit-transform:translateY(-' + this.lyricsIndex * 20 + 'px);transform:translateY(-' + this.lyricsIndex * 20 + 'px)';
      })]], [new migi.Obj("formatLyrics", this, function () {
        return this.formatLyrics.txt;
      })])])]), migi.createVd("b", [["class", new migi.Obj(["isPlaying", "url"], this, function () {
        return 'start' + (this.isPlaying || !this.url ? ' fn-hide' : '');
      })], ["onClick", new migi.Cb(this, this.clickStart)]])]), migi.createVd("div", [["class", new migi.Obj(["showFn", "url"], this, function () {
        return 'fn' + (this.showFn && this.url ? '' : ' hidden');
      })], ["ref", "fn"]], [migi.createVd("div", [["class", "control"]], [migi.createVd("small", [["class", "time"]], [new migi.Obj("currentTime", this, function () {
        return _util2.default.formatTime(this.currentTime * 1000);
      }), " / ", new migi.Obj("duration", this, function () {
        return _util2.default.formatTime(this.duration * 1000);
      })]), migi.createVd("b", [["class", "full"], ["onClick", new migi.Cb(this, this.clickScreen)]])]), migi.createVd("div", [["class", "bar"]], [migi.createVd("b", [["class", new migi.Obj("isPlaying", this, function () {
        return 'play' + (this.isPlaying ? ' pause' : '');
      })], ["onClick", new migi.Cb(this, this.clickPlay)]]), migi.createVd("div", [["class", "progress"], ["ref", "progress"], ["onClick", new migi.Cb(this, this.clickProgress)]], [migi.createVd("b", [["class", "load"]]), migi.createVd("b", [["class", "vol"], ["ref", "vol"]]), migi.createVd("b", [["class", "p"], ["ref", "p"], ["onTouchStart", new migi.Cb(this, this.touchStart)], ["onTouchMove", new migi.Cb(this, this.touchMove)], ["onTouchEnd", new migi.Cb(this, this.touchEnd)]])])]), migi.createVd("ul", [["class", "btn"]], [migi.createVd("li", [["class", new migi.Obj("like", this, function () {
        return 'like' + (this.like ? ' has' : '');
      })], ["onClick", new migi.Cb(this, this.clickLike)]]), migi.createVd("li", [["class", new migi.Obj("favor", this, function () {
        return 'favor' + (this.favor ? ' has' : '');
      })], ["onClick", new migi.Cb(this, this.clickFavor)]]), migi.createVd("li", [["class", "download"]], [migi.createVd("a", [["href", new migi.Obj("url", this, function () {
        return this.url;
      })], ["download", new migi.Obj(["sname", "url"], this, function () {
        return this.sname + (this.url ? /\.\w+$/.exec(this.url)[0] || '' : '');
      })], ["onClick", new migi.Cb(this, this.clickDownload)]])]), migi.createVd("li", [["class", "share"], ["onClick", new migi.Cb(this, this.clickShare)]])])])]);
    }
  }, {
    key: 'item',
    set: function set(v) {
      this.__setBind("item", v);this.__data("item");
    },
    get: function get() {
      return this.__getBind("item");
    }
  }, {
    key: 'type',
    set: function set(v) {
      this.__setBind("type", v);this.__data("type");
    },
    get: function get() {
      return this.__getBind("type");
    }
  }, {
    key: 'workID',
    set: function set(v) {
      this.__setBind("workID", v);this.__data("workID");
    },
    get: function get() {
      return this.__getBind("workID");
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
    key: 'url',
    set: function set(v) {
      this.__setBind("url", v);this.__data("url");
    },
    get: function get() {
      return this.__getBind("url");
    }
  }, {
    key: 'playNum',
    set: function set(v) {
      this.__setBind("playNum", v);this.__data("playNum");
    },
    get: function get() {
      return this.__getBind("playNum");
    }
  }, {
    key: 'isPlaying',
    set: function set(v) {
      this.__setBind("isPlaying", v);this.__data("isPlaying");
    },
    get: function get() {
      return this.__getBind("isPlaying");
    }
  }, {
    key: 'hasStart',
    set: function set(v) {
      this.__setBind("hasStart", v);this.__data("hasStart");
    },
    get: function get() {
      return this.__getBind("hasStart");
    }
  }, {
    key: 'formatLyrics',
    set: function set(v) {
      this.__setBind("formatLyrics", v);this.__data("formatLyrics");
    },
    get: function get() {
      if (this.__initBind("formatLyrics")) this.__setBind("formatLyrics", {});return this.__getBind("formatLyrics");
    }
  }, {
    key: 'showLyricsMode',
    set: function set(v) {
      this.__setBind("showLyricsMode", v);this.__data("showLyricsMode");
    },
    get: function get() {
      return this.__getBind("showLyricsMode");
    }
  }, {
    key: 'lyricsIndex',
    set: function set(v) {
      this.__setBind("lyricsIndex", v);this.__data("lyricsIndex");
    },
    get: function get() {
      if (this.__initBind("lyricsIndex")) this.__setBind("lyricsIndex", 0);return this.__getBind("lyricsIndex");
    }
  }, {
    key: 'duration',
    set: function set(v) {
      this.__setBind("duration", v);this.__data("duration");
    },
    get: function get() {
      return this.__getBind("duration");
    }
  }, {
    key: 'canControl',
    set: function set(v) {
      this.__setBind("canControl", v);this.__data("canControl");
    },
    get: function get() {
      return this.__getBind("canControl");
    }
  }, {
    key: 'muted',
    set: function set(v) {
      this.__setBind("muted", v);this.__data("muted");
    },
    get: function get() {
      return this.__getBind("muted");
    }
  }, {
    key: 'like',
    set: function set(v) {
      this.__setBind("like", v);this.__data("like");
    },
    get: function get() {
      return this.__getBind("like");
    }
  }, {
    key: 'favor',
    set: function set(v) {
      this.__setBind("favor", v);this.__data("favor");
    },
    get: function get() {
      return this.__getBind("favor");
    }
  }, {
    key: 'cover',
    set: function set(v) {
      this.__setBind("cover", v);this.__data("cover");
    },
    get: function get() {
      return this.__getBind("cover");
    }
  }, {
    key: 'showFn',
    set: function set(v) {
      this.__setBind("showFn", v);this.__data("showFn");
    },
    get: function get() {
      if (this.__initBind("showFn")) this.__setBind("showFn", true);return this.__getBind("showFn");
    }
  }, {
    key: 'currentTime',
    get: function get() {
      return this._currentTime || 0;
    },
    set: function set(v) {
      this._currentTime = v;
      ;this.__array("currentTime", v);this.__data("currentTime");
    }
  }]);

  return MusicAlbum;
}(migi.Component);

migi.name(MusicAlbum, "MusicAlbum");exports.default = MusicAlbum;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _net = __webpack_require__(1);

var _net2 = _interopRequireDefault(_net);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var list = [];
var index = 0;

var ImageView = function (_migi$Component) {
  _inherits(ImageView, _migi$Component);

  function ImageView() {
    var _ref;

    _classCallCheck(this, ImageView);

    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ImageView.__proto__ || Object.getPrototypeOf(ImageView)).call.apply(_ref, [this].concat(data)));

    var self = _this;
    self.on(migi.Event.DOM, function () {
      var $window = $(window);
      migi.eventBus.on('choosePic', function (l, i) {
        self.show();
        self.top = $window.scrollTop();
        list = l;
        index = i;
        self.data = list[index];
      });
    });
    return _this;
  }

  _createClass(ImageView, [{
    key: 'show',
    value: function show() {
      $(this.element).removeClass('fn-hide');
      var parent = window.parent;
      if (parent !== window && parent.upZIndex) {
        parent.upZIndex();
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      $(this.element).addClass('fn-hide');
      var parent = window.parent;
      if (parent !== window && parent.downZIndex) {
        parent.downZIndex();
      }
    }
  }, {
    key: 'right',
    value: function right() {
      if (index) {
        var self = this;
        self.data = list[--index];
      }
    }
  }, {
    key: 'left',
    value: function left() {
      if (index < list.length - 1) {
        var self = this;
        self.data = list[++index];
      }
    }
  }, {
    key: 'clickPrev',
    value: function clickPrev() {
      if (index) {
        var self = this;
        self.data = list[--index];
      }
    }
  }, {
    key: 'clickNext',
    value: function clickNext() {
      if (index < list.length - 1) {
        var self = this;
        self.data = list[++index];
      }
    }
  }, {
    key: 'clickClose',
    value: function clickClose() {
      this.hide();
    }
  }, {
    key: 'clickLike',
    value: function clickLike(e, vd) {
      if (!$CONFIG.isLogin) {
        migi.eventBus.emit('NEED_LOGIN');
        return;
      }
      var self = this;
      var $vd = $(vd.element);
      if (!$vd.hasClass('loading')) {
        $vd.addClass('loading');
        var data = self.data;
        _net2.default.postJSON('/api/works/likeWork', { workID: data.ItemID }, function (res) {
          if (res.success) {
            data.ISLike = res.data === 211;
            self.fnLike = null;
            migi.eventBus.emit('photoLike', data);
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $vd.removeClass('loading');
        }, function () {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $vd.removeClass('loading');
        });
      }
    }
  }, {
    key: 'clickFavor',
    value: function clickFavor(e, vd) {
      if (!$CONFIG.isLogin) {
        migi.eventBus.emit('NEED_LOGIN');
        return;
      }
      var self = this;
      var $vd = $(vd.element);
      var data = self.data;
      if ($vd.hasClass('loading')) {
        //
      } else if ($vd.hasClass('has')) {
        _net2.default.postJSON('/api/works/unFavorWork', { workID: data.ItemID }, function (res) {
          if (res.success) {
            data.ISFavor = false;
            self.fnFavor = null;
            migi.eventBus.emit('photoFavor', data);
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $vd.removeClass('loading');
        }, function () {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $vd.removeClass('loading');
        });
      } else {
        _net2.default.postJSON('/api/works/favorWork', { workID: data.ItemID }, function (res) {
          if (res.success) {
            data.ISFavor = true;
            self.fnFavor = null;
            migi.eventBus.emit('photoFavor', data);
          } else if (res.code === 1000) {
            migi.eventBus.emit('NEED_LOGIN');
          } else {
            alert(res.message || _util2.default.ERROR_MESSAGE);
          }
          $vd.removeClass('loading');
        }, function () {
          alert(res.message || _util2.default.ERROR_MESSAGE);
          $vd.removeClass('loading');
        });
      }
    }
  }, {
    key: 'clickDownload',
    value: function clickDownload(e) {
      if (!$CONFIG.isLogin) {
        e.preventDefault();
        migi.eventBus.emit('NEED_LOGIN');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return migi.createVd("div", [["class", "image-view fn-hide"]], [migi.createVd("div", [["class", "c"], ["style", new migi.Obj("top", this, function () {
        return 'top:' + this.top + 'px';
      })], ["onSwipeLeft", new migi.Cb(this, this.left)], ["onSwipeRight", new migi.Cb(this, this.right)]], [migi.createVd("img", [["src", new migi.Obj("data", this, function () {
        return _util2.default.autoSsl(_util2.default.img__60(this.data.FileUrl)) || '//zhuanquan.xin/img/blank.png';
      })], ["style", new migi.Obj("data", this, function () {
        return 'width:' + this.data.Width + 'px;';
      })]]), migi.createVd("h3", [], [new migi.Obj("data", this, function () {
        return this.data.ItemName;
      }), migi.createVd("small", [], [new migi.Obj("data", this, function () {
        return this.data.Tips;
      })])]), migi.createVd("ul", [["class", "btn"]], [migi.createVd("li", [["class", new migi.Obj(["data", "fnLike"], this, function () {
        return 'like' + (this.data.ISLike || this.fnLike ? ' has' : '');
      })], ["onClick", new migi.Cb(this, this.clickLike)]]), migi.createVd("li", [["class", new migi.Obj(["data", "fnFavor"], this, function () {
        return 'favor' + (this.data.ISFavor || this.fnFavor ? ' has' : '');
      })], ["onClick", new migi.Cb(this, this.clickFavor)]]), migi.createVd("li", [["class", "download"]], [migi.createVd("a", [["href", new migi.Obj("data", this, function () {
        return this.data.FileUrl;
      })], ["target", "_blank"], ["download", new migi.Obj("data", this, function () {
        return this.data.ItemName + (this.data.FileUrl ? /\.\w+$/.exec(this.data.FileUrl)[0] || '' : '');
      })], ["onClick", new migi.Cb(this, this.clickDownload)]])])])]), migi.createVd("b", [["class", "prev"], ["onClick", new migi.Cb(this, this.clickPrev)]]), migi.createVd("b", [["class", "next"], ["onClick", new migi.Cb(this, this.clickNext)]]), migi.createVd("b", [["class", "close"], ["onClick", new migi.Cb(this, this.clickClose)]])]);
    }
  }, {
    key: 'data',
    set: function set(v) {
      this.__setBind("data", v);this.__data("data");
    },
    get: function get() {
      if (this.__initBind("data")) this.__setBind("data", {});return this.__getBind("data");
    }
  }, {
    key: 'top',
    set: function set(v) {
      this.__setBind("top", v);this.__data("top");
    },
    get: function get() {
      if (this.__initBind("top")) this.__setBind("top", 0);return this.__getBind("top");
    }
  }, {
    key: 'fnLike',
    set: function set(v) {
      this.__setBind("fnLike", v);this.__data("fnLike");
    },
    get: function get() {
      return this.__getBind("fnLike");
    }
  }, {
    key: 'fnFavor',
    set: function set(v) {
      this.__setBind("fnFavor", v);this.__data("fnFavor");
    },
    get: function get() {
      return this.__getBind("fnFavor");
    }
  }]);

  return ImageView;
}(migi.Component);

migi.name(ImageView, "ImageView");exports.default = ImageView;

/***/ })
/******/ ])));