import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { ReactComponent as HeartOutlined } from '../../assets/heart-outlined.svg';
import { ReactComponent as HeartFilled } from '../../assets/heart-filled.svg';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
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
      />
      { name === 'Relax' ? <HeartFilled className='heart-filled' /> : <HeartOutlined className='heart-outlined' />}  
      <CustomButton onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const matchDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, matchDispatchToProps)(CollectionItem);
