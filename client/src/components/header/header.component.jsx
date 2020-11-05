import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import MobileMenu from '../mobile-menu/mobile-menu.component';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import { selectWindowWidth } from '../../redux/app/app.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/lotus.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import './header.styles.scss';

const Header = ({ currentUser, signOutStart, windowWidth }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(windowWidth, 'width');

  return (
    <>
      <AppBar position='fixed' className='app-bar'>
        <Toolbar className='toolbar'>
          {windowWidth > 500 ? (
            <>
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
            </>
          ) : (
            <>
              <div className='menu-icon'>
                <MenuIcon
                  aria-controls='mobile-menu'
                  aria-haspopup='true'
                  onClick={handleClick}
                />
              </div>
              <MobileMenu anchorEl={anchorEl} onClose={handleClose} />
              <Link className='logo-container' to='/'>
                <Logo className='logo' />
              </Link>
            </>
          )}
          <CartIcon />
          <CartDropdown />
        </Toolbar>
      </AppBar>
      <Toolbar id='back-to-top-anchor' />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  windowWidth: selectWindowWidth,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
