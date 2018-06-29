import React, {Component} from 'react';
import './SignUp.css';
import logo from './logo-2.png'

class Home extends Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="navbar-brand" id="navbrand">
                        <img src={logo} alt="logo" class=""/>
                        <a class="navtext navbar-link" href="../../index.html">About The Kids</a>
                    </div>

                    <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

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

                <section id="mainDiv">
                    <p><strong>Are you a</strong></p>

                    <p><a href="./mentorform/mentorform.html" class="pg-link">mentor</a></p>
                    
                    <p>or</p>
                    
                    <a href="./studentform/studentform.html" class="pg-link">student</a>
                </section>
            </div>
        );
    }
}

export default Home;