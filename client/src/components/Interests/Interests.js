import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class Interests extends Component {
    render() {
        // this is loading in from Mentor Profile
        const { profile } = this.props;
        console.log(profile);
        const listOfInterests = profile.interests.map((interest, index) => (
            <li key={index} className="list-group-item p-1">{interest}</li>
        ))
        return (
            <div className="card mt-4">
                <div className="card-header">
                    Extracurricular Activities
                    <a href="" className="float-right btn-sm p-0">
                        <i className="far fa-edit"></i>
                    </a>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {/* need to use span, if I didn't use span there would be an error */}
                        {isEmpty(profile.interests) ? (<span>Please add an interest!</span>) : (<span>{listOfInterests}</span>)}
                    </ul>
                </div>
            </div>
        )
    }
}

Interests.propTypes = {
    profile: PropTypes.object.isRequired
}

export default Interests;
