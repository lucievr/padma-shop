import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectModalItem } from '../../redux/shop/shop.selectors';
import CollectionItem from '../collection-item/collection-item.component';
import ItemDetailModal from '../item-detail-modal/item-detail-modal.component';
import CustomButton from '../custom-button/custom-button.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, modalItem, history, match }) => (
  <div className='collection-preview'>
    <Link to={`${match.url}/${title.split(' ').join('-').toLowerCase()}`}>
      <h2 className='title'>{title}</h2>
    </Link>
    <div className='preview'>
      {items
        .filter((_, index) => index < 5)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      <div className='collection-item see-more'>
        <CustomButton
          onClick={() =>
            history.push(
              `${match.url}/${title.split(' ').join('-').toLowerCase()}`
            )
          }
        >
          View collection
        </CustomButton>
      </div>
    </div>
    {modalItem ? <ItemDetailModal /> : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  modalItem: selectModalItem,
});

export default withRouter(connect(mapStateToProps)(CollectionPreview));
