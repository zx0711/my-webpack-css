/*
 * @Author: your name
 * @Date: 2020-04-28 16:25:23
 * @LastEditTime: 2020-04-30 15:33:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myTestItem/css学习/src/App.js
 */
import React, { Component } from "react"
import Pseudo from './pseudo'
import Select from './tedd'
import Border from './border'
class App extends Component {
  render(){
    return (
      <div>
        {/* 伪元素 */}
        {/* <Pseudo></Pseudo>  */}
        {/* 属性选择器 */}
        <Select></Select> 
        {/* 边框 */}
        <Border></Border> 
      </div>
    )
  }
}
export default App