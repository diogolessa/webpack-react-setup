import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import AddHeroForm from './containers/AddHeroForm/AddHeroForm';
import ListHeroes from './containers/ListHeroes/ListHeroes';

export default function({ props }) {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={ListHeroes} />
        <Route path="/hero/add" component={AddHeroForm} />
      </div>
    </Router>
  )
}