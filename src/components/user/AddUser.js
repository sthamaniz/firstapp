import React, { Component } from 'react';
import { connect } from'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Paper, TextField, Button } from '@material-ui/core';

import Sidebar from '../common/sidebar/Sidebar';

import * as userActionCreators from '../../redux/actioncreators/userActionCreators';


const styles = theme => ({
    root: {
        width: '80%',
        height: '100vh',
        backgroundColor: '#76abf3',
        float: 'right',
        padding: '10px'
    },
    addForm: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        margin: 'auto',
        padding: '10px'
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
})

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            mobile: '',
            addError: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const { username, password, firstName, middleName, lastName, email, mobile } = this.state;

       

        if (username === '' ||
            password === '' ||
            firstName === '' ||
            middleName === '' ||
            lastName === '' ||
            email === '' ||
            mobile === '' )
        {
            this.setState({
                addError: <div className="errorLogin">Please Fill all the details!</div>
            })
        } else {
            const formData = { username, password, firstName, middleName, lastName, email, mobile };
            this.props.addUser(formData);
        }

    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.user) {
            this.props.history.push('/users');
        }
    }

    render() {
        
        const { classes } = this.props;

        return (
            <>
                <Sidebar />
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                Add User
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Paper className={classes.addForm}>
                        <form onSubmit={this.handleSubmit}>
                            {this.state.addError}
                            <div className={classes.inputWrapper}>
                                <TextField
                                    
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
                                
                                label="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                className={classes.input}
                            />
                            </div>

                            <div className={classes.inputWrapper}>
                                <TextField
                                    
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    className={classes.input}
                                />
                            </div>

                            <div className={classes.inputWrapper}>
                                <TextField
                                    
                                    label="Middle Name"
                                    name="middleName"
                                    type="text"
                                    value={this.state.middleName}
                                    onChange={this.handleChange}
                                    className={classes.input}
                                />
                            </div>

                            <div className={classes.inputWrapper}>
                                <TextField
                                    
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                    className={classes.input}
                                />
                            </div>

                            <div className={classes.inputWrapper}>
                                <TextField
                                    
                                    label="E-mail"
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    className={classes.input}
                                />
                            </div>

                            <div className={classes.inputWrapper}>
                                <TextField
                                    
                                    label="Mobile"
                                    name="mobile"
                                    type="text"
                                    value={this.state.mobile}
                                    onChange={this.handleChange}
                                    className={classes.input}
                                />
                            </div>

                            <div className={classes.submitButton}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    >
                                    Add User
                                </Button>
                            </div>
                        </form>
                    </Paper>
                </div>
            </>
        );
    }
}

AddUser.propTypes = {
    addUser: PropTypes.func,
    user: PropTypes.object,
    classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
          user: state.userReducer.user  
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: formData => dispatch(userActionCreators.addUser(formData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddUser));