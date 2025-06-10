const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // or false for no source maps
  output: {
    filename: '[name].[contenthash].js', // Better caching
  },
  performance: {
    hints: 'warning', // Enable size warnings
  },
});