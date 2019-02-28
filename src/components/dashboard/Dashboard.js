import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    render() {

        const { classes } = this.props;

        return(
            <>
                <Sidebar />
                <div className={classes.root}>
                    <div className={classes.dashboardWrapper}>
                        <h1>Welcome to First App</h1>
                        <br />
                        <h3>Your access token is</h3>
                    </div>
                </div>
            </>
        );
    }

}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);