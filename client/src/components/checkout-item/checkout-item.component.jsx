import React from 'react';
import { connect } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

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
        <span className='value'>{quantity}</span>
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

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
