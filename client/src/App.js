import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import MentorForm from './Pages/MentorForm';
import Mentor from './Pages/Mentor';

// import Mentor from './Pages/Mentor'
// import Student from './Pages/Student'

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
