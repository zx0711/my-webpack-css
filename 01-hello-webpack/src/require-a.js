const bar = require('./require-b')
document.write('b文件',bar)

//自己抛出一个对象
module.exports = '我是a文件'
