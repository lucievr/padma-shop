import React, { FC } from 'react';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ApplicationState } from '../../redux/store';
import { ShopItem } from '../../redux/shop/shop.types';
import { selectModalItem } from '../../redux/shop/shop.selectors';
import CollectionItem from '../collection-item/collection-item.component';
import ItemDetailModal from '../item-detail-modal/item-detail-modal.component';
import CustomButton from '../custom-button/custom-button.component';

import './collection-preview.styles.scss';

interface CollectionPreviewProps extends RouteComponentProps<any> {
  title: string;
  items: ShopItem[];
  modalItem: ShopItem | null;
}

const CollectionPreview: FC<CollectionPreviewProps> = ({ title, items, modalItem, history, match }) => (
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

interface Selection {
  modalItem: ShopItem | null;
}

const mapStateToProps = createStructuredSelector<ApplicationState, Selection>({
  modalItem: selectModalItem,
});

export default withRouter(connect(mapStateToProps)(CollectionPreview));
