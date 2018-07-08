import React, { Component } from 'react';
import logo from '../../assets/img/logo-2.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';


class Nav extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated, mentor } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                {/* dont need <Link> because page will not be going anywhere */}
                <a 
                        href="" 
                        onClick={this.onLogoutClick.bind(this)} 
                        className="nav-link">
                        <img 
                            className="rounded-circle"
                            src={mentor.avatar} 
                            alt={mentor.name}
                            style={{ width: '25px', marginRight: '5px' }}
                            title="You must have a Gravatar connected to your email to display an image"/>
                        Logout
                    </a>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto justify-content-end">
                <li className="nav-item px-2">
                    <a className="navtext navbar-link" href="pages/teacherstudent/teacherstudent.html">Create Account</a>
                </li>
                <li className="nav-item px-2">
                    <Link className="navtext navbar-link" to="/login">Sign In</Link>
                </li>
            </ul>
        );

        return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand" id="navbrand">
                <img src={logo} alt="logo" className=""/>
                <Link className="navtext navbar-link" to="/">About The Kids</Link>
            </div>

            {/* <!-- this is the button for when the page shrinks (hamburger) --> */}
            <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

            <div className="navbar-collapse collapse" id="navbarResponsive">
                {isAuthenticated ? authLinks : guestLinks}
            </div>
        </div>
        )
    }
}

Nav.propTypes = {
    auth: PropTypes.object
}

// coming from rootReducer
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Nav);