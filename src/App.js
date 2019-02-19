import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './containers/home';
import Detail from './containers/detail';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/detail/:id" component={Detail}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
