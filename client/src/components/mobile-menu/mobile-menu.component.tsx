import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { ApplicationState } from '../../redux/store';
import { User } from '../../redux/user/user.types';
import { signOutStart, Dispatch } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

import './mobile-menu.styles.scss';

type MobileMenuProps = {
  anchorEl: Element | null;
  onClose: () => void;
  currentUser: User | null;
  signOutStart: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ anchorEl, onClose, currentUser, signOutStart }) => {
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
      <MenuItem className='submenu-item'>
        <ArrowRight />
        <Link className='option' to='/shop/soaps' onClick={onClose}>
          Soaps
        </Link>
      </MenuItem>
      <MenuItem className='submenu-item'>
        <ArrowRight />
        <Link className='option' to='/shop/essential-oils' onClick={onClose}>
          Essential oils
        </Link>
      </MenuItem>
      <MenuItem className='submenu-item'>
        <ArrowRight />
        <Link className='option' to='/shop/bath-salts' onClick={onClose}>
          Bath salts
        </Link>
      </MenuItem>
      <MenuItem className='submenu-item'>
        <ArrowRight />
        <Link
          className='option'
          to='/shop/bathroom-essentials'
          onClick={onClose}
        >
          Bathroom essentials
        </Link>
      </MenuItem>
      <MenuItem className='submenu-item'>
        <ArrowRight />
        <Link className='option' to='/shop/covid-essentials' onClick={onClose}>
          COVID essentials
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

interface Selection {
  currentUser: User | null;
}

const mapStateToProps = createStructuredSelector<ApplicationState, Selection>({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);
