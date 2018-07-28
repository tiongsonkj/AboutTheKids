import React from 'react';
import { Link } from 'react-router-dom';

const MentorProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
        <Link to="/edit-profile" className="btn btn-light">
            <i className="fas fa-user-circle text-info mr-1" /> Edit profile
        </Link>
        <Link to="/add-activity" className="btn btn-light">
            <i className="fab fa-black-tie text-info mr-1" /> 
            Add Current Extra-Curricular Activities
        </Link>
        <Link to="/add-interest" className="btn btn-light"> 
            <i className="fas fa-graduation-cap text-info mr-1" />
            Add Interests
        </Link>
    </div>
  );
};

export default MentorProfileActions;