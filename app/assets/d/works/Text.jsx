/**
 * Created by army8735 on 2017/10/10.
 */

'use strict';

class Text extends migi.Component {
  constructor(...data) {
    super(...data);
  }
  render() {
    return <div class="mod text">
      <h4>{ this.props.datas.name }</h4>
      <ul class="c">
      {
        (this.props.datas.value || []).map(function(item) {
          return <li><pre>{ item.Text }</pre></li>;
        })
      }
      </ul>
    </div>;
  }
}

export default Text;
