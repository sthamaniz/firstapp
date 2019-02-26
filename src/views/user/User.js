import React, { Component } from 'react';
import { connect } from'react-redux';

import Sidebar from '../../components/sidebar/Sidebar';

import userActionCreators from '../../redux/actioncreators/userActionCreators';

import './User.css';

class User extends Component {

    componentWillMount = () => {
        this.props.getUsers();
    }

    render() {
        return(
            <>
                <Sidebar />
                <div className="user">
                    This is a user component
                </div>
            </>
        );
    }
}

User.protoTypes = {
    getUsers: checkPropTypes.func,
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