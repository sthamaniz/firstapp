import React, { Component } from 'react';
import { connect } from'react-redux';
import PropTypes from 'prop-types';

import Sidebar from '../../components/sidebar/Sidebar';

import * as userActionCreators from '../../redux/actioncreators/userActionCreators';

import './User.css';

class User extends Component {

    constructor(props) {
        super();
        this.state = {
            users : null,
            userData: ''
        }
    } 

    componentWillMount = () => {
        this.props.getUsers();
    }

    componentWillReceiveProps = nextProps => {
        const userList = nextProps.users.forEach(userData => {
            <tr>
                <td>{userData.firstName + userData.middleName + userData.lastName}</td>
                <td>{userData.email}</td>
                <td>{userData.mobile}</td>
            </tr>
        });

        this.setState({
            users: userList
        })
    }

    render() {
        return(
            <>
                <Sidebar />
                <div className="user">
                    <table border="1">
                        <tbody>
                            <tr>
                                <td>Full Name</td>
                                <td>Email</td>
                                <td>Mobile Number</td>
                            </tr>
                            {this.state.users}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

User.protoTypes = {
    getUsers: PropTypes.func,
    users: PropTypes.object
}

const mapStateToProps = state => {
    return {
        users: state.userReducer.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(userActionCreators.getUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);