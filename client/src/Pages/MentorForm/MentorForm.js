import React, { Component } from 'react';
import Nav from '../../components/Nav';
import './MentorForm.css';
import axios from 'axios';

class MentorForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(){
        //Add input validation
        
        axios.post('http://localhost:8000/users/signup', {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.lastName,
                confirmPassword: this.state.confirmPassword,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
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
    return (
        <div className="mentorform">
            <Nav />

            <form action="POST">
            <div className="form-group col-md-6 mx-auto">
                <label htmlFor="firstName">First Name</label>
                <input 
                    id="firstName" 
                    type="firstName" 
                    className="form-control" 
                    placeholder="Enter first name" 
                    onChange = {this.onChange} 
                    value = {this.state.firstName}
                />
            </div>
            <div className="form-group col-md-6 mx-auto">
                <label htmlFor="lastName">Last Name</label>
                <input 
                    id="lastName" 
                    type="lastName" 
                    className="form-control" 
                    placeholder="Enter last name" 
                    onChange = {this.onChange} 
                    value = {this.state.lastName}
                />
            </div>
            <div className="form-group col-md-6 mx-auto">
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    type="email" 
                    className="form-control" 
                    placeholder="john@1234.com" 
                    onChange = {this.onChange} 
                    value = {this.state.email}
                />
            </div>
            <div className="form-group col-md-6 mx-auto">
                <label htmlFor="password">Password</label>
                <input 
                    id="password" 
                    type="password" 
                    className="form-control" 
                    onChange = {this.onChange} 
                    value = {this.state.password}
                />
            </div>
            <div className="form-group col-md-6 mx-auto">
                <label htmlFor="password2">Confirm Password</label>
                <input 
                    id="password2" 
                    type="password" 
                    className="form-control" 
                    onChange = {this.onChange} 
                    value = {this.state.confirmPassword}
                />
            </div>
            
            <button id="makementor" type="button" className="btn btn-primary" onClick={this.onSubmit}>
                Create Account
            </button>
            </form>
        </div>
    )
    }
}

export default MentorForm;