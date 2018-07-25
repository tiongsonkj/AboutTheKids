import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentMentor, getCurrentProfile } from '../../actions/profileActions';
import Spinner from '../../components/Spinner';
import MentorProfileActions from './MentorProfileActions'; 

class MentorDashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
        this.props.getCurrentMentor();        
    }

    // onDeleteClick(e) {
    //     this.props.deleteAccount();
    // }
    
    render() {
        console.log(this.props);
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;
        console.log(profile);
        const currentMentor = this.props.profile.mentor;


        // initialize dashboard content variable
        let mentorDashboardContent;

        // if profile is null or loading is true (looking at initial state in profile reducer)
        if(profile === null || loading) {
            mentorDashboardContent = <Spinner />
        } else {
            // check if logged in user has profile data
            if(Object.keys(profile).length > 0) {
                mentorDashboardContent = (
                    <div>
                        <p className="lead text-muted">
                            Welcome <Link to ="/mentorprofile">{ currentMentor.first_name }</Link>
                        </p>            
                        <MentorProfileActions />
                        TODO: exp and education
                        {/* <Experience experience={profile.experience} /> */}
                        {/* <Education education={profile.education} /> */}
                        <div style={{ marginBottom: '60px' }} />
                        {/* <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete My Account</button> */}
                    </div>
                )       
            } else {
                // User is logged in but has no profile
                mentorDashboardContent = (
                    <div>
                        <p className="lead text-muted">Welcome { user.name }</p>
                        <p>You have not yet setup a profile, please add some info</p>
                        <Link to="/create-profile" className="btn btn-lg btn-info">
                        Create Profile
                        </Link>
                    </div>
                );
            }
        }
        return (
            <div className="mentordashboard">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1 className="display-4">Dashboard</h1>
                    {mentorDashboardContent}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

MentorDashboard.propTypes = {
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

export default connect(mapStateToProps, { getCurrentMentor, getCurrentProfile })(MentorDashboard);