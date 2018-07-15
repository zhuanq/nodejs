/**
 * Created by army8735 on 2018/7/10.
 */

'use strict';

import Nav from '../common/Nav.jsx';
import Bot from '../common/Bot.jsx';

class Detail extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  render() {
    return <div class="detail">
      <Nav index={ 1 }/>
      <h3 class="ti">活动时间</h3>
      <img class="time" src="//zhuanquan.xin/img/acd8c39ddbda14274a6f94fc012c0111.png"/>
      <h3 class="ti">奖品设置</h3>
      <ul class="prize fn-clear">
        <li>
          <h4>一等奖</h4>
          <small>（1名）</small>
          <p>2000元现金<br/>
            1000元以内自选汉服一套<br/>
            +<br/>
            与《今时古梦》创作组<br/>
            共同完成作品<br/>
            邀请知名歌手演绎</p>
        </li>
        <li>
          <h4>二等奖</h4>
          <small>（3名）</small>
          <p>1000元现金<br/>
            1000元以内自选汉服一套</p>
        </li>
        <li>
          <h4>三等奖</h4>
          <small>（5名）</small>
          <p>1000元以内自选汉服一套</p>
        </li>
      </ul>
      <p class="txt">※关于奖品“1000元以内自选汉服一套”<br/>
        获奖者可自行选购商品，付款后提供订单详情，我们为你报销费用<br/>
        不限制商品数量，若商品总费用超出1000元，超出部分请自行支付<br/>
        本次活动不承担邮费部分</p>
      <h3 class="ti">参赛规则</h3>
      <p class="txt">◆ 参赛作品需与指定主题相关，其他不相关作品将视为无效投稿。<br/>
        ◆ 参赛者可投稿多份作品，评选时将采用名次最高的作品。<br/>
        ◆ 投稿作品必须为原创作品，不接受任何盗用他人素材内容的作品，一经发现作品存在抄袭或版权问题，取消参赛资格；本次活动投稿作品建议首次公开发表，已参与过与本赛事相同或类似的活动的作品视为无效作品。<br/>
        ◆ 未经主办方同意，参赛者在参赛期间不得将参赛作品自行用于商业用途或授予任何第三方使用，不得用参赛作品参与与本赛事相同或类似的其他活动，否则取消获奖资格。<br/>
        ◆ 作品一经投稿，即视为默认授权作品用于《今时古梦》官方宣传展示。作品一经获奖，即视为自动授权《今时古梦》官方使用作品，不可再授权他方使用。<br/>
        ◆ 本次活动系统由转圈社区提供，投稿作品默认上传至转圈数据库。<br/>
        ◆ 本次活动最终解释权归《今时古梦》及转圈社区所有。</p>
      <h3 class="ti">评审规则</h3>
      <p class="txt">◆ 本次大赛各奖项由评审团共同评选决出。评审团将根据参赛作品的主题契合度、情感表达、辞藻运用、创作水平等方面进行综合评价，最终决定获奖名单。<br/>
        ◆ 本次大赛入选词作将与《今时古梦》合作音乐人、画师、PV师等共同完成作品，并邀请人气歌手演绎。入选词作皆有机会与《今时古梦》企划创作组达成长期合作。<br/>
        ◆ 最终获奖名单将由《今时古梦》公布于其官方微博、微信账号。</p>
      <h3 class="ti">评委阵容</h3>
      <p class="rater">《今时古梦》企划创作组</p>
    </div>;
  }
}

export default Detail;
