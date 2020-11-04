import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';

import {
  selectIsModalOpen,
  selectModalItem,
} from '../../redux/shop/shop.selectors';
import { selectCurrentUser, selectUserFavourites } from '../../redux/user/user.selectors.js';
import { closeItemModal } from '../../redux/shop/shop.actions';
import { addItem } from '../../redux/cart/cart.actions';
import { addToFavourites, removeFromFavourites } from '../../redux/user/user.actions';

import CustomButton from '../custom-button/custom-button.component';
import { ReactComponent as HeartOutlined } from '../../assets/heart-outlined.svg';
import { ReactComponent as HeartFilled } from '../../assets/heart-filled.svg';
import { ReactComponent as Close } from '../../assets/close.svg';
import './item-detail-modal.styles.scss';

const ItemDetailModal = ({
  isModalOpen,
  modalItem,
  closeItemModal,
  addItem,
  userFavourites,
  currentUser,
  addToFavourites,
  removeFromFavourites,
}) => {
  const { name, price, imageUrl, quantity, description } = modalItem;

  const handleAddToFavourites = () => {
    if (currentUser) {
      addToFavourites(modalItem.id);
    } else {
      alert('You need to be signed in to add items to favourites')
    }
  };

  const handleRemoveFromFavourites = () => {
    if (!currentUser) return;
    removeFromFavourites(modalItem.id);
  };

  return (
    <Dialog
      onClose={closeItemModal}
      open={isModalOpen}
      className='item-detail-modal'
    >
      <Card className='item-card'>
        <CardHeader
          avatar={
            currentUser &&
            userFavourites &&
            userFavourites.includes(modalItem.id) ? (
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
            )
          }
          action={<Close className='close' onClick={closeItemModal} />}
          title={`${name} (${quantity})`}
          subheader={
            <span>
              € {price.toFixed(2)}
            </span>
          }
        />
        <CardMedia className='card-image' image={imageUrl} />
        <CardContent>{description}</CardContent>
        <CardActions>
          <CustomButton onClick={() => addItem(modalItem)}>
            Add to cart
          </CustomButton>
        </CardActions>
      </Card>
    </Dialog>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  userFavourites: selectUserFavourites,
  isModalOpen: selectIsModalOpen,
  modalItem: selectModalItem,
});

const mapDispatchToProps = (dispatch) => ({
  closeItemModal: () => dispatch(closeItemModal()),
  addItem: (item) => dispatch(addItem(item)),
  addToFavourites: (itemId) => dispatch(addToFavourites(itemId)),
  removeFromFavourites: (itemId) => dispatch(removeFromFavourites(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailModal);
