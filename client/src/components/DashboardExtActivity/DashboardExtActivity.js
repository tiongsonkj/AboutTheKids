import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'; //need this because we need action to delete experience and then redirect to dashboard
import { deleteActivity } from '../../actions/profileActions';

class DashboardExtActivity extends Component {
    onDeleteClick(index) {
        // bring in deleteActivity() prop from below
        this.props.deleteActivity(index);
    }

    render() {
        const extActivity = this.props.extActivity.map((activity, index) => (
            <tr key={index}>
                <td>{activity}</td>
                <td><button onClick={this.onDeleteClick.bind(this, index)} className="btn btn-danger">Delete</button></td>
            </tr>
        ));
        return (
        <div>
            <h4 className="mb-4">Extra-Curricular Activities</h4>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>Extra-Curricular Activity</th>
                        <th></th>
                    </tr>
                    {extActivity}
                </thead>
            </table>
        </div>
        )
    }
};

// adding delete Activity as a proptype
DashboardExtActivity.propTypes = {
    deleteActivity: PropTypes.func.isRequired
}

export default connect(null, { deleteActivity })(DashboardExtActivity);
