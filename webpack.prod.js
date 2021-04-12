const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          sourceMap: true,
        },
      })
    ]
  }, devtool: "hidden-source-map",
  output: {
    iife: true// 是否添加 IIFE 外层
  }, plugins: [new CompressionPlugin({
    test: /\.js(\?.*)?$/i,
    threshold: 8192,

  })],

})