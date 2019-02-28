import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

const Sidebar = (props) =>{

  const { classes } = props;

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
          <Link to={'/admins'} className={classes.link}>
            <ListItem button key={'ADMINS'}>
              <ListItemText primary={'ADMINS'} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
