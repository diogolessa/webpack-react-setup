import buildState from '../../../utils/buildState';

const initialState = {
  list: [],
  fetching: false
};

export default (state = buildState(initialState), action) => {
  switch(action.type) {
    case 'ADD_HERO':
      // @TODO: add hero from list
      return {
        ...state,
        fetching: false
      }
    case 'REMOVE_HERO':
      // @TODO: remove hero from list
      return {
        ...state,
        fetching: false
      }
  }
}