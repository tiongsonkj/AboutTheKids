import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { addClass } from '../../actions/profileActions';

class AddClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            period: '1',
            class_name: '',
            room_number: '',
            errors: {},
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.onCheck = this.onCheck.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('submit');
        
        const classData = {
            period: this.state.period,
            class_name: this.state.class_name,
            room_number: this.state.room_number
        };
        console.log(classData);
        
        this.props.addClass(classData, this.props.history);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { errors } = this.state;
        console.log(errors);
        console.log(this.state);

        return (
            <div className="add-class">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/mentordashboard" className="btn btn-light">
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">Add Class</h1>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="periodgroup">Period</label>
                                    <select name="period" className="form-control" id="periodgroup" value={this.state.period} onChange={this.onChange}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                    </select>
                                </div>
                                <input 
                                    className={classnames('form-control form-control-lg'
                                        
                                    )} 
                                    placeholder="* Class Name" 
                                    name="class_name"
                                    value={this.state.class_name}
                                    onChange={this.onChange}
                                    //required //this is html required checkin. but we will not need it because we will have our own checkin
                                />
                                <input 
                                    className={classnames('form-control form-control-lg'
                                        
                                    )} 
                                    placeholder="* Room Number" 
                                    name="room_number"
                                    value={this.state.room_number}
                                    onChange={this.onChange}
                                />
                                {/* {info && <small className="form-text text-muted">{info}</small>} */}
                        
                                {/* never seen this before but from what it does (he said it was javascript syntax), if theres errors.name, then in parenthesis include that div. This is what gives me the small red feedback of the error */}
                                {/* {errors && (
                                    <div className="invalid-feedback">{errors}</div>
                                )} */}
                                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

AddClass.propTypes = {
    addClass: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

// this is where we bring in the states
// we get the states from the reducers
const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { addClass })(withRouter(AddClass));