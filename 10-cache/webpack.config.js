const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    // 设置为字符串的形式
    entry:{
        foo: './src/foo.js',
    },
    output:{
        filename: '[name].[chunkhash:8].js',
        publicPath:'/build/',
        chunkFilename:'[name].[chunkhash:8].js',
        path: path.join(__dirname, 'build'),
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer:{ // devServer的使用是在已经有编译后的包,而且devserver做的修改并没有在已有的build包中
        publicPath: '/build/',// 这个publicPath是指本地要实时更新的代码放置的文件路径
    }
}