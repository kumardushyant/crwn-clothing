import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import ShopPage from './code/shop/shop';
import HomePage from './code/home/home';
import Header from './code/header/header';
import Login from './code/login/login';
import CheckoutPage from './code/checkout/checkout';
import { auth, createProfileDocument } from './code/firebase/firebase.util';
import { connect } from 'react-redux';
import {setCurrentUser} from './code/redux/user/user.action';
import {selectCurrentUser} from './code/redux/user/user.select';
import {createStructuredSelector} from 'reselect';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscibeOnAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscibeOnAuth = auth.onAuthStateChanged(async (user) => {
      console.log("I am in auth changed");
      if(user){
        const userRef = await createProfileDocument(user);
        if (userRef !== undefined) {
          userRef.onSnapshot((data) => {
            setCurrentUser({
              id: data.id,
              ...data.data(),
            });
          });
        }
      }

      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscibeOnAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route exact path="/login" render={() => this.props.currentUser ? (<Redirect to="/"/>): (<Login />)} />
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
