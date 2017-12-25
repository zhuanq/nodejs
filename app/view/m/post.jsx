/**
 * Created by army8735 on 2017/10/28.
 */

'use strict';

import Post from '../../assets/m/post/Post.jsx';

export default function(data) {
  migi.resetUid();

  let isLogin = !!data.ctx.session.uid;
  let id = data.id;
  let postData = data.postData;
  let replyData = data.replyData;

  let post = migi.preRender(<Post
    isLogin={ isLogin }
    id={ id }
    postData={ postData }
    replyData={ replyData }/>);

  return `<!DOCTYPE html>
<html>
<head>
  ${data.helper.getMHead({ title: postData.Title })}
  <link rel="stylesheet" href="${data.helper.getAssetUrl('/mcommon.css')}"/>
  <link rel="stylesheet" href="${data.helper.getAssetUrl('/mpost.css')}"/>
</head>
<body>
<div id="page">${post}</div>
${data.helper.getMTopNav()}
${data.helper.getMBotNav()}
<script>
  ${data.helper.$CONFIG}
  $CONFIG.id = ${data.helper.stringify(id)};
  $CONFIG.postData = ${data.helper.stringify(postData)};
  $CONFIG.replyData = ${data.helper.stringify(replyData)};
</script>
<script src="${data.helper.getAssetUrl('/mcommon.js')}" defer="defer"></script>
<script src="${data.helper.getAssetUrl('/mpost.js')}" defer="defer"></script>
${data.helper.getStat()}
</body>
</html>`;
};
