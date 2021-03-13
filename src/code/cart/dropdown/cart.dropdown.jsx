import React from 'react';
import CustomButton from '../../forms/custom-button/custom-button';
import './cart.dropdown.scss';
import CartItem from '../item/cart.item';

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selecter';
import { createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';

const Cart = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    {cartItems.length ? (
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      ) : (
          <span className="empty-message">Your cart is empty</span>
      )
    }
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}>GO TO CHECKOUT</CustomButton>
  </div>
);  

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));