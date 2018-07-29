import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        // if logged in
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/mentordashboard'); //send to dashboard
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/mentordashboard');
        }

        const errorObjLength = Object.keys(nextProps.errors).length;
        if(errorObjLength === 0) {
            this.setState({errors: nextProps.errors})
        } else {
            this.setState({errors: nextProps.errors.errors})
        }
    }

    onChange(event) {
        event.preventDefault();

        let fields = this.state;
        fields[event.target.name] = event.target.value;
    
        this.setState({
            fields
        })
    }

    onSubmit(e) {
        e.preventDefault();

        // field that will send to backend.
        // this matches my validation/register.js page
        // make sure fields match and spelled correctly
        const userData = {
            email: this.state.email,
            password: this.state.password,
        }
        // calling in axios action from authAction.js
        this.props.loginUser(userData);
    }

    // NEED TO FIX THIS PAGE, IF EMAIL DOES NOT EXIST IN DB THEN NEED TO CREATE ERROR
    render() {
        const { errors } = this.state;

        return (
        <div className="login">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <div className="col-lg-12 text-center my-4 title">
                        <h2>Log In</h2>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.email
                                })} 
                                placeholder="Email Address" 
                                name="email" 
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                            {errors.email && (
                                <div className="invalid-feedback">{errors.email}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.password
                                })} 
                                placeholder="Password" 
                                name="password" 
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            {errors.password && (
                                <div className="invalid-feedback">{errors.password}</div>
                            )}
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
};

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
