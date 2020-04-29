/*
 * @Author: your name
 * @Date: 2020-04-28 14:56:52
 * @LastEditTime: 2020-04-29 15:02:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myTestItem/css学习/webpack.config.js
 */
const HtmlWebpackPlugin=require('html-webpack-plugin')
const path = require('path')
module.exports = {
    // 设置为字符串的形式
    entry: './src/index.js',
    output:{
        // filename:'bundle.js',
        // filename: './js/bundle.js',
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        // publicPath:'http://cdn.com',//资源放在远程的地址
    },
    module:{
      rules:[{
          test:/\.js$/,
          use:[{
            loader:'babel-loader'
          }],
          exclude:/\.node_modules/,
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
      template: 'index.html',
      })
    ],
    mode: 'development',
    devServer:{
        publicPath: '/dist',// 这个publicPath是指本地要实时更新的代码放置的文件路径
    }
}