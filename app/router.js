'use strict';

module.exports = app => {
  app.get('/404.html', 'error.c404');
  app.get('/oauth/weibo', 'oauth.weibo');
  app.get('/oauth/login', 'oauth.login');

  app.get('/d', 'd.index.index');
  app.get('/d/find', 'd.find.index');
  app.get('/d/works/:worksID', 'd.works.index');
  app.get('/d/author/:authorID', 'd.author.index');
  app.get('/d/search/:kw', 'd.search.index');

  app.get('/m', 'm.index.index');
  app.get('/m/find', 'm.find.index');
  app.get('/m/works/:worksID', 'm.works.index');
  app.get('/m/author/:authorID', 'm.author.index');
  app.get('/m/search/:kw', 'm.search.index');

  app.post('/api/find/hotWorkList', 'api.find.hotWorkList');
  app.post('/api/find/tagB', 'api.find.tagB');
  app.post('/api/find/playList', 'api.find.playList');
  app.post('/api/works/commentList', 'api.works.commentList');
  app.post('/api/author/tagB', 'api.author.tagB');
  app.post('/api/author/playList', 'api.author.playList');
  app.post('/api/author/commentList', 'api.author.commentList');
  app.post('/api/author/follow', 'api.author.follow');
  app.post('/api/author/unFollow', 'api.author.unFollow');
  app.post('/api/author/addComment', 'api.author.addComment');
  app.post('/api/author/likeComment', 'api.author.likeComment');
  app.post('/api/author/subCommentList', 'api.author.subCommentList');
  app.post('/api/author/delComment', 'api.author.delComment');

  app.get('/h5/version', 'h5.version.index');
  app.post('/h5/version', 'h5.version.index');
};
