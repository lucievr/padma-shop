import React, { FC } from 'react';

import { CartItem as CartItemType } from '../../redux/cart/cart.types';
import './cart-item.styles.scss';

const CartItem: FC<{ item: CartItemType}> = ({
  item: { imageUrl, price, name, cartQty },
}) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {cartQty} x € {price.toFixed(2)}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
// to prevent rerender of all items every time new item added to cart
