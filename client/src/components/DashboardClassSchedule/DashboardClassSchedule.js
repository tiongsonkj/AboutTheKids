import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { withRouter } from 'react-router-dom'; //need this because we need action to delete experience and then redirect to dashboard
import { deleteClassSchedule } from '../../actions/profileActions';

class DashboardClassSchedule extends Component {
    onDeleteClick(id) {
        // bring in deleteActivity() prop from below
        this.props.deleteClassSchedule(id);
    }

    render() {
        const classSchedule = this.props.schedule.map((specific_class) => (
            <tr key={specific_class._id}>
                <td>{specific_class.period}</td>
                <td>{specific_class.class_name}</td>
                <td>{specific_class.room_number}</td>
                <td><button onClick={this.onDeleteClick.bind(this, specific_class._id)} className="btn btn-danger">Delete</button></td>
            </tr>
        ));
        return (
        <div>
            <h4 className="mb-4">Class Schedule</h4>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>Period</th>
                        <th>Class Name</th>
                        <th>Room #</th>
                    </tr>
                    {classSchedule}
                </thead>
            </table>
        </div>
        )
    }
};

// adding delete Activity as a proptype
DashboardClassSchedule.propTypes = {
    deleteClassSchedule: PropTypes.func.isRequired
}

export default connect(null, { deleteClassSchedule })(DashboardClassSchedule);
