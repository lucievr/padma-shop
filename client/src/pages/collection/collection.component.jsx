import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';
import ItemDetailModal from '../../components/item-detail-modal/item-detail-modal.component';

import './collection.styles.scss';

const CollectionPage = ({ collection, modalItem }) => {
  const { title, items } = collection;

  console.log(modalItem, 'modal');

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      { modalItem ? <ItemDetailModal /> : null }
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  modalItem: state.shop.modalItem,
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  // CollectionPage nested within <Route /> so has access to match prop
});

export default connect(mapStateToProps)(CollectionPage);
