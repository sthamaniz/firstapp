import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import { withStyles } from '@material-ui/core/styles';
import { Paper, AppBar, Toolbar, Typography, TextField, Button } from '@material-ui/core';

import * as loginActionCreators from '../../redux/actioncreators/loginActionCreators';


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

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

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

            this.setState({
                loginError: <div className="errorLogin">Loggin in....</div>
            })

            this.props.login(formData);
        }
    }

    componentWillReceiveProps = nextProps => {
        const { cookies } = this.props;

        const { loginDetails } = nextProps;

        if (loginDetails.status === 200) {
            cookies.set('loginDetail', loginDetails);

            this.props.history.push('/dashboard');
        } else if (loginDetails.status !== 200) {
            this.setState({
                loginError: <div className="errorLogin">{loginDetails.message}</div>
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

export default connect(
    mapStateToProps, mapDispatchToProps
)(
    withStyles(styles)(withCookies(Login))
);