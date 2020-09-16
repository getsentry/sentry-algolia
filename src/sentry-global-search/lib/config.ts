const Transformers = require('./transformers');

exports.defaultQueryParams = {
  snippetEllipsisText: '…',
  highlightPreTag: '<mark>',
  highlightPostTag: '</mark>',
};

const config = settings => {
  return {
    pathBias: false,
    platformBias: true,
    legacyBias: true,
    ...settings,
  };
};

exports.sites = [
  config({
    site: 'docs',
    name: 'Documentation',
    indexes: [
      {
        indexName: 'sentry-docs',
        transformer: Transformers.transformDocsGatsbyHit,
      },
    ],
  }),
  config({
    site: 'develop',
    name: 'Developer Documentation',
    indexes: [
      {
        indexName: 'develop-docs',
        transformer: Transformers.transformDevelopHit,
      },
    ],
  }),
  config({
    site: 'help-center',
    name: 'Help Center',
    indexes: [
      {
        indexName: 'zendesk_sentry_articles',
        transformer: Transformers.transformHelpCenterHit,
      },
    ],
  }),
  config({
    site: 'blog',
    name: 'Blog Posts',
    indexes: [
      {
        indexName: 'sentry-blog-posts',
        transformer: Transformers.transformBlogHit,
      },
    ],
  }),
];
