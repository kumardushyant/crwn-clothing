import React from 'react';
import CustomButton from '../../forms/custom-button/custom-button';
import './cart.dropdown.scss';

const Cart = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);  

export default Cart;