import React, { Component } from "react";
import calendar from "../../assets/img/calendar2.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      votes: 11
    });
    console.log(this.state.votes);
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6" />
              <div className="col-lg-6">
                <div className="card p-5" id="quote">
                  <h2 className="title-text text-uppercase text-right">
                    <strong>About</strong>
                    <br />The Kids
                  </h2>
                  <blockquote className="blockquote text-right mb-0">
                    <p>
                      "A mentor is someone who allows you to see the hope inside
                      yourself"
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div id="cal-col" className="col-lg-6">
              <div className="card">
                <div className="card-header py-1">
                  <h3>
                    <i className="fas fa-calendar-alt mx-2" />
                    Events Calendar
                  </h3>
                </div>
                <div className="card-body p-0 m-auto" />
                <img
                  id="calendar"
                  className="m-auto"
                  src={calendar}
                  alt="Interactive Calendar"
                />
              </div>
            </div>

            {/* <div id="cal-col" className="col-lg-6">
                <h2 className="bg-warning p-2">
                  <i className="fas fa-calendar-alt mx-2" />
                  <strong>Events Calendar</strong>
                </h2>
                <img id="calendar" src={calendar} alt="Interactive Calendar" />
              </div>
            </div> */}
            <div className="col-lg-6" id="success-stories">
              <div className="card">
                <div className="card-header bg-dark">
                  <h3 className="text-white">Success Stories</h3>
                </div>

                <div
                  id="success-bg"
                  className="card card-body d-flex justify-content-center"
                >
                  <h1 className="text-white bg-secondary p-2">
                    <strong>Coming soon!</strong>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
