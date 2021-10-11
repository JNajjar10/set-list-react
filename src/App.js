import styles from './mystyle.module.css';
import React, { Component } from 'react';
import Home from './Pages/Home';
import Watch from './Pages/Watch';
import Login from './Pages/Login';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/watch" exact component={Watch}/>
            <Route path="/watch/:id" exact component={Watch}/>
            <Route path="/login"  component={Login}/>
            <Route path="/" component={Home}/>
        </Switch>
      </Router>
      );
    }

}



export default App;
