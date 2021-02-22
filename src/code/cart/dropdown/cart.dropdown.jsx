import React from 'react';
import CustomButton from '../../forms/custom-button/custom-button';
import './cart.dropdown.scss';
import CartItem from '../item/cart.item';
import { connect } from 'react-redux';

const Cart = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>

        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);  

const mapStateToProps = ({ cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(Cart);