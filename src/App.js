import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ShopPage from './code/shop/shop';
import HomePage from './code/home/home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" >
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
