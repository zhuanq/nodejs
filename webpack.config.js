const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin('[name].css');
const webpack = require("webpack");

module.exports = {
  entry: {
    mcommon: './app/assets/m/common/index.js',
    // mfind: './app/assets/m/find/index.jsx',
    mindex: './app/assets/m/index/index.jsx',
    mworks: './app/assets/m/works/index.jsx',
    // mauthor: './app/assets/m/author/index.jsx',
    // mmy: './app/assets/m/my/index.jsx',
    // mmy_private: './app/assets/m/my/private/index.jsx',
    // mmy_message: './app/assets/m/my/message/index.jsx',
    // mmy_relation: './app/assets/m/my/relation/index.jsx',
    // mmy_post: './app/assets/m/my/post/index.jsx',
    // mmy_favor: './app/assets/m/my/favor/index.jsx',
    // mmy_favor_pic: './app/assets/m/my/favor/pic/index.jsx',
    // mmy_favor_post: './app/assets/m/my/favor/post/index.jsx',
    // mlogin: './app/assets/m/login/index.jsx',
    mpost: './app/assets/m/post/index.jsx',
    // mcircle: './app/assets/m/circle/index.jsx',
    // mcpost: './app/assets/m/circle/mcpost.jsx',
    // muser: './app/assets/m/user/index.jsx',
    // mcircling: './app/assets/m/circling/index.jsx',
    // mfollow: './app/assets/m/follow/index.jsx',
    // msubcomment: './app/assets/m/subcomment/index.jsx',
    // msubpost: './app/assets/m/subpost/index.jsx',
    // mmall: './app/assets/m/mall/index.jsx',
    // mmall_new: './app/assets/m/mall/new/index.jsx',
    // mmall_wait: './app/assets/m/mall/wait/index.jsx',
    // mmall_history: './app/assets/m/mall/history/index.jsx',
    // mtag: './app/assets/m/tag/index.jsx',
    dcommon: './app/assets/d/common/index.js',
    dindex: './app/assets/d/index/index.jsx',
    // dfind: './app/assets/d/find/index.jsx',
    dworks: './app/assets/d/works/index.jsx',
    // dauthor: './app/assets/d/author/index.jsx',
    // dmy: './app/assets/d/my/index.jsx',
    // dmy_message: './app/assets/d/my/message/index.jsx',
    // dlogin: './app/assets/d/login/index.jsx',
    // dupload: './app/assets/d/upload/index.jsx',
    // dguide: './app/assets/d/guide/index.jsx',
    dpost: './app/assets/d/post/index.jsx',
    dupload: './app/assets/d/upload/index.jsx',
    cindex: './app/assets/cms/index/index.jsx',
    // dcircle: './app/assets/d/circle/index.jsx',
    // duser: './app/assets/d/user/index.jsx',
    // dcircling: './app/assets/d/circling/index.jsx',
    // dfollow: './app/assets/d/follow/index.jsx',
    // dmall: './app/assets/d/mall/index.jsx',
    // dmall_new: './app/assets/d/mall/new/index.jsx',
    // dmall_wait: './app/assets/d/mall/wait/index.jsx',
    rcommon: './app/assets/rhyme/common/index.js',
    rsingle: './app/assets/rhyme/single/index.jsx',
    ysjxy: './app/assets/rhyme/ysjxy/index.jsx',
    fc: './app/assets/rhyme/fc/index.jsx',
    fc_single: './app/assets/rhyme/fc_single/index.jsx',
    hh: './app/assets/rhyme/hh/index.jsx',
    hh_single: './app/assets/rhyme/hh_single/index.jsx',
    jcommon: './app/assets/jsgm/common/index.js',
    jsgm_home: './app/assets/jsgm/home/index.jsx',
    jsgm_detail: './app/assets/jsgm/detail/index.jsx',
    jsgm_works: './app/assets/jsgm/works/index.jsx',
    jsgm_prize: './app/assets/jsgm/prize/index.jsx',
    jsgm_join: './app/assets/jsgm/join/index.jsx',
    jsgm_single: './app/assets/jsgm/single/index.jsx',
    sczl_common: './app/assets/sczl/common/index.js',
    sczl_home: './app/assets/sczl/home/index.jsx',
    sczl_upload: './app/assets/sczl/upload/index.jsx',
    sczl_single: './app/assets/sczl/single/index.jsx',
  },
  output: {
    path: __dirname + '/app/public',
    filename: '[name].js'
  },
  devServer: {
    contentBase: './app/public'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
          },
          {
            loader: 'migi-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
          }
        ]
      },
      {
        test: /\.less$/,
        use: extractLESS.extract(['css-loader', 'autoprefixer-loader', 'less-loader'])
      },
      {
        test: /(\.jpg)|(\.jpeg)|(\.gif)|(\.png)|(\.ico)|(\.webp)$/,
        use: 'url-loader?limit=1024&name=[hash].[ext]'
      },
      {
        test: /\.(html?)|(\.mp\d)$/,
        use: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  plugins: [
    extractLESS
  ],
  resolve: {
    alias: {
    }
  }
};
