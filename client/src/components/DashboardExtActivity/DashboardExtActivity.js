import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { withRouter } from 'react-router-dom'; //need this because we need action to delete experience and then redirect to dashboard
import { deleteActivity } from '../../actions/profileActions';

class DashboardExtActivity extends Component {
    onDeleteClick(index) {
        // bring in deleteActivity() prop from below
        this.props.deleteActivity(index);
    }

    render() {
        const extActivity = this.props.extActivity.map((activity, index) => (
            <div key={index} className="row pt-3 justify-content-between">
                <div style={{ display: 'flex' }}>{activity}</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button onClick={this.onDeleteClick.bind(this, index)} className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>
        ));
        return (
            <div>
                <h4 className="mb-4">Extra-Curricular Activities</h4>
                <div className="row" style={{ borderBottom: '1px dotted grey'}}>
                    
                </div>
                {extActivity}
            </div>
        )
    }
};

// adding delete Activity as a proptype
DashboardExtActivity.propTypes = {
    deleteActivity: PropTypes.func.isRequired
}

export default connect(null, { deleteActivity })(DashboardExtActivity);
