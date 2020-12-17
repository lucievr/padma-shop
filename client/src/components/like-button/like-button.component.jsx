import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {
  selectCurrentUser,
  selectUserFavourites,
} from '../../redux/user/user.selectors';
import { updateUser } from '../../redux/user/user.actions';
import {
  addItemToFavourites,
  removeItemFromFavourites,
} from '../../redux/user/user.utils.ts';

import { ReactComponent as HeartOutlined } from '../../assets/heart-outlined.svg';
import { ReactComponent as HeartFilled } from '../../assets/heart-filled.svg';
import './like-button.styles.scss';

const LikeButton = ({ item, updateUser, userFavourites, currentUser }) => {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  const handleAddToFavourites = () => {
    if (!currentUser) return setAlertOpen(true);
    const updatedFavourites = addItemToFavourites(currentUser, item.id);
    updateUser({ ...currentUser, favourites: updatedFavourites });
  };

  const handleRemoveFromFavourites = () => {
    if (!currentUser) return;
    const updatedFavourites = removeItemFromFavourites(currentUser, item.id);
    updateUser({ ...currentUser, favourites: updatedFavourites });
  };

  return (
    <>
      {currentUser && userFavourites && userFavourites.includes(item.id) ? (
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
      )}
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert onClose={handleClose} severity='info' variant='filled'>
          You need to be signed in to add items to favourites
        </MuiAlert>
      </Snackbar>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  userFavourites: selectUserFavourites,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (updatedUser) => dispatch(updateUser(updatedUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
