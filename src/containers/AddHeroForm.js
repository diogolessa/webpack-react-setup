import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dropdown from '../components/Dropdown';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import heroActions from '../containers/Heroes/actions/heroes'

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
    hero: {
      name: '',
      superPower: '',
      weakness: '',
      archEnemy: '',
      type: '' 
    }
  }

  clearHero = () => {
    this.setState({
      hero: {
        name: '',
        superPower: '',
        weakness: '',
        archEnemy: '',
        type: ''
      }
    });
  }

  onChangeField = type => event => {
    this.setState({
      hero: {
        ...this.state.hero,
        [type]: event.target.value
      }
    });    
  }

  onAddHero = event => {
    event.preventDefault();

    const { addHero } = this.props;
    addHero(this.state.hero);
    this.clearHero();
  }

  render() {

    const {
      onChangeField,
      state: { hero },
      props: { classes, heroes }
    } = this;

    console.log(heroes);

    return (
      <form name="addHeroForm" onSubmit={this.onAddHero}>
        <Paper className={classes.paper}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <TextField
                className="form-item"
                id="hero-name"
                placeholder="Hero name"
                margin="normal"
                onChange={onChangeField('name')}
                value={hero.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="form-item"
                id="hero-superpower"
                placeholder="Hero super-power"
                margin="normal"
                onChange={onChangeField('superPower')}
                value={hero.superPower}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="form-item"
                id="hero-weakness"
                placeholder="Hero weakness"
                margin="normal"
                onChange={onChangeField('weakness')}
                value={hero.weakness}
              />
            </Grid>
            <Grid item xs={12}>
              <Dropdown
                dropdownId="hero-class-dropdown"
                label="Hero type"
                data={heroType}
                handleChange={onChangeField('type')}
                value={hero.type}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Salvar
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <ul>
          { heroes.length &&
            heroes.map(hero =>
              <li key={hero.id}>{hero.name}</li>
            )
          }
        </ul>
      </form>
    );
  }
}

const AddHeroFormStyled = withStyles(styles)(AddHeroForm);

const mapStateToProps = state => ({
  heroes: state.heroes
});

const mapDispatchToProps = dispatch => ({
  addHero: dispatch(heroActions.addHero)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHeroFormStyled);