import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './code/home/home';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" >
          <HomePage />
        </Route>
        <Route path="/shop/hats">
          <HatsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
