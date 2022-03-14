const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  env: require('./site.config'),
  images: {
    disableStaticImages: true
  },
  basePath: '/mockupyour.app'
  // basePath: process.env.GH_PAGES ? '/mockupyour.app' : ''
  // basePath: process.env.NODE_ENV == 'production' ? '/mockupyour.app' : ''
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: false
      }
    ]
  ],
  nextConfig
);
