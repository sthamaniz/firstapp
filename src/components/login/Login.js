import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Paper, AppBar, Toolbar, Typography, TextField, Button } from '@material-ui/core';

import * as loginActionCreators from '../../redux/actioncreators/loginActionCreators';

import './Login.css';


const styles = theme => ({
    root: {
        margin: 'auto',
        width: '400px',
        border: '1px solid black',
        marginTop: '100px'
    },
    inputWrapper: {
        padding: '10px 20px'
    },
    input : {
        width: '100%'
    },
    submitButton: {
        padding: '10px 20px'
    }
});

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

        const { classes } = this.props;

        return(
            <>
                <Paper className={classes.root}>
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                LOGIN
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <form onSubmit={this.handleSubmit}>
                        {this.state.loginError}
                        <div className={classes.inputWrapper}>
                            <TextField
                                required
                                label="User Name"
                                name="username"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleChange}
                                className={classes.input}
                            />
                        </div>
                        
                        <div className={classes.inputWrapper}>
                            <TextField
                                required
                                label="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                className={classes.input}
                            />
                        </div>

                        <div className={classes.submitButton}>
                            <Button 
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </Paper>
            </>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func,
    loginDetails: PropTypes.object,
    classes: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));