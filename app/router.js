// app/router.js
module.exports = app => {
  app.get('/', 'home.index');
};

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/news', 'news.list');
};