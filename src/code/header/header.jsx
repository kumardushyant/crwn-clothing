import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart/icon/cart.icon';
import { selectCurrentUser } from '../redux/user/user.select';
import { selectCartHidden } from '../redux/cart/cart.selecter';
import { createStructuredSelector } from 'reselect';
import Cart from '../cart/dropdown/cart.dropdown';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser? 
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to="/login">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <Cart /> }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);