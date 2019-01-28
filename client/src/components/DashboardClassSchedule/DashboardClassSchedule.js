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
            <div key={specific_class._id} className="row pt-3 justify-content-between">
                <div style={{ display: 'flex', width: '25%' }}>{specific_class.period}</div>
                <div style={{ display: 'flex', width: '25%' }}>{specific_class.class_name}</div>
                <div style={{ width: '25%' }}>{specific_class.room_number}</div>                        
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '25%' }}>
                    <button onClick={this.onDeleteClick.bind(this, specific_class._id)} className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>
        ));
        return (
        <div>
            <h4 className="mb-4">Class Schedule</h4>
            <div className="row" style={{ borderBottom: '1px dotted grey' }}>
                
            </div>
            {classSchedule}
        </div>
        )
    }
};

// adding delete Activity as a proptype
DashboardClassSchedule.propTypes = {
    deleteClassSchedule: PropTypes.func.isRequired
}

export default connect(null, { deleteClassSchedule })(DashboardClassSchedule);
