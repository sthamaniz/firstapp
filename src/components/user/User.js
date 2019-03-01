import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from'react-redux';
import PropTypes, { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie'

import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import { Button, AppBar, Toolbar, Typography, Table, TableBody, TableCell, TableHead, Paper } from '@material-ui/core';

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
    table: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
      margin: 'auto'
    },
    button : {
        backgroundColor: '#b7b7b7',
        padding: '5px 15px',
        color: 'black'
    },
    buttonLink : {
        marginLeft: 'auto'
    }
  });


class User extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    componentDidMount = () => {
        const { cookies } = this.props;
        const accessToken = cookies.get('loginDetail').accesstoken;

        this.props.getUsers(accessToken);
    }

    render() {

        const { users, classes } = this.props;

        if (!users) return (<span>loading....</span>);

        return(
            <>
                <Sidebar />
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                Users
                            </Typography>
                            <Link to={'/users/add'} className={classes.buttonLink}>
                                <Button color="inherit" className={classes.button}>Add New User</Button>
                            </Link>
                        </Toolbar>
                    </AppBar>
                    <Paper className={classes.table}>
                        <Table>
                            <TableHead>
                            <TableRow>
                                <TableCell>S. No.</TableCell>
                                <TableCell>Full Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Mobile Number</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {users.map( (user, index) => (
                                <TableRow key={index}>
                                <TableCell>
                                    {++index}
                                </TableCell>
                                <TableCell>
                                    {user.firstName +' '+ user.middleName +' '+ user.lastName}
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.mobile}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </>
        );
    }
}

User.protoTypes = {
    getUsers: PropTypes.func,
    users: PropTypes.object,
    classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        users: state.userReducer.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: (accessToken) => dispatch(userActionCreators.getUsers(accessToken))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(
    withStyles(styles)(withCookies(User))
);