import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';

import { Provider } from 'react-redux'; //provides our application with the store which is the state
import store from './store';

import PrivateRoute from './components/PrivateRoute';

import Home from './Pages/Home';
import Nav from '../src/components/Nav';
import CreateAccount from './Pages/CreateAccount';
// import SignUp from './Pages/SignUp';
import MentorForm from './Pages/MentorForm';
import Mentor from './Pages/Mentor';
import Login from './Pages/Login';
import MentorDashboard from './Pages/MentorDashboard';
import MentorProfile from './Pages/MentorProfile';
import AddExtActivity from './Pages/AddInfo/AddExtActivity';
import AddInterest from './Pages/AddInfo/AddInterest';
import { logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import CreateProfile from './Pages/CreateProfile';


// import Mentor from './Pages/Mentor'
// import Student from './Pages/Student'

// Provider is going to take in a store
// Reducer => a function that returns the next state tree, given the current state tree and an action to handle

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
    store.dispatch(clearCurrentProfile());

    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            {/* <Switch> */}
              <Nav />
              <Route exact path="/" component={Home}/>
              <Route exact path="/mentor" component={Mentor}/>

              <div className="container">
                <Route exact path="/create-account" component={CreateAccount}/>              
                <Route exact path="/register" component={MentorForm}/>                
                <Route exact path="/login" component={Login}/>
                {/* <Route exact path="/profile/:handle" component={ MentorProfile } />             */}
                <Switch>
                  <PrivateRoute exact path="/mentordashboard" component={ MentorDashboard } />                     
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/mentorprofile" component={ MentorProfile } />                     
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/create-profile" component={ CreateProfile } />                     
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/add-activity" component={ AddExtActivity } />                     
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/add-interest" component={ AddInterest } />                     
                </Switch>
              </div>
              {/*<Route exact path="/Mentor" component={Mentor}/>
              <Route exact path="/Student" component={Student}/>*/}
            {/* </Switch> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
