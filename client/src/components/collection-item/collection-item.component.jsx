import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { openItemModal } from '../../redux/shop/shop.actions';

import LikeButton from '../like-button/like-button.component';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem, openItemModal }) => {
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
      <LikeButton item={item} />
      <CustomButton onClick={() => addItem(item)}>Add to cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  openItemModal: (item) => dispatch(openItemModal(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
