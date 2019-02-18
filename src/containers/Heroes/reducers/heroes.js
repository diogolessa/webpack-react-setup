import buildState from '../../../utils/buildState';

const initialState = [
  {
    id: 0,
    name: 'fulano',
    weakness: 'rock',
    superPower: 'he-man',
    type: 'villain',
    archEnemy: 'whatever'
  },
  {
    id: 1,
    name: 'cicrano',
    weakness: 'cors',
    superPower: 'skye sora',
    type: 'superhero',
    archEnemy: 'whatsoever'
  }
];

let count = initialState.length;

export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_HERO':
      const newHero = Object.assign({ id: count }, action.hero);
      count++;
      return  [...state, newHero]
    case 'REMOVE_HERO':
      console.log(state.filter(hero => hero.id !== action.heroId));
      count--;
      return state.filter(hero => hero.id !== action.heroId);
    default:
      return state;
  }
}