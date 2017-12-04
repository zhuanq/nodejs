/**
 * Created by army8735 on 2017/10/27.
 */

'use strict';

import net from '../../d/common/net';
import util from '../../d/common/util';
import Profile from './Profile.jsx';

class My extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  clickOut(e) {
    e.preventDefault();
    net.postJSON('/api/login/loginOut', function() {
      location.href = '/login';
    }, function(res) {
      alert(res.message || util.ERROR_MESSAGE);
    });
  }
  render() {
    return <div class="my">
      <Profile userInfo={ this.props.userInfo }
               updateNickNameTimeDiff={ this.props.updateNickNameTimeDiff }
               updateHeadTimeDiff={ this.props.updateHeadTimeDiff }
               privateInfo={ this.props.privateInfo }/>
      <div class="warn">
        <div class="t fn-clear">
          <img class="pic" src={ util.autoSsl(util.img60_60_80('//zhuanquan.xyz/temp/f3bcae7e2f60d9729a0e205dfb39ca6e.jpg')) }/>
          <div class="txt">
            <div>
              <span class="name">圈儿</span>
              <small class="time">刚刚</small>
            </div>
          </div>
        </div>
        <div class="c">
          <pre>未来在这里还会解锁各种信息哒！然而需要实现的功能太多，程序员小哥哥们需要一点一点搭建转圈的世界哦！
请耐心等待，我们会努力做得更好=3=</pre>
          <b class="arrow"/>
        </div>
      </div>
      <ul class="list">
        <li><a href="/my/relation" class="relation">圈关系</a></li>
        <li><a href="/my/message" class="message">圈消息</a></li>
        <li><a href="/my/post" class="post">我画的圈</a></li>
        <li><a href="/my/favor" class="favor">我的收藏</a></li>
      </ul>
      {
        this.props.bonusPoint.ranking
          ? <div class="bp">
            <p>全站排名 { this.props.bonusPoint.ranking } 名</p>
            <p><small>以上是截止到11月30日晚0点的积分排名哦。1-10名的小伙伴将获得异世谣随机签名手账一份~11-200名的小伙伴将获得异世谣空白手账一份~
              <br/>福利详情页将和圈币系统一起尽快上线，请耐心等待哦！
              <br/>另外本周末我们将在11-100名中随机抽取3名小伙伴升级为随机签名手账。
              <br/>没进前200的小伙伴们也不用气馁，之前的所有努力都会积累圈币~很快就会上线圈币兑换福利的功能哦！</small></p>
          </div>
          : ''
      }
      <a href="#" class="loginout" onClick={ this.clickOut }>退出登录</a>
    </div>;
  }
}

export default My;
