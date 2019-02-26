import React, { Component } from 'react';
import { connect } from'react-redux';
import PropTypes from 'prop-types';

import Sidebar from '../common/sidebar/Sidebar';

import * as userActionCreators from '../../redux/actioncreators/userActionCreators';

import './User.css';

class User extends Component {

    componentDidMount = () => {
        this.props.getUsers();
    }

    render() {

        const { users } = this.props;

        if (!users) return (<span>loading....</span>);

        return(
            <>
                <Sidebar />
                <div className="user">
                    <button>Add New User</button>
                    <table border="1">
                        <tbody>
                            <tr>
                                <td>Full Name</td>
                                <td>Email</td>
                                <td>Mobile Number</td>
                            </tr>
                            {users.map((user, index) => {
                                return (<tr key={index}>
                                            <td>{user.firstName +' '+ user.middleName +' '+ user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.mobile}</td>
                                        </tr>)
                            }
                            )}
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