import React, { useState, FC, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { ApplicationState } from '../../redux/store';
import {
  selectCurrentUser,
  selectUserFavourites,
} from '../../redux/user/user.selectors';
import { updateUser, Dispatch } from '../../redux/user/user.actions';
import {
  addItemToFavourites,
  removeItemFromFavourites,
} from '../../redux/user/user.utils';
import { User } from '../../redux/user/user.types';

import { ReactComponent as HeartOutlined } from '../../assets/heart-outlined.svg';
import { ReactComponent as HeartFilled } from '../../assets/heart-filled.svg';
import './like-button.styles.scss';

type LikeButtonProps = {
  itemId: number;
  updateUser: (user: User) => void;
  userFavourites: number[] | null | undefined;
  currentUser: User | null;
}

const LikeButton: FC<LikeButtonProps> = ({ itemId, updateUser, userFavourites, currentUser }) => {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleClose = (_: SyntheticEvent<Element, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  const handleAddToFavourites = () => {
    if (!currentUser) return setAlertOpen(true);
    const updatedFavourites = addItemToFavourites(currentUser, itemId);
    updateUser({ ...currentUser, favourites: updatedFavourites });
  };

  const handleRemoveFromFavourites = () => {
    if (!currentUser) return;
    const updatedFavourites = removeItemFromFavourites(currentUser, itemId);
    updateUser({ ...currentUser, favourites: updatedFavourites });
  };

  return (
    <>
      {currentUser && userFavourites && userFavourites.includes(itemId) ? (
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

interface Selection {
  currentUser: User | null;
  userFavourites: number[] | null | undefined;
}

const mapStateToProps = createStructuredSelector<ApplicationState, Selection>({
  currentUser: selectCurrentUser,
  userFavourites: selectUserFavourites,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateUser: (updatedUser: User) => dispatch(updateUser(updatedUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
