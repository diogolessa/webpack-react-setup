import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dropdown from '../components/Dropdown';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    maxWidth: 300,
    margin: '50px auto 0',
    padding: 40
  }
});

const heroType = [{
  value: 'superhero',
  label: 'SuperHero'
}, {
  value: 'villain',
  label: 'Villain'
}];

class AddHeroForm extends Component {

  state = {
    heroClass: ''
  }

  onChangeHeroClass = event => {
    this.setState({
      heroClass: event.target.value
    });
  }

  render() {

    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <TextField
              className="form-item"
              id="hero-name"
              placeholder="Hero name"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="form-item"
              id="hero-superpower"
              placeholder="Hero super-power"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="form-item"
              id="hero-weakness"
              placeholder="Hero weakness"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Dropdown
              dropdownId="hero-class-dropdown"
              label="Hero type"
              data={heroType}
              handleChange={this.onChangeHeroClass}
              value={this.state.heroClass}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }

}

export default withStyles(styles)(AddHeroForm);