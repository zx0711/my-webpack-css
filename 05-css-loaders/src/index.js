
import './style.css'
// 为什么引入了style.css。但是为什么没有颜色的效果呢？问题就在这了。
// 这次引入extract-text-webpack-plugin的作用就是为了js和css文件分开
document.write('My Webpack app')
