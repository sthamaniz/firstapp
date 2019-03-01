import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import { withStyles } from '@material-ui/core/styles';

import Sidebar from '../common/sidebar/Sidebar';


const styles = theme => ({
    root: {
        width: '80%',
        height: '100vh',
        backgroundColor: '#76abf3',
        float: 'right'
    },
    dashboardWrapper: {
        marginTop: '10%',
        fontSize: '32px',
        textTransform: 'uppercase',
        wordSpacing: '3px',
        textAlign: 'center'
    }
})

class Dashboard extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {
            accessToken: cookies.get('loginDetail').accesstoken
        }
    }

    render() {

        const { classes } = this.props;

        return(
            <>
                <Sidebar />
                <div className={classes.root}>
                    <div className={classes.dashboardWrapper}>
                        <h1>Welcome to First App</h1>
                        <br />
                        <h3>Your access token is {this.state.accessToken}</h3>
                    </div>
                </div>
            </>
        );
    }

}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withCookies(Dashboard));