const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const PREFIX = process.env.GH_PAGES ? '/mockupyour.app' : '';

const nextConfig = {
  env: require('./site.config'),
  images: {
    disableStaticImages: true
  },
  assetPrefix: PREFIX,
  basePath: PREFIX
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
