import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ShopPage from './code/shop/shop';
import HomePage from './code/home/home';
import Header from './code/header/header';
import Login from './code/login/login';
import { auth } from './code/firebase/firebase.util';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscibeOnAuth = null;

  componentDidMount() {
    this.unsubscibeOnAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscibeOnAuth();
  }

  render()
  {return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path="/" >
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );}
}

export default App;
