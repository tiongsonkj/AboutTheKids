import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class CreateAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            school: '',
            password: '',
            password2: '',
            classOf: '',
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
        console.log(nextProps);
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
        console.log(newMentor);
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
        console.log(errors);

        return (
        <div className="create-account">            
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12 text-center my-4 title">
                        <h2>Create an Account</h2>
                        <p>Choose an option below</p>
                    </div>
                    <div id="accordion" className="col-sm-12">
                        <div className="card">
                            <div className="card-header text-center" id="headingOne">
                                <h3 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h3>I'm a Student</h3>
                                    </button>
                                </h3>
                            </div>

                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label className="text-left">First Name</label>
                                            <input type="text" className="form-control" placeholder="First Name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input type="text" className="form-control" placeholder="Last Name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="example@email.com" />
                                        </div>
                                        <div className="form-group">
                                            <label>Class of </label>
                                            <select>
                                                <option value="2018">2018</option>
                                                <option value="2019">2019</option>
                                                <option value="2020">2020</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                                <option value="2029">2029</option>
                                                <option value="2030">2030</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <input type="password" className="form-control" />
                                        </div>

                                        <button id="makestudent" type="button" className="btn btn-success" onClick={this.onSubmit}>
                                            Create Student Account
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header text-center" id="headingTwo">
                                <h3 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <h3>I'm a Mentor</h3>
                                    </button>
                                </h3>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
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
                                        <div className="form-group">
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
                                        <div className="form-group">
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
                                        <div className="form-group">
                                            <label htmlFor="school">School</label>
                                            <input 
                                                id="school" 
                                                type="school" 
                                                className={classnames('form-control form-control-lg', {
                                                    'is-invalid': errors.school
                                                })}   
                                                onChange = {this.onChange} 
                                                value = {this.state.school}
                                            />
                                            {errors.school && (
                                                <div className="invalid-feedback">{errors.school}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
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
                                        <div className="form-group">
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
                                        <button id="makementor" type="button" className="btn btn-success" onClick={this.onSubmit}>
                                            Create Mentor Account
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

CreateAccount.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth, //we brought in this auth state and mapped it to auth
    errors: state.errors //we brought in this error state and mapped it to errors, so if there are errors, it will add to this
});

export default connect(mapStateToProps, { registerUser})(withRouter(CreateAccount));

