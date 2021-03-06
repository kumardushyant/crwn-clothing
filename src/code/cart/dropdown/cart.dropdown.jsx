import React from 'react';
import CustomButton from '../../forms/custom-button/custom-button';
import './cart.dropdown.scss';
import CartItem from '../item/cart.item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selecter';
import { createStructuredSelector} from 'reselect';

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

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(Cart);