/**
 * Created by army8735 on 2017/11/27.
 */

'use strict';

import util from '../../common/util';

class HotUser extends migi.Component {
  constructor(...data) {
    super(...data);
    this.dataList = this.props.dataList;
  }
  @bind dataList
  render() {
    return <div class="cp-hotuser">
      {
        this.dataList && this.dataList.length
          ? <ul class="list fn-clear">
              {
                this.dataList.map(function(item) {
                  return <li>
                    <a href={ `/user/${item.UserID}` } class="pic">
                      <img src={ util.autoSsl(util.img144_144_80(item.User_HeadUrl || '//zhuanquan.xin/head/8fd9055b7f033087e6337e37c8959d3e.png')) }/>
                    </a>
                    <a href={ `/user/${item.UserID}` } class="txt">
                      <span class="name">{ item.UserNickName }</span>
                    </a>
                    <div class="info">{ item.followMe ? '互相关注' : '' }</div>
                  </li>;
                })
              }
            </ul>
          : <div class="empty">暂无数据</div>
      }
    </div>;
  }
}

export default HotUser;
