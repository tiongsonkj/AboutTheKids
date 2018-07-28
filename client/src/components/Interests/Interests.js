import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Interests extends Component {
    render() {
        // this is loading in from Mentor Profile
        const { profile } = this.props;
        console.log(profile);
        const listOfExtActivities = profile.ext_activities.map((activity, index) => (
            <li key={index} className="list-group-item p-1">{activity}</li>
        ))
        return (
            <div className="card mt-4">
                <div className="card-header">
                    Interests
                    <a href="#" className="float-right btn-sm p-0">
                        <i className="far fa-edit"></i>
                    </a>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {listOfExtActivities}
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
