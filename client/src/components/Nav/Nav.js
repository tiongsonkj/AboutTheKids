import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand" id="navbrand">
            <img src="../../img/logo-2.png" alt="logo" className=""/>
            <a className="navtext navbar-link" href="#">About The Kids</a>
        </div>

         {/* <!-- this is the button for when the page shrinks (hamburger) --> */}
         <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

        <div className="navbar-collapse collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto justify-content-end">
                <li className="nav-item px-2">
                    <a className="navtext navbar-link" href="pages/teacherstudent/teacherstudent.html">Create Account</a>
                </li>
                <li className="nav-item px-2">
                    <a className="navtext navbar-link" href="pages/teacherstudent/teacherstudent.html">Sign In</a>
                </li>
            </ul>
        </div>
    </div>
    )
  }
}

export default Nav;