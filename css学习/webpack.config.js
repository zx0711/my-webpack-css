/*
 * @Author: your name
 * @Date: 2020-04-28 14:56:52
 * @LastEditTime: 2020-04-30 15:46:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myTestItem/css学习/webpack.config.js
 */
const HtmlWebpackPlugin=require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
        },
        {
          test:/\.css$/,
          use:ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:'css-loader',
          }),
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpeg$/, /\.png$/],
          loader: require.resolve('url-loader'),
          options: {
            limit: 10000,
            name: 'dist/media/[name].[ext]',
            publicPath:'./assets-path/'
          }
        },
        // {
        //   loader: require.resolve('file-loader'),
        //   // Exclude `js` files to keep "css" loader working as it injects
        //   // it's runtime that would otherwise processed through "file" loader.
        //   // Also exclude `html` and `json` extensions so they get processed
        //   // by webpacks internal loaders.
        //   exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
        //   options: {
        //     name: 'dist/media/[name].[ext]'
        //   }
        // }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      new ExtractTextPlugin('[name].css')
    ],
   
    mode: 'development',
    devServer:{
        publicPath: '/dist',// 这个publicPath是指本地要实时更新的代码放置的文件路径
    }
}