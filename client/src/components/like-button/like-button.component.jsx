import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Tooltip from '@material-ui/core/Tooltip';

import {
  selectCurrentUser,
  selectUserFavourites,
} from '../../redux/user/user.selectors.js';
import { addToFavourites, removeFromFavourites } from '../../redux/user/user.actions';

import { ReactComponent as HeartOutlined } from '../../assets/heart-outlined.svg';
import { ReactComponent as HeartFilled } from '../../assets/heart-filled.svg';
import './like-button.styles.scss';

const LikeButton = ({
  item,
  userFavourites,
  currentUser,
  addToFavourites,
  removeFromFavourites,
}) => {
  const handleAddToFavourites = () => {
    if (currentUser) {
      addToFavourites(item.id);
    } else {
      alert('You need to be signed in to add items to favourites');
    }
  };

  const handleRemoveFromFavourites = () => {
    if (!currentUser) return;
    removeFromFavourites(item.id);
  };
  
  return currentUser &&
    userFavourites &&
    userFavourites.includes(item.id) ? (
    <Tooltip title='Remove from favourites' placement='top'>
      <HeartFilled
        className='heart-filled'
        onClick={handleRemoveFromFavourites}
      />
    </Tooltip>
  ) : (
    <Tooltip title='Add to favourites' placement='top'>
      <HeartOutlined
        className='heart-outlined'
        onClick={handleAddToFavourites}
      />
    </Tooltip>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  userFavourites: selectUserFavourites,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (itemId) => dispatch(addToFavourites(itemId)),
  removeFromFavourites: (itemId) => dispatch(removeFromFavourites(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
