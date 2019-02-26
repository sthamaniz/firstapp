import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as loginActionCreators from '../../redux/actioncreators/loginActionCreators';

import './Login.css';

class Login extends Component {

    constructor (props) {
        super();
        this.state = {
            username: '',
            password: '',
            loginError: ''
        };
    }

    handleChange = event => {
        this.setState({
            loginError: '',
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.username === '' || this.state.password === '') {
            this.setState({
                loginError: <div className="errorLogin">Please Fill all the details!</div>
            });
        } else {
            const formData = {
                username : this.state.username,
                password : this.state.password
            };

            this.props.login(formData);
        }
    }

    componentWillReceiveProps = nextProps => {
        const { loginDetails : { status, message } } = nextProps;

        if (status === 200) {
            this.props.history.push('/dashboard');
        } else if (status !== 200) {
            this.setState({
                loginError: <div className="errorLogin">{message}</div>
            });
        }
    }

    render() {
        return(
            <>
                <div className="login">
                    <div className="headingLogin">
                        login
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        {this.state.loginError}
                        <div className="usernameLogin">
                            <div className="usernameLogin-label">
                                <label>Username</label>
                            </div>
                            <div className="usernameLogin-input">
                                <input
                                autoFocus
                                name="username"
                                type="text"
                                value={this.state.username}
                                placeholder="Username"
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        
                        <div className="passwordLogin">
                            <div className="passwordLogin-label">
                                <label>Password</label>
                            </div>
                            <div className="passwordLogin-input">
                                <input
                                name="password"
                                type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="buttonLogin">
                            <button
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func,
    loginDetails: PropTypes.object
};

const mapStateToProps = state => {
    return {
        loginDetails : state.loginReducer.loginDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: formData => dispatch(loginActionCreators.login(formData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);