import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dropdown from '../../components/Dropdown';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import heroActions from '../Heroes/actions/heroes'

const styles = theme => ({
  root: {
    margin: '0 auto',
    marginTop: theme.spacing.unit * 3,
    maxWidth: 500,
    padding: theme.spacing.unit * 4,
    flexGrow: 1
  },
  button: {
    marginTop: 12
  }
});


const buildHeroesDropdown = heroes => 
  heroes.map(hero => ({
    value: hero.name,
    label: hero.name
  }));

class AddHeroForm extends Component {

  state = {
    hero: {
      name: '',
      superPower: '',
      weakness: '',
      archEnemy: '',
      type: 'Super hero' 
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

    const heroesDropdown = buildHeroesDropdown(heroes);

    return (
      <form name="addHeroForm" onSubmit={this.onAddHero}>
        <Paper className={classes.root}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <TextField
                className="form-item"
                id="hero-name"
                placeholder="Hero name"
                margin="normal"
                onChange={onChangeField('name')}
                value={hero.name}
                required
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
                required
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
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Tipo</FormLabel>
              <RadioGroup
                ariaLabel="Hero Type"
                name="hero-type"
                value={hero.type}
                onChange={onChangeField('type')}
              >
                <FormControlLabel value="Super hero" control={<Radio />} label="Super hero" />
                <FormControlLabel value="Villain" control={<Radio />} label="Villain" />
              </RadioGroup>             
            </Grid>
            {
              heroes.length > 0 &&
              <Grid item xs={12}>
                <Dropdown
                  dropdownId="hero-archEnemy-dropdown"
                  label="Arch Enemy"
                  data={heroesDropdown}
                  handleChange={onChangeField('archEnemy')}
                  value={hero.archEnemy}
                />
              </Grid>
            }            
            <Grid container justify="flex-end" alignItems="flex-end" direction="row">
              <Button variant="contained" color="secondary" type="submit" className={classes.button}>
                Save
              </Button>
            </Grid>
          </Grid>
        </Paper>
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