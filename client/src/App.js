import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/Home" component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
