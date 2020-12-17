import React, { FC } from 'react';
import { connect } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';

import { CartItem } from '../../redux/cart/cart.types';
import {
  clearItemFromCart,
  addItem,
  removeItem,
  Dispatch
} from '../../redux/cart/cart.actions';

import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import './checkout-item.styles.scss';

type CheckoutItemProps = {
  cartItem: CartItem;
  clearItem: (cartItem: CartItem) => void;
  addItem: (cartItem: CartItem) => void;
  removeItem: (cartItem: CartItem) => void;
}

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, cartQty } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          <ArrowLeft className='arrow-left' />
        </div>
        <span className='value'>{cartQty}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          <ArrowRight className='arrow-right' />
        </div>
      </span>
      <span className='price'>€ {price.toFixed(2)}</span>
      <Tooltip title='Remove item' placement='top'>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>
          &#10005;
        </div>
      </Tooltip>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItem: (item: CartItem) => dispatch(clearItemFromCart(item)),
  addItem: (item: CartItem) => dispatch(addItem(item)),
  removeItem: (item: CartItem) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
