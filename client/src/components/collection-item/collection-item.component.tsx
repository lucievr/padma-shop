import React, { FC } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { openItemModal, Dispatch } from '../../redux/shop/shop.actions';
import { ShopItem } from '../../redux/shop/shop.types';
import { CartItem } from '../../redux/cart/cart.types';
import LikeButton from '../like-button/like-button.component';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

type CollectionItemProps = {
  item: ShopItem;
  addItem: (item: CartItem) => void;
  openItemModal: (item: ShopItem) => void;
}

const CollectionItem: FC<CollectionItemProps> = ({ item, addItem, openItemModal }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div className='collection-header'>
        <span className='name'>{name}</span>
        <span className='price'>€ {price.toFixed(2)}</span>
      </div>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        onClick={() => openItemModal(item)}
      />
      <LikeButton itemId={item.id} />
      <CustomButton onClick={() => addItem(item)}>Add to cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: CartItem) => dispatch(addItem(item)),
  openItemModal: (item: ShopItem) => dispatch(openItemModal(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
