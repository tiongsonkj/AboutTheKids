import React, { Component } from 'react';
import Nav from '../../components/Nav';
import './Mentor.css';
import axios from 'axios';

class MentorForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
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
        <div>
            <Nav />

            <div class="container">
                <div class="row">

                    <div class="card col-md-6 mt-5 ml-3">
                        <div class="card-header">
                            Mentor (Fremd High School)
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <img width="150px" height="200px" src="../../../../../img/mentorheadshot.jpg" alt="profile pic"/>
                                </div>
            
                                <div class="col-md-8">
                                    <p>John Doe, <a href="#">jdoe@d211.org</a></p>
                                    <hr/>
                                    <p>1000 S. Quentin Rd,</p>
                                    <p>Palatine, IL 60067</p>
                                    <hr/>
                                    <p>847-755-2600</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card col-md-10 ml-3 pb-5 mt-3">
                        <div class="card-header">
                                Profile
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-8">
                                    Teacher

                                    <a href="../teacherlist/teacherlist.html">Link to list of students</a>
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

export default MentorForm;