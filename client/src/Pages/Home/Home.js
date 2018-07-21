import React, {Component} from 'react';
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
                                <img id="calendar" src={calendar} alt="Interactive Calendar" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;