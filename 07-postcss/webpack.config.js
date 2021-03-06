const path = require('path')

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    // 设置为字符串的形式
    entry: './src/index.js',
    output:{
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
        publicPath:'http://cdn.com',
    },
    // mode: 'development',
    module:{
        rules:[  
        {
            test: /\.css$/,
            use:[
                'style-loader',
                'css-loader',
                'postcss-loader',
            ]
        },
     ]
    },
    
    devServer:{ //devServer的使用是在已经有编译后的包,而且devserver做的修改并没有在已有的build包中
        publicPath: '/build/',// 这个publicPath是指本地要实时更新的代码放置的文件路径
    }
}