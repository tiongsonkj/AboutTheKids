import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ClassSchedule extends Component {

    render() {
        // this is loading in from Mentor Profile
        const { profile } = this.props;
        console.log(profile);
        
        const listOfClassSchedule = profile.class_schedule.map((specific_class, index) => (
            <tr key={index}>
                <th scope="row">{specific_class.period}</th>
                <td>{specific_class.class_name}</td>
                <td>{specific_class.room_number}</td>
            </tr>
        ))

        return (
            <div className="card">
                <div className="card-header">
                    Schedule
                </div>
                <div className="card-body">
                    <table className="table table-sm">
                        {/* <!--Table Head--> */}
                        <thead className="thead-light">
                            <tr>
                                <th>Period</th>
                                <th>className</th>
                                <th>Room #</th>
                            </tr>
                        </thead>
                        {/* <!-- End Table Head -->
                        <!-- Table Body --> */}
                        <tbody>
                            {listOfClassSchedule}
                        </tbody>
                        {/* <!-- End Table Body --> */}
                    </table>
                    {/* <!-- End Table --> */}
                </div>
            </div>
        )
    }
}

ClassSchedule.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ClassSchedule;
