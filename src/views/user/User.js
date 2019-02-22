import React, { Component } from 'react';

import './User.css';

import Sidebar from '../../components/sidebar/Sidebar';
import Userlist from '../../components/userlist/Userlist';

class User extends Component {
    render() {
        return(
            <>
                <Sidebar />
                <Userlist />
            </>
        );
    }
}

export default User;