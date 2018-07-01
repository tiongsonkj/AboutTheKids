import React, { Component } from 'react';
import Nav from '../../components/Nav';

class MentorForm extends Component {
  render() {
    return (
        <div className="mentorform">
            <Nav />
            <form action="POST">
            <div class="form-group col-md-6 mx-auto">
                <label for="firstName">First Name</label>
                <input id="firstName" type="firstName" class="form-control" placeholder="Enter first name"/>
            </div>
            <div class="form-group col-md-6 mx-auto">
                <label for="lastName">Last Name</label>
                <input id="lastName" type="lastName" class="form-control" placeholder="Enter last name" />
            </div>
            <div class="form-group col-md-6 mx-auto">
                <label for="email">Email</label>
                <input id="email" type="email" class="form-control" placeholder="john@1234.com"/>
            </div>
            <div class="form-group col-md-6 mx-auto">
                <label for="password">Password</label>
                <input id="password" type="password" class="form-control"/>
            </div>
            {/* <!-- for now, changed type="submit" to type="button" -->
            <!-- what this did was allow me to switch to the sample page -->
            <!-- but when sending this info to database, will need 'submit' -->
            <!-- then need to figure out how to send to new page of teacher profile -->
            <!-- onclick="location.href='./mentorsection/sampleteacher/sampleteacher.html';" --> */}
            <button id="makementor" type="button" className="btn btn-primary" onclick="location.href='./mentorsection/sampleteacher/sampleteacher.html';">
                Create Account
            </button>
            </form>
        </div>
    )
  }
}

export default MentorForm;