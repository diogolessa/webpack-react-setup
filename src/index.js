import './styl/main.styl';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './createStore';
import AddHeroForm from './containers/AddHeroForm';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <AddHeroForm />
  </Provider>,
  document.getElementById('app')
);