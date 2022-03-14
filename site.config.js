const PREFIX = process.env.GH_PAGES ? '/mockupyour.app' : '';
const domain = process.env.GH_PAGES
  ? '/https://fleshascs.github.io/mockupyour.app'
  : 'http://localhost:3000';

module.exports = {
  siteName: '3D STUFF',
  domain: domain,
  defaultTitle: 'mockup app',
  defaultDescription: 'description...',
  googleAnalyticsKey: 'UA-107670880-1',
  basePath: PREFIX
};
