import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { signOutStart } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';

import './mobile-menu.styles.scss';

const MobileMenu = ({ anchorEl, onClose, currentUser, signOutStart }) => {
  return (
    <Menu
      className='mobile-menu'
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      id='mobile-menu'
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem>
        <Link className='option' to='/' onClick={onClose}>
          HOME
        </Link>
      </MenuItem>
      <MenuItem>
        <Link className='option' to='/shop' onClick={onClose}>
          SHOP
        </Link>
      </MenuItem>
      <MenuItem>
        <Link className='option' to='/contact' onClick={onClose}>
          CONTACT
        </Link>
      </MenuItem>
      {currentUser ? (
        <MenuItem>
          <div
            className='option'
            onClick={() => {
              signOutStart();
              onClose();
            }}
          >
            SIGN OUT
          </div>
        </MenuItem>
      ) : (
        <MenuItem>
          <Link className='option' to='/signin' onClick={onClose}>
            SIGN IN
          </Link>
        </MenuItem>
      )}
    </Menu>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);
