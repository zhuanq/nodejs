/**
 * Created by army8735 on 2017/10/18.
 */

'use strict';

import './index.less';

import Collection from './Collection.jsx';

let collection = migi.preExist(<Collection
  isLogin={ $CONFIG.isLogin }
  collectionID={ $CONFIG.collectionID }
  collectionDetail={ $CONFIG.collectionDetail }
  commentData={ $CONFIG.commentData }/>);