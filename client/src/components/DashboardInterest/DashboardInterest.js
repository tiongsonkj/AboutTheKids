import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { withRouter } from 'react-router-dom'; //need this because we need action to delete experience and then redirect to dashboard
import { deleteInterest } from '../../actions/profileActions';

class DashboardInterest extends Component {
    onDeleteClick(index) {
        // bring in deleteInterest() prop from below
        this.props.deleteInterest(index);
    }

    render() {
        // this.props.interest is coming in from where this component will be used which is in MentorDashboard
        const interests = this.props.interest.map((interest, index) => (
            <tr key={index}>
                <td>{interest}</td>
                <td><button onClick={this.onDeleteClick.bind(this, index)} className="btn btn-danger">Delete</button></td>
            </tr>
        ));
        return (
        <div>
            <h4 className="mb-4">Interests</h4>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>Interest</th>
                        <th></th>
                    </tr>
                    {interests}
                </thead>
            </table>
        </div>
        )
    }
};

// adding delete Activity as a proptype
DashboardInterest.propTypes = {
    deleteInterest: PropTypes.func.isRequired
}

export default connect(null, { deleteInterest })(DashboardInterest);
