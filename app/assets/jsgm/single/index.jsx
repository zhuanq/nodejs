/**
 * Created by army8735 on 2018/7/14.
 */

'use strict';

import './index.less';

import Single from './Single.jsx';

let single = migi.preExist(
  <Single works={ $CONFIG.works }
          isOwn={ $CONFIG.isOwn }/>
);
