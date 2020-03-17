const path = require('path')
module.exports = {
    // 设置为字符串的形式
    entry: './src/app.js',
    // 设置为数组的形式，下面的babel-polyfill相当于在入口文件引入babel-polyfill
    // entry: ['babel-polyfill','./src/index.js'],
    // 设置为对象
    // entry: {
    //     // chunk name为index,入口路径为./src/index.js
    //     index: './src/index.js',
    //     vendor:['react']
    //     // chunk name为lib,入口文件为./src/lib.js 
    //     // lib: './src/lib.js',
    //     // 以上充分说明入口文件可以设置为多个，但是多个的时候，每个入口文件都要要一个chunk name
    // },
    // 还有一个设置类型是函数类型，不管如何设置，只要最后返回的是入口文件地址就是可已的
    // entry: ()=>
    //     './src/index.js',
    // 多页面应用的配置
    // entry:{
    //     pageA: './src/pageA.js',
    //     pageB: './src/pageB.js',
    //     pageC: './src/pageC.js',
    // },
    output:{
        // filename:'bundle.js',
        // filename: './js/bundle.js',
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
        publicPath:'http://cdn.com',//资源放在远程的地址
    },
    module:{
        rules:[{ // rules代表模块的处理规则，其实是有很多规则的，下面的每一个需要配置的一个属性就是一个规则
            test:/\.css$/,
            use:['style-loader','css-loader'],
        }]
    },
    mode: 'development',
    devServer:{ //devServer的使用是在已经有编译后的包,而且devserver做的修改并没有在已有的build包中
        publicPath: '/build/',// 这个publicPath是指本地要实时更新的代码放置的文件路径
    }
}