import React, { useState, FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { ApplicationState } from '../../redux/store';
import { User } from '../../redux/user/user.types';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectWindowWidth } from '../../redux/app/app.selectors';
import { signOutStart, Dispatch } from '../../redux/user/user.actions';
import CartIcon from '../cart-icon/cart-icon.component';
import MobileMenu from '../mobile-menu/mobile-menu.component';
import { ReactComponent as Logo } from '../../assets/lotus.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

import './header.styles.scss';

type HeaderProps = {
  currentUser: User | null;
  signOutStart: () => void;
  windowWidth: number | null;
}

const Header: FC<HeaderProps> = ({ currentUser, signOutStart, windowWidth }) => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const handleClick = (event: MouseEvent<Element>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position='fixed' className='app-bar'>
        <Toolbar className='toolbar'>
          {windowWidth && windowWidth > 500 ? (
            <>
              <Link className='logo-container' to='/'>
                <Logo className='logo' />
              </Link>
              <div className='options'>
                <Link className='option' to='/shop'>
                  SHOP
                </Link>
                <Link className='option' to='/contact'>
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
              <div
                className='menu-icon'
                aria-controls='mobile-menu'
                aria-haspopup='true'
                onClick={handleClick}
              >
                <MenuIcon />
              </div>
              <MobileMenu anchorEl={anchorEl} onClose={handleClose} />
              <Link className='logo-container mobile' to='/'>
                <Logo className='logo' />
              </Link>
            </>
          )}
          <CartIcon />
        </Toolbar>
      </AppBar>
      <Toolbar id='back-to-top-anchor' />
    </>
  );
};

interface Selection {
  currentUser: User | null;
  windowWidth: number | null;
}

const mapStateToProps = createStructuredSelector<ApplicationState, Selection>({
  currentUser: selectCurrentUser,
  windowWidth: selectWindowWidth,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
