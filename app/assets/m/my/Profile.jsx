/**
 * Created by army8735 on 2017/10/30.
 */

'use strict';

import net from '../../d/common/net';
import util from '../../d/common/util';

class Profile extends migi.Component {
  constructor(...data) {
    super(...data);
    let self = this;
    self.head = self.props.userInfo.Head_Url;
    self.name = self.props.userInfo.NickName;
    self.updateNickNameTimeDiff = self.props.updateNickNameTimeDiff || 0;
  }
  @bind head
  @bind name
  @bind updateNickNameTimeDiff
  click(e) {
    e.preventDefault();
    let self = this;
    if(self.updateNickNameTimeDiff < 24 * 60 * 60 * 1000) {
      alert('昵称一天只能修改一次哦~');
      return;
    }
    $(self.ref.name.element).addClass('fn-hide');
    $(self.ref.edit.element).addClass('fn-hide');
    $(self.ref.input.element).removeClass('fn-hide').focus().val(self.name);
    $(self.ref.ok.element).removeClass('fn-hide')
  }
  clickOk() {
    let self = this;
    $(self.ref.name.element).removeClass('fn-hide');
    $(self.ref.input.element).addClass('fn-hide');
    $(self.ref.ok.element).addClass('fn-hide');
    let $edit = $(self.ref.edit.element);
    let newName = $(self.ref.input.element).val().trim();
    let length = newName.length;
    if(length < 4 || length > 8) {
      alert('昵称长度需要在4~8个字之间哦~');
      $edit.removeClass('fn-hide');
      return;
    }
    if(newName !== self.name) {
      net.postJSON('/api/user/updateNickName', { nickName: newName }, function(res) {
        if(res.success) {
          self.name = newName;
          self.updateNickNameTimeDiff = 0;
        }
        else {
          alert(res.message || util.ERROR_MESSAGE);
        }
        $edit.removeClass('fn-hide');
      }, function(res) {
        alert(res.message || util.ERROR_MESSAGE);
        $edit.removeClass('fn-hide');
      });
    }
    else {
      $edit.removeClass('fn-hide');
    }
  }
  change(e) {
    if(window.FileReader) {
      let self = this;
      let file = e.target.files[0];
      let size = file.size;
      if(size && size !== 0 && size <= 1024 * 100) {
        let $upload = $(self.ref.upload.element);
        $upload.addClass('fn-hide');
        let fileReader = new FileReader();
        fileReader.onload = function() {
          net.postJSON('/api/user/uploadHead', { img: fileReader.result }, function(res) {
            if(res.success) {
              self.head = util.autoSsl(util.img144_144(res.url));
            }
            else {
              alert(res.message || util.ERROR_MESSAGE);
            }
            $upload.removeClass('fn-hide');
          }, function(res) {
            alert(res.message || util.ERROR_MESSAGE);
            $upload.removeClass('fn-hide');
          });
        };
        fileReader.readAsDataURL(file);
      }
      else {
        alert('图片体积太大啦，不能超过100k！');
      }
    }
    else {
      alert('您的浏览器暂不支持上传，请暂时使用Chrome或者IE10以上浏览器。');
    }
  }
  render() {
    return <div class="profile fn-clear">
      <h4>我的资料</h4>
      <div class="pic">
        <img src={ this.head || '//zhuanquan.xin/img/f59284bd66f39bcfc70ef62eee10e186.png' }/>
        {/*<div class="upload" ref="upload">*/}
        {/*<input type="file" onChange={ this.change } accept="image/gif, image/jpeg, image/png"/>*/}
        {/*</div>*/}
      </div>
      <div class="txt">
        <strong ref="name">{ this.name }</strong>
        <input ref="input" type="text" class="fn-hide" value="" maxlength="8"/>
        <b class="edit" ref="edit" onClick={ this.click }/>
        <button class="fn-hide" ref="ok" onClick={ this.clickOk }>确定</button>
      </div>
    </div>;
  }
}

export default Profile;