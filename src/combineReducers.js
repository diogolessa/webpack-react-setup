import { combineReducers } from 'redux';
import heroes from './containers/Heroes/reducers/heroes'

export default combineReducers({
  heroes
});