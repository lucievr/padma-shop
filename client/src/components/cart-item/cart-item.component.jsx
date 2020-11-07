import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x € {price.toFixed(2)}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
// to prevent rerender of all items every time new item added to cart
