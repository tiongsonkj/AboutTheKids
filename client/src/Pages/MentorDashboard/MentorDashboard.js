import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import Spinner from '../../components/Spinner';

class MentorDashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    render() {
        console.log(this.props);
        const { mentor } = this.props.auth;
        console.log(this.props.profile);
        console.log(mentor);
        const { profile, loading } = this.props.profile;
       
        // initialize dashboard content variable
        let dashboardContent;

        // if profile is null or loading is true (looking at initial state in profile reducer)
        if(profile === null || loading) {
        dashboardContent = <Spinner />
        } else {
            // check if logged in user has profile data
            if(Object.keys(profile).length > 0) {
                dashboardContent = <h4>TODO: Display profile</h4>        
            } else {
                // User is logged in but has no profile
                dashboardContent = (
                <div>
                    <p className="lead text-muted">Welcome { mentor.first_name }</p>
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
                    {dashboardContent}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

MentorDashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

// brings in profile and auth state
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(MentorDashboard);