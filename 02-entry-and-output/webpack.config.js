module.exports = {
    // 设置为字符串的形式
    // entry: './src/index.js',
    // 设置为数组的形式，下面的babel-polyfill相当于在入口文件引入babel-polyfill
    // entry: ['babel-polyfill','./src/index.js'],
    // 设置为对象
    entry: {
        // chunk name为index,入口路径为./src/index.js
        index: './src/index.js',
        vendor:['react']
        // chunk name为lib,入口文件为./src/lib.js 
        // lib: './src/lib.js',
        // 以上充分说明入口文件可以设置为多个，但是多个的时候，每个入口文件都要要一个chunk name
    },
    // 还有一个设置类型是函数类型，不管如何设置，只要最后返回的是入口文件地址就是可已的
    // entry: ()=>
    //     './src/index.js',
    // 多页面应用的配置
    entry:{
        pageA: './src/pageA.js',
        pageB: './src/pageB.js',
        pageC: './src/pageC.js',
    },
    output:{
        filename:'[name].js',
    },
    mode: 'development',
    devServer:{
        publicPath: '/dist/',
    }
}