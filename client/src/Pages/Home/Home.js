import React, {Component} from 'react';
import './Home.css';
import calendar from '../../assets/img/2018-calendar.jpg';
import Nav from '../../components/Nav'

class Home extends Component{
    render(){
        return(
            <div>
                <Nav />

                <div className="jumbotron jumbotron-fluid">
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-7 mx-auto pt-5">
                                <br/>
                                <br/>
                                <div className="row">
                                    <p className="title-text text-uppercase"><strong>About</strong></p>
                                </div>
                                <div className="row">
                                    <p className="title-text text-uppercase">The Kids</p>
                                </div>
                                
                            </div>
                            <div id="cal-col" className="col-lg-5">
                                <h1><strong>Events</strong></h1>
                                <img id="calendar" src={calendar} alt="Interactive Calendar"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row quote">
                        <h1>"A mentor is someone who allows you to see the hope inside yourself."</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;