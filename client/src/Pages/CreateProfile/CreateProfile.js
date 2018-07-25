import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createProfile } from '../../actions/profileActions';

// import classnames from 'classnames';

// SIDE NOTE
// ===============
// For some reason, was not displaying. But was able to get it to display by 
// putting it inside of a div with class container. 
// Along with the register, login, and dashboard page. Not sure why. need to review

class CreateProfile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            bio: '',
            interests: '',
            ext_activities: '',
            errors: {}
        }

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    // fill the state of errors
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

        console.log(nextProps);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const profileData = {
            bio: this.state.bio,
            interests: this.state.interests,
            ext_activities: this.state.ext_activities
        }

        this.props.createProfile(profileData, this.props.history);
    }
    
    render() {
        // const { errors } = this.state;
        console.log(this.props);
        console.log(this.state);

        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Create your profile</h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <textarea
                                        className='form-control form-control-lg' //will need to fix validation soon
                                        placeholder="Bio"
                                        name="bio"
                                        value={this.state.bio}
                                        onChange={this.onChange}
                                    />
                                    <textarea
                                        className='form-control form-control-lg' //will need to fix validation soon
                                        placeholder="Interests"
                                        name="interests"
                                        value={this.state.interests}
                                        onChange={this.onChange}
                                    />
                                    <textarea
                                        className='form-control form-control-lg' //will need to fix validation soon
                                        placeholder="Extra Curricular Activities"
                                        name="ext_activities"
                                        value={this.state.ext_activities}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired, //profile state
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));