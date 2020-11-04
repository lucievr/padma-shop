import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectModalItem } from '../../redux/shop/shop.selectors';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
import ItemDetailModal from '../item-detail-modal/item-detail-modal.component';

const CollectionPreview = ({ title, items, modalItem }) => (
  <div className='collection-preview'>
    <h2 className='title'>{title}</h2>
    <div className='preview'>
      {items
        .filter((item, index) => index < 6)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
    { modalItem ? <ItemDetailModal /> : null }
  </div>
);

const mapStateToProps = createStructuredSelector({
  modalItem: selectModalItem,
});

export default connect(mapStateToProps)(CollectionPreview);
