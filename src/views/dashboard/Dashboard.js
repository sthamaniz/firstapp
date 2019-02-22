import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { Cookies } from 'react-cookie';

import './Dashboard.css';

import Sidebar from '../../components/sidebar/Sidebar';

class Dashboard extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor (props) {
        super();
        const { cookies } = props;
        this.state = {
            userData : cookies.get('loggedInUser')
        }

    }

    render() {
        return(
            <>
                <Sidebar />
                <div className="dashboard">
                    <div className="textDashboard">
                        {this.state.userData}
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;