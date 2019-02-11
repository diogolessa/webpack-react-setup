import {
  ADD_HERO,
  REMOVE_HERO
} from '../contants/heroes';

export const addHero = hero => ({
  type: ADD_HERO, hero
});

export const removeHero = heroId => ({
  type: REMOVE_HERO, heroId
});