import React, {Component} from 'react';
import './SignUp.css';
import logo from './logo-2.png'

class Home extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand" id="navbrand">
                        <img src={logo} alt="logo" className=""/>
                        <a className="navtext navbar-link" href="../../index.html">About The Kids</a>
                    </div>

                    <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                    <div className="navbar-collapse collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto justify-content-end">
                            <li className="nav-item px-2">
                                <a className="navtext navbar-link" href="pages/teacherstudent/teacherstudent.html">Create Account</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="navtext navbar-link" href="pages/teacherstudent/teacherstudent.html">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <section id="mainDiv">
                    <p><strong>Are you a</strong></p>

                    <p><a href="./mentorform/mentorform.html" className="pg-link">mentor</a></p>
                    
                    <p>or</p>
                    
                    <a href="./studentform/studentform.html" className="pg-link">student</a>
                </section>
            </div>
        );
    }
}

export default Home;