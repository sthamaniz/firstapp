import React, { Component } from 'react';

import './Sidebar.css';

import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return(
            <>
                <div className="sidebar">
                    <div className="headingSidebar">
                        <Link to={'/dashboard'}>First App</Link>
                    </div>
                    <div className="listSidebar">
                        <Link to={'/users'}>Users</Link>
                        <Link to={'/admins'}>Admins</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default Sidebar;