import React, { FC } from 'react';
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
import { addItem, Dispatch } from '../../redux/cart/cart.actions';
import { ShopItem } from '../../redux/shop/shop.types';
import { CartItem } from '../../redux/cart/cart.types';
import { ApplicationState } from '../../redux/store';

import CustomButton from '../custom-button/custom-button.component';
import LikeButton from '../like-button/like-button.component';
import { ReactComponent as Close } from '../../assets/close.svg';
import './item-detail-modal.styles.scss';

type ModalProps = {
  isModalOpen: boolean;
  modalItem: ShopItem | null;
  closeItemModal: () => void;
  addItem: (modalItem: CartItem) => void;
}

const ItemDetailModal: FC<ModalProps> = ({
  isModalOpen,
  modalItem,
  closeItemModal,
  addItem,
}) => {
  if (!modalItem) return null;

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
          subheader={<span>€ {price.toFixed(2)}</span>}
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

interface Selection {
  isModalOpen: boolean;
  modalItem: ShopItem | null;
}

const mapStateToProps = createStructuredSelector<ApplicationState, Selection>({
  isModalOpen: selectIsModalOpen,
  modalItem: selectModalItem,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeItemModal: () => dispatch(closeItemModal()),
  addItem: (item: CartItem) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailModal);
