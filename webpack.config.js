const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const APP_PATH = path.join(__dirname, '/app')
const BUILD_PATH = path.join(__dirname, '/dist')
const MODULE_PATH = path.join(__dirname, '/node_modules')

const config = {
  // 入口配置
  entry: {
    app: './app/app.jsx'
  },
  // 输出配置
  output: {
    filename: 'bundle.js',
    path: BUILD_PATH
  },
  // 开启source-map调试
  devtool: 'eval-source-map',
  // 开启devServer
  devServer: {
    contentBase: BUILD_PATH,
    port: 8899,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  // 配置resolve规则
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  // 配置eslint和loaders
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [
          MODULE_PATH
        ]
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader',
        exclude: [
          MODULE_PATH
        ]
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          MODULE_PATH
        ]
      }
    ]
  },
  // 配置plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react demo',
      template: './index.html'
    })
  ]
}

module.exports = config