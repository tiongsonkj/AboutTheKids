import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, getCurrentMentor } from '../../actions/profileActions';
import Spinner from '../../components/Spinner';
import calendar from '../../assets/img/calendar.png';
import ExtraCurricularActivities from '../../components/ExtraCurricularActivities/ExtraCurricularActivities';
import Interests from '../../components/Interests/Interests';

class MentorProfile extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
        this.props.getCurrentMentor();
    }

    render() {
        console.log(this.props);
        const { mentor } = this.props.auth;
        const currentMentor = this.props.profile.mentor;
        const { profile, loading } = this.props.profile;

        // initialize dashboard content variable
        let dashboardContent;

        // if profile is null or loading is true (looking at initial state in profile reducer)
        if(profile === null || loading) {
        dashboardContent = <Spinner />
        } else {
            // check if logged in user has profile data
            if(Object.keys(profile).length > 0) {
                dashboardContent = (
                    <div className="row">
                        {/* // <!-- Mentor Info Card --> */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    Your Profile
                                </div>
            
                                <div className="card-body">
                                    <div className="row">
                                        {/* <!-- Mentor Image --> */}
                                        <div className="col-md-4 pr-0">
                                            <img src={mentor.avatar} alt="temporary profile pic" className="img-fluid" />
                                        </div>
                                        {/* <!-- Info Section --> */}
                                        <div className="col-md-8 list">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item p-1">{mentor.first_name} {mentor.last_name}</li>
                                                <li className="list-group-item p-1">
                                                    {currentMentor.email ? currentMentor.email : 'Please put in your email'}
                                                </li>
                                                <li className="list-group-item p-1">
                                                    {mentor.num ? mentor.num : 'Please put in your office number'}
                                                </li>
                                                <li className="list-group-item p-1">
                                                    {mentor.room ? mentor.room : 'Please put in your room number'}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div className="mt-4">
                                <div className="card">
                                    <div className="card-header">
                                        Schedule
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-sm">
                                            {/* <!--Table Head--> */}
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>Period</th>
                                                    <th>className</th>
                                                    <th>Room #</th>
                                                </tr>
                                            </thead>
                                            {/* <!-- End Table Head -->
                                            <!-- Table Body --> */}
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>P.E.</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Math</td>
                                                    <td>247</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>History</td>
                                                    <td>214</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Lunch</td>
                                                    <td>Cafe</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td>Biology</td>
                                                    <td>174</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
                                                    <td>English</td>
                                                    <td>108</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">7</th>
                                                    <td>Art</td>
                                                    <td>47</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">8</th>
                                                    <td>Resource</td>
                                                    <td>116</td>
                                                </tr>
                                            </tbody>
                                            {/* <!-- End Table Body --> */}
                                        </table>
                                        {/* <!-- End Table --> */}
                                    </div>
                                </div>
                                <div className="card mt-4 mb-4">
                                    <div className="card-header">
                                        Calendar
                                    </div>
                                    <div className="card-body">
                                        <img src={calendar} alt="student calendar" width="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        {/* // <!-- Right side of profile --> */}
                        <div className="col-lg-6">
                            {/* <!-- Assigned Students --> */}
                            <div className="card">
                                <div className="card-header">
                                    Assigned Students
                                </div>
                                <div className="card-body">
                                    {/* <!--Table--> */}
                                    <table id="scoreboard" className="table">
                                        {/* <!--Table Head--> */}
                                        <thead className="thead-light">
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Score</th>
                                            </tr>
                                        </thead>
                                        {/* <!-- End Table Head --> */}
                                        {/* <!-- Table Body --> */}
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>
                                                    <a href="studentPortal.html">Mark Otto</a>
                                                </td>
                                                <td>54</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>
                                                    <a href="studentPortal.html">Jacob Thornton</a>
                                                </td>
                                                <td>48</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>
                                                    <a href="studentPortal.html">Larry Bird</a>
                                                </td>
                                                <td>46</td>
                                            </tr>
                                        </tbody>
                                        {/* <!-- End Table Body --> */}
                                    </table>
                                    {/* <!-- End Table --> */}
            
                                </div>
                            </div>
                            
                            {/* <!-- Bio --> */}
                            <div className="card mt-4">
                                <div className="card-header">
                                    Bio
                                    <a href="" className="float-right btn-sm p-0">
                                        <i className="far fa-edit"></i>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <p>{profile.bio}</p>
                                </div>
                            </div>
            
                            {/* <!-- ExtraCurricularActivities --> */}
                            <ExtraCurricularActivities profile={profile}/>
            
                            {/* <!-- Interests --> */}
                            <Interests profile={profile}/>
                        </div>
                    </div>
                )       
            } else {
                // User is logged in but has no profile
                dashboardContent = (
                <div>
                    <p className="lead text-muted">Welcome { mentor.first_name }</p>
                    <p>You have not yet setup a profile, please add some info</p>
                    <Link to="/create-profile" className="btn btn-lg btn-warning">
                    Create Profile
                    </Link>
                </div>
                );
            }
        }

        return (
            <div className="mentorprofile">
                <div className="container">

                <h1 className="display-4 mt-4">
                    Mentor Profile
                    <button><Link to="/mentordashboard">Go to Dashboard</Link></button>
                </h1>
                
                {dashboardContent}

                </div>
            </div>
        )
    }
}

MentorProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    getCurrentMentor: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

// brings in profile and auth state
const mapStateToProps = state => ({
    mentor: state.mentor,
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, getCurrentMentor })(MentorProfile);