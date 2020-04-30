/*
 * @Author: your name
 * @Date: 2020-04-30 10:58:59
 * @LastEditTime: 2020-04-30 15:49:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /myTestItem/css学习/src/属性选择器/index.js
 */

import React, { Component } from "react";
import './style.css'
class Select extends Component {
  render() {
    return (
      <div>
<div class="demo">
        <a
          href="http://www.w3cplus.com"
          target="_blank"
          class="links item first"
          id="first"
          title="w3cplus"
          qq='kkkk'
        >
          1
        </a>
        <a
          href=""
          class="links active item"
          title="test
           website"
          target="_blank"
          lang="zh"
        >
          2
        </a>
        <a
          href="sites/file/test.html"
          class="links item"
          title="this is a link"
          lang="zh-cn"
        >
          3
        </a>
        <a
          href="sites/file/test.png"
          class="links item"
          target="_balnk"
          lang="zh-tw"
        >
          4
        </a>
        <a href="sites/file/image.jpg" class="links item" title="zh-cn">
          5
        </a>
        <a
          href="mailto:w3cplus@hotmail"
          class="links item"
          title="website link"
          lang="zh"
        >
          6
        </a>
        <a href="/a.pdf" class="links item" title="open the website" lang="cn">
          7
        </a>
        <a
          href="/abc.pdf"
          class="links item"
          title="close the website"
          lang="en-zh"
        >
          8
        </a>
        <a href="abcdef.doc" class="links item" title="http://www.sina.com">
          9
        </a>
        <a href="abd.doc" class="linksitem last" id="last">
          10
        </a>
      </div>
      <img src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588238004287&di=cd32c3689e5933dc1b2799a059324545&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg'></img>
      <img src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588238004287&di=cd32c3689e5933dc1b2799a059324545&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg'></img>
      </div>
      
    );
  }
}
export default Select;
