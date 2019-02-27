import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as loginActionCreators from '../../redux/actioncreators/loginActionCreators';

import { AppBar, Toolbar, Typography, TextField, Button } from '@material-ui/core';

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
            console.log(nextProps.loginDetails);
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
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                LOGIN
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <form onSubmit={this.handleSubmit}>
                        {this.state.loginError}
                        <div className="usernameLogin">
                            <TextField
                                required
                                label="User Name"
                                name="username"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </div>
                        
                        <div className="passwordLogin">
                            <TextField
                                required
                                label="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="buttonLogin">
                            <Button 
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Login
                            </Button>
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