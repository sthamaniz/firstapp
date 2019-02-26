import React, { Component } from 'react';
import { connect } from'react-redux';
import PropTypes from 'prop-types';

import Sidebar from '../common/sidebar/Sidebar';

import * as userActionCreators from '../../redux/actioncreators/userActionCreators';

import './User.css';

class User extends Component {

    constructor(props) {
        super();
        this.state = {
            users : null
        }
    } 

    componentDidMount = () => {
        this.props.getUsers();
    }

    componentWillReceiveProps = nextProps => {
        this.setState({
            users: nextProps
        })
    }

    render() {

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
                            {this.state.users.map((userList, index) => {
                                return (<tr key={index}>
                                            <td>{userList.firstName +' '+ userList.middleName +' '+ userList.lastName}</td>
                                            <td>{userList.email}</td>
                                            <td>{userList.mobile}</td>
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