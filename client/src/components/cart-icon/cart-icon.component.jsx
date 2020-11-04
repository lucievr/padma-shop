import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Badge from '@material-ui/core/Badge';

import { toggleCartMenu } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount, toggleCartMenu }) => (
  <div 
    className='cart-icon' 
    aria-controls="customized-menu"
    aria-haspopup="true"
    onClick={(e) => toggleCartMenu(e.currentTarget)}
  >
    <Badge badgeContent={itemCount}>
      <ShoppingIcon className='shopping-icon' />
    </Badge>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartMenu: (element) => dispatch(toggleCartMenu(element)),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
