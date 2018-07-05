import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'; //provides our application with the store which is the state
import { createStore, applyMiddleware } from 'redux';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import MentorForm from './Pages/MentorForm';
import Mentor from './Pages/Mentor';

// import Mentor from './Pages/Mentor'
// import Student from './Pages/Student'

// Provider is going to take in a store
// Reducer => a function that returns the next state tree, given the current state tree and an action to handle

import './App.css';


const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/pages/teacherstudent/teacherstudent.html" component={SignUp}/>
              <Route exact path="/mentorform" component={MentorForm}/>
              <Route exact path="/mentor" component={Mentor}/>
              {/*<Route exact path="/Mentor" component={Mentor}/>
              <Route exact path="/Student" component={Student}/>*/}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
