import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { addInterest } from '../../actions/profileActions';

class AddInterest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interest: '',
            current: false, //current job or experience
            errors: {},
            disabled: false  // disabled goes true if they click current checkbox
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
        
        const interestData = this.state.interest;
        
        this.props.addInterest(interestData, this.props.history);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { errors } = this.state;
        console.log(errors);
        console.log(this.state);

        return (
            <div className="add-interest">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/mentordashboard" className="btn btn-light">
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">Add Your Interests!</h1>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>
                                <textarea 
                                    className={classnames('form-control form-control-lg'
                                        
                                    )} 
                                    placeholder="* Interest" 
                                    name="interest"
                                    value={this.state.interest}
                                    onChange={this.onChange}
                                    //required //this is html required checkin. but we will not need it because we will have our own checkin
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

AddInterest.propTypes = {
    addInterest: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

// this is where we bring in the states
// we get the states from the reducers
const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { addInterest })(withRouter(AddInterest));