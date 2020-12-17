import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { CartItem as CartItemType } from '../../redux/cart/cart.types';
import { ApplicationState } from '../../redux/store';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

interface CartDropdownProps extends RouteComponentProps<any> {
  cartItems: CartItemType[];
  anchorEl: Element | null;
  onClose: () => void;
}

const CartDropdown: FC<CartDropdownProps> = ({ cartItems, history, anchorEl, onClose }) => (
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
    id='cart-menu'
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={onClose}
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
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        onClose();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </Menu>
);

interface Selection {
  cartItems: CartItemType[]; 
}

const mapStateToProps = createStructuredSelector<ApplicationState, Selection>({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
