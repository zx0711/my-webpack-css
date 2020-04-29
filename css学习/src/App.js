/*
 * @Author: your name
 * @Date: 2020-04-28 16:25:23
 * @LastEditTime: 2020-04-29 14:55:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myTestItem/css学习/src/App.js
 */
import React, { Component } from "react"
import Pseudo from './pseudo'
class App extends Component {
  render(){
    return (
      <div>
        {/* 伪元素 */}
        <Pseudo></Pseudo> 
      </div>
    )
  }
}
export default App