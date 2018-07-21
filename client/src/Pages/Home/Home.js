import React, {Component} from 'react';
// import './Home.css';
import calendar from '../../assets/img/2018-calendar.jpg';
import Nav from '../../components/Nav'

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        this.setState({ 
            votes: 11
        });
        console.log(this.state.votes);
    }

    render(){
        return(
            <div>
                <Nav />

                <div className="jumbotron jumbotron-fluid mb-0">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6">
                                <div className="card p-5">
                                    <h2 className="title-text text-uppercase"><strong>About</strong><br />The Kids</h2>
                                    <blockquote className="blockquote text-right mb-0"><p>"A mentor is someone who allows you to see the hope inside yourself"</p></blockquote>
                                </div>
                            </div>

                            <div id="cal-col" className="col-lg-6">
                                <h2 className="bg-warning p-2"><i className="fas fa-calendar-alt mx-2"></i><strong>Events Calendar</strong></h2>
                                <img id="calendar" src="../../../../static_ui/img/2018-calendar.jpg" alt="Interactive Calendar" />
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

{/* <div className="jumbotron jumbotron-fluid">
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
                </div> */}