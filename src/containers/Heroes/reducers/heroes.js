import buildState from '../../../utils/buildState';

var count = 0;

// const initialState = [];

export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_HERO':
      const newHero = Object.assign({ id: count }, action.hero);
      count++;
      return  [...state, newHero]
    case 'REMOVE_HERO':
      return  [...state, action.payload]
    default:
      return state;
  }
}