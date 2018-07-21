import React, {Component} from 'react';
// import './SignUp.css';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';

class Home extends Component{
    render(){
        return(
            <div>
                <Nav />

                <section id="mainDiv">
                    <p><strong>Are you a</strong></p>

                    <Link to="/register" className="pg-link">mentor</Link>
                    
                    <p>or</p>
                    
                    <a href="./studentform/studentform.html" className="pg-link">student</a>
                </section>
            </div>
        );
    }
}

export default Home;