import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
 
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Drawer, List, Divider, ListItem, ListItemText } from '@material-ui/core';


const drawerWidth = '20%';

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  heading: {
    padding: '25px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'grey'
  },
  link: {
    textDecoration: 'none'
  }
});


class Sidebar extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = this.props;

    this.state = {
      userType: cookies.get('loginDetail').type.type
    }

  }

  handleClick = () => {

    const { cookies } = this.props;

    cookies.set('loginDetail', '');

    window.location.reload();
  }

  render() {
    
    const { classes } = this.props;
  
    return (
      <>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawer,
          }}
          anchor="left"
        >
          <Link to={'/dashboard'} className={classes.link}>
            <div className={classes.heading} >
              FIRST APP
            </div>
          </Link>
          <Divider />
          <List>
            <Link to={'/users'} className={classes.link}>
              <ListItem button key={'USERS'}>
                <ListItemText primary={'USERS'} />
              </ListItem>
            </Link>
            { this.state.userType === 'admin' ? 
              <Link to={'/admins'} className={classes.link}>
                <ListItem button key={'ADMINS'}>
                  <ListItemText primary={'ADMINS'} />
                </ListItem>
              </Link>
              :
              ''
            }
            <ListItem button key={'LOG OUT'} onClick={this.handleClick}>
                <ListItemText primary={'LOG OUT'} />
              </ListItem>
          </List>
        </Drawer>
      </>
    );

  }

}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withCookies(Sidebar));
