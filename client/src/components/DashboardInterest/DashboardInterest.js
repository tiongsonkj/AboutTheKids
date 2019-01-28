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
            <div key={index} className="row pt-3 justify-content-between">
                <div style={{ display: 'flex' }}>{interest}</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button onClick={this.onDeleteClick.bind(this, index)} className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>
        ));
        return (
        <div>
            <h4 className="my-4" >Interests</h4>
            <div className="row" style={{ borderBottom: '1px dotted grey'}}>
               
            </div>
            {interests}
        </div>
        )
    }
};

// adding delete Activity as a proptype
DashboardInterest.propTypes = {
    deleteInterest: PropTypes.func.isRequired
}

export default connect(null, { deleteInterest })(DashboardInterest);
