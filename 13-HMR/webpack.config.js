const path = require('path')
const webpack = require('webpack')
module.exports = {
    // 设置为字符串的形式
    entry: './src/app.js',
    output:{
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
    },
    plugins: [
       new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{ // devServer的使用是在已经有编译后的包,而且devserver做的修改并没有在已有的build包中
        hot: true,// 这个publicPath是指本地要实时更新的代码放置的文件路径
        publicPath: '/build/',
    }
}