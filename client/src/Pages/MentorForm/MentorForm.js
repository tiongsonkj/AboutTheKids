import React, { Component } from 'react';
import Nav from '../../components/Nav';
// import './MentorForm.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux'; // connecting redux to this component
import { registerUser } from '../../actions/authActions'; // import action we want to use


class MentorForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            school: '',
            password: '',
            password2: '',
            errors: {}
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        // if logged in
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard'); //send to dashboard
        }
    }

    // runs when component receives new properties
    componentWillReceiveProps(nextProps) { 
        //checking for errors in errorsProp
        // errors will now be in state
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors.errors}) 
            //.errors.errors because for some reason the errors object is within another set of brackets
        } 
    }

    onSubmit(e){
        e.preventDefault();

        // field that will send to backend.
        // this matches my validation/register.js page
        // make sure fields match and spelled correctly
        const newMentor = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,            
            email: this.state.email,
            school: this.state.school,
            password: this.state.password,
            password2: this.state.password2
        }

        // any action we bring in is called through props because its stored in props
        // allow us to use this.props.history to redirect within that action
        this.props.registerUser(newMentor, this.props.history);

        // can check this object in console        
        // console.log(newMentor);
    }

    onChange(event){
        event.preventDefault();

        let fields = this.state;
        fields[event.target.id] = event.target.value;
        this.setState({
            fields
        })
    }

    render() {
        const { errors } = this.state; 
        return (
            <div className="register">
                <Nav />

                <form onSubmit={this.onSubmit}>
                    <div className="form-group col-md-6 mx-auto">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            id="firstName" 
                            type="firstName" 
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.first_name
                            })} 
                            placeholder="Enter first name" 
                            onChange = {this.onChange} 
                            value = {this.state.firstName}
                        />
                        {errors.first_name && (
                            <div className="invalid-feedback">{errors.first_name}</div>
                        )}
                    </div>
                    <div className="form-group col-md-6 mx-auto">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            id="lastName" 
                            type="lastName" 
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.last_name
                            })} 
                            placeholder="Enter last name" 
                            onChange = {this.onChange} 
                            value = {this.state.lastName}
                        />
                        {errors.last_name && (
                            <div className="invalid-feedback">{errors.last_name}</div>
                        )}
                    </div>
                    <div className="form-group col-md-6 mx-auto">
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email" 
                            type="email" 
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.email
                            })}  
                            placeholder="john@1234.com" 
                            onChange = {this.onChange} 
                            value = {this.state.email}
                        />
                        {errors.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                        )}
                    </div>
                    <div className="form-group col-md-6 mx-auto">
                        <label htmlFor="school">School</label>
                        <input 
                            id="school" 
                            type="school" 
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.school
                            })}   
                            placeholder="Fremd High School" 
                            onChange = {this.onChange} 
                            value = {this.state.school}
                        />
                        {errors.school && (
                            <div className="invalid-feedback">{errors.school}</div>
                        )}
                    </div>
                    <div className="form-group col-md-6 mx-auto">
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            type="password" 
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.password
                            })} 
                            onChange = {this.onChange} 
                            value = {this.state.password}
                        />
                        {errors.password && (
                            <div className="invalid-feedback">{errors.password}</div>
                        )}
                    </div>
                    <div className="form-group col-md-6 mx-auto">
                        <label htmlFor="password2">Confirm Password</label>
                        <input 
                            id="password2" 
                            type="password" 
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.password2
                            })}  
                            onChange = {this.onChange} 
                            value = {this.state.password2}
                        />
                        {errors.password2 && (
                            <div className="invalid-feedback">{errors.password2}</div>
                        )}
                    </div>
                    
                    <button id="makementor" type="button" className="btn btn-primary" onClick={this.onSubmit}>
                        Create Account
                    </button>
                </form>
            </div>
        )
    }
}

MentorForm.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth, //we brought in this auth state and mapped it to auth
    errors: state.errors //we brought in this error state and mapped it to errors, so if there are errors, it will add to this
});

export default connect(mapStateToProps, { registerUser})(withRouter(MentorForm));