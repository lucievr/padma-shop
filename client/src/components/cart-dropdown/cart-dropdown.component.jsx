import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems, selectCartAnchorEl } from '../../redux/cart/cart.selectors';
import { toggleCartMenu } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch, anchorEl, toggleCartMenu }) => (
  <Menu 
    className='cart-dropdown'
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
    id="customized-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={() => toggleCartMenu(null)}
  >
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      toggleCartMenu(null);
      }}>
      GO TO CHECKOUT
    </CustomButton>
  </Menu>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  anchorEl: selectCartAnchorEl,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartMenu: (element) => dispatch(toggleCartMenu(element)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
