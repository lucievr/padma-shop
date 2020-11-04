import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import {
  selectIsModalOpen,
  selectModalItem,
} from '../../redux/shop/shop.selectors';
import { closeItemModal } from '../../redux/shop/shop.actions';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import LikeButton from '../like-button/like-button.component';
import { ReactComponent as Close } from '../../assets/close.svg';
import './item-detail-modal.styles.scss';

const ItemDetailModal = ({
  isModalOpen,
  modalItem,
  closeItemModal,
  addItem,
}) => {
  const { name, price, imageUrl, quantity, description } = modalItem;

  return (
    <Dialog
      onClose={closeItemModal}
      open={isModalOpen}
      className='item-detail-modal'
    >
      <Card className='item-card'>
        <CardHeader
          avatar={<LikeButton item={modalItem} />}
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
  isModalOpen: selectIsModalOpen,
  modalItem: selectModalItem,
});

const mapDispatchToProps = (dispatch) => ({
  closeItemModal: () => dispatch(closeItemModal()),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailModal);
