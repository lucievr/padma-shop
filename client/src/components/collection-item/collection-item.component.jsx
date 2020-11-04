import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Tooltip from '@material-ui/core/Tooltip';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { addToFavourites, removeFromFavourites } from '../../redux/user/user.actions';
import { openItemModal } from '../../redux/shop/shop.actions';
import { selectCurrentUser, selectUserFavourites } from '../../redux/user/user.selectors.js';
import { ReactComponent as HeartOutlined } from '../../assets/heart-outlined.svg';
import { ReactComponent as HeartFilled } from '../../assets/heart-filled.svg';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem, currentUser, userFavourites, addToFavourites, removeFromFavourites, openItemModal }) => {
  const { name, price, imageUrl } = item;

  const handleAddToFavourites = () => {
    if (currentUser) {
      addToFavourites(item.id);
    } else {
      alert('You need to be signed in to add items to favourites')
    }
  };

  const handleRemoveFromFavourites = () => {
    if (!currentUser) return;
    removeFromFavourites(item.id);
  };

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
      {currentUser && userFavourites && userFavourites.includes(item.id) ? (
        <Tooltip title='Remove from favourites' placement='top'>
          <HeartFilled className='heart-filled' onClick={handleRemoveFromFavourites} />
        </Tooltip>
      ) : (
        <Tooltip title='Add to favourites' placement='top'>
          <HeartOutlined className='heart-outlined' onClick={handleAddToFavourites} />
        </Tooltip>
      )}
      <CustomButton onClick={() => addItem(item)}>Add to cart</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  userFavourites: selectUserFavourites,
});

const matchDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addToFavourites: (itemId) => dispatch(addToFavourites(itemId)),
  removeFromFavourites: (itemId) => dispatch(removeFromFavourites(itemId)),
  openItemModal: (item) => dispatch(openItemModal(item)),
});

export default connect(mapStateToProps, matchDispatchToProps)(CollectionItem);
