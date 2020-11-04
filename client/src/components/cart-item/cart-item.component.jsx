import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x € {price.toFixed(2)}</span>
    </div>
  </div>
);

export default React.memo(CartItem); 
// only rerender if the item changes, e.g. increased quantity, instead of every time new item added to the array of cart items
