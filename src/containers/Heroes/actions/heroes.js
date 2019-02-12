import {
  ADD_HERO,
  REMOVE_HERO
} from '../constants/heroes';

const addHero = dispatch => hero => {
  console.log(hero)
  dispatch({ type: ADD_HERO, hero });  
};

const removeHero = dispatch => heroId => {
  dispatch({ type: REMOVE_HERO, heroId });  
};

export default {
  addHero,
  removeHero
}