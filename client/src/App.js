import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import store from './store';

import { Provider } from 'react-redux'; //provides our application with the store which is the state

import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import MentorForm from './Pages/MentorForm';
import Mentor from './Pages/Mentor';
import Login from './Pages/Login';
import { logoutUser } from './actions/authActions';

// import Mentor from './Pages/Mentor'
// import Student from './Pages/Student'

// Provider is going to take in a store
// Reducer => a function that returns the next state tree, given the current state tree and an action to handle

import './App.css';

// check for token
if(localStorage.jwtToken) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);

  // decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);

  // set user and isAuthenticated
  // we can now call things from our store
  store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime = Date.now() / 1000;
  // if token is expired, logout user
  if(decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // TODO: clear current profile

    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/pages/teacherstudent/teacherstudent.html" component={SignUp}/>
              <Route exact path="/register" component={MentorForm}/>
              <Route exact path="/mentor" component={Mentor}/>
              <Route exact path="/login" component={Login}/>
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
