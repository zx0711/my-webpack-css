const webpack = require('webpack')
const path = require('path')
const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    // 设置为字符串的形式
    entry:{
        app: './src/app.js',
        vendor:['react']
    },
    output:{
        filename: '[name].[chunkhash].js',
        path: path.join(__dirname, 'build'),
    },
    plugins: [
        new Analyzer(),
        // new webpack.HashedModuleIdsPlugin(), // webpack3以后才有的
        new webpack.optimize.CommonsChunkPlugin({
            name:['vendor','suibian'],
        })
    ],
    devServer:{ // devServer的使用是在已经有编译后的包,而且devserver做的修改并没有在已有的build包中
        publicPath: '/build/',// 这个publicPath是指本地要实时更新的代码放置的文件路径
    }
}