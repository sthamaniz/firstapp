import React, { Component } from 'react';
import { connect } from'react-redux';
import PropTypes from 'prop-types';

import Sidebar from '../common/sidebar/Sidebar';

import './User.css';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passowrd: '',
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            mobile: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render() {
        return (
            <>
                <Sidebar />
                <div className="user">
                    <div className="userContent">
                        <form onSubmit={this.handleSubmit}>
                            <div className="usernameUser">
                                <div className="usernameUser-label">
                                    <label>Username</label>
                                </div>
                                <div className="usernameUser-input">
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
                            
                            <div className="passwordUser">
                                <div className="passwordUser-label">
                                    <label>Password</label>
                                </div>
                                <div className="passwordUser-input">
                                    <input
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    />
                                </div>
                            </div>

                            <div className="firstNameUser">
                                <div className="firstNameUser-label">
                                    <label>First Name</label>
                                </div>
                                <div className="firstNameUser-input">
                                    <input
                                    name="firstName"
                                    type="text"
                                    value={this.state.firstName}
                                    placeholder="firstName"
                                    onChange={this.handleChange}
                                    />
                                </div>
                            </div>

                            <div className="middleNameUser">
                                <div className="middleNameUser-label">
                                    <label>Middle Name</label>
                                </div>
                                <div className="middleNameUser-input">
                                    <input
                                    name="middleName"
                                    type="text"
                                    value={this.state.middleName}
                                    placeholder="middleName"
                                    onChange={this.handleChange}
                                    />
                                </div>
                            </div>

                            <div className="lastNameUser">
                                <div className="lastNameUser-label">
                                    <label>Last Name</label>
                                </div>
                                <div className="lastNameUser-input">
                                    <input
                                    name="lastName"
                                    type="text"
                                    value={this.state.lastName}
                                    placeholder="lastName"
                                    onChange={this.handleChange}
                                    />
                                </div>
                            </div>

                            <div className="emailUser">
                                <div className="emailUser-label">
                                    <label>Email</label>
                                </div>
                                <div className="emailUser-input">
                                    <input
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    placeholder="email"
                                    onChange={this.handleChange}
                                    />
                                </div>
                            </div>

                            <div className="mobileUser">
                                <div className="mobileUser-label">
                                    <label>Mobile Number</label>
                                </div>
                                <div className="mobileUser-input">
                                    <input
                                    name="mobile"
                                    type="text"
                                    value={this.state.mobile}
                                    placeholder="mobile"
                                    onChange={this.handleChange}
                                    />
                                </div>
                            </div>

                            <div className="buttonUser">
                                <button
                                    type="submit"
                                >
                                    Add User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);