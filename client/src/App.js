import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home'
// import Mentor from './Pages/Mentor'
// import Student from './Pages/Student'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/Home" component={Home}/>
            {/*<Route exact path="/Mentor" component={Mentor}/>
            <Route exact path="/Student" component={Student}/>*/}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
