import React, {Component} from 'react';
import './Home.css';
import logo from './logo-2.png'
import calendar from './2018-calendar.jpg';

class Home extends Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="navbar-brand" id="navbrand">
                        <img src={logo} alt="logo" class=""/>
                        <a class="navtext navbar-link" href="#">About The Kids</a>
                    </div>

                    <div class="navbar-collapse collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto justify-content-end">
                            <li class="nav-item px-2">
                                <a class="navtext navbar-link" href="pages/teacherstudent/teacherstudent.html">Create Account</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="navtext navbar-link" href="pages/teacherstudent/teacherstudent.html">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div class="jumbotron jumbotron-fluid">
                    <div class="container my-auto">
                        <div class="row">
                            <div class="col-lg-7 mx-auto pt-5">
                                <br/>
                                <br/>
                                <div class="row">
                                    <p class="title-text text-uppercase"><strong>About</strong></p>
                                </div>
                                <div class="row">
                                    <p class="title-text text-uppercase">The Kids</p>
                                </div>
                                
                            </div>
                            <div id="cal-col" class="col-lg-5">
                                <h1><strong>Events</strong></h1>
                                <img id="calendar" src={calendar} alt="Interactive Calendar"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row quote">
                        <h1>"A mentor is someone who allows you to see the hope inside yourself."</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;