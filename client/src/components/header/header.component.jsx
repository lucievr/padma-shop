import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // HOC
import { createStructuredSelector } from 'reselect';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/lotus.svg';
import './header.styles.scss';

const Header = ({ currentUser, signOutStart }) => (
  <>
    <AppBar position='fixed' className='app-bar'>
      <Toolbar className='toolbar'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
          <div className='options'>
          <Link className='option' to='/shop'>
            SHOP
          </Link>
          <Link className='option' to='/shop'>
            CONTACT
          </Link>
          {currentUser ? (
            <div className='option' onClick={signOutStart}>
              SIGN OUT
            </div>
          ) : (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )}
          </div>
          <CartIcon />
        <CartDropdown />
      </Toolbar>
    </AppBar>
    <Toolbar id='back-to-top-anchor' />
  </>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
