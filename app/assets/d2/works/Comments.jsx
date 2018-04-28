/**
 * Created by army8735 on 2018/1/30.
 */

'use strict';

import Page from '../component/page/Page.jsx';
import Comment from '../component/comment/Comment.jsx';
import net from '../common/net';
import util from '../common/util';

let limit = 10;
let offset = 0;
let ajax;

class Comments extends migi.Component {
  constructor(...data) {
    super(...data);
    // let self = this;
    // limit = self.props.data.limit;
    // self.on(migi.Event.DOM, function() {
    //   let page = self.ref.page;
    //   let page2 = self.ref.page2;
    //   page.on('page', function(i) {
    //     if(page2) {
    //       page2.index = i;
    //     }
    //     offset = (i - 1) * limit;
    //     self.loadPage();
    //   });
    //   if(page2) {
    //     page2.on('page', function(i) {
    //       page.index = i;
    //       offset = (i - 1) * limit;
    //       self.loadPage();
    //     });
    //   }
    // });
  }
  // loadPage() {
  //   let self = this;
  //   let comment = self.ref.comment;
  //   if(ajax) {
  //     ajax.abort();
  //   }
  //   ajax = net.postJSON('/api2/works/comment', { worksId: self.props.worksId , offset, limit }, function(res) {
  //     if(res.success) {
  //       let data = res.data;
  //       offset += limit;
  //       comment.setData(data.data);
  //     }
  //     else {
  //       if(res.code === 1000) {
  //         migi.eventBus.emit('NEED_LOGIN');
  //       }
  //       comment.message = res.message || util.ERROR_MESSAGE;
  //     }
  //   }, function(res) {
  //     comment.message = res.message || util.ERROR_MESSAGE;
  //   });
  // }
  render() {
    return <div class="mod mod-comment box">
      <h4>评论</h4>
      <div class="fn">
        <ul class="type fn-clear"
            onClick={ { li: this.switchType2 } }>
          <li class="cur" rel="0">全部<small>{ this.props.data.count }</small></li>
          {
            this.props.isLogin
              ? <li rel="1">我的</li>
              : ''
          }
        </ul>
      </div>
      <Page ref="page"
            total={ Math.ceil(this.props.data.count / limit) }/>
      <Comment ref="comment"
               data={ this.props.data.data }/>
    </div>;
  }
}

export default Comments;