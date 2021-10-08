const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}
// vue.config.js
module.exports = {
  //publicPath: './',
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      proxy: 'http://local.shadehost.eu:3000/v1/',
      disableHostCheck: true,
    },
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        assets: resolveSrc('src/assets')
      }
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
