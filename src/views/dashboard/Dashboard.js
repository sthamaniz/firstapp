import React, { Component } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';

import './Dashboard.css';

class Dashboard extends Component {

    render() {
        return(
            <>
                <Sidebar />
                <div className="dashboard">
                    <div className="textDashboard">
                        <h1>Welcome to First App</h1>
                        <br />
                        <h3>Your access token is</h3>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;