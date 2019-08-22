import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Detail from 'pages/Detail'

export default class Router extends Component {
    render() {
      return (
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/detail" exact component={Detail} />
        </Switch>
      )
    }
  }