exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};