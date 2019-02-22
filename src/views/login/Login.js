import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { Cookies } from 'react-cookie';

import * as api from '../../api/api';

import './Login.css';

class Login extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies)
    };

    constructor (props) {
        super();
        this.state = {
            username: '',
            password: '',
            loginError: ''
        };
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

            api.auth(formData)
            .then(res => {
                if (res.status === 200) {
                    const { cookies } = this.props;
                    cookies.set('loggedInUser', res.data);

                    this.props.history.push('/dashboard');
                }
            }).catch(err => {
                this.setState({
                    loginError: <div className="errorLogin">Username/Password Error</div>
                });
            });

        }
    }

    handleChange = event => {
        this.setState({
            loginError: '',
            [event.target.name] : event.target.value
        });
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

export default Login;