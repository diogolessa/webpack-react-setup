import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit,
  }
});
 

class SimpleTabs extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <div>
            <Button className={classes.button}>
              <Link to="/">List heroes</Link>
            </Button>       
            <Button className={classes.button}>
              <Link to="/hero/add">Add hero</Link>
            </Button>       
          </div>
        </AppBar>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);