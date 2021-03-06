const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.config');
const VueSSRClientPlugin=require('vue-server-renderer/server-plugin')
module.exports = merge(base, {
  target: 'node',
  entry: {
    server: path.resolve(__dirname, '../src/entry-server.js')
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.ssr.html'),
      filename: 'index.ssr.html',
      files: {
        js: 'client.bundle.js'
      },
      excludeChunks: ['server']
    })
  ]
});