import React, { Component } from 'react'
import Nav from '../../components/Nav';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        event.preventDefault();

        let fields = this.state;
        fields[event.target.id] = event.target.value;
        this.setState({
            fields
        })
    }

    render() {
        return (
        <div className="login">
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Log In</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className='form-control form-control-lg'
                                placeholder="Email Address" 
                                name="email" 
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className='form-control form-control-lg'
                                placeholder="Password" 
                                name="password" 
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
};

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
