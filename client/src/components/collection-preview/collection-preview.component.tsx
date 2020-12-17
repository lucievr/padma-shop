import React, { FC } from 'react';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';

import { ShopItem } from '../../redux/shop/shop.types';
import CollectionItem from '../collection-item/collection-item.component';
import ItemDetailModal from '../item-detail-modal/item-detail-modal.component';
import CustomButton from '../custom-button/custom-button.component';

import './collection-preview.styles.scss';

interface CollectionPreviewProps extends RouteComponentProps {
  title: string;
  items: ShopItem[];
}

const CollectionPreview: FC<CollectionPreviewProps> = ({ title, items, history, match }) => (
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
    <ItemDetailModal />
  </div>
);

export default withRouter(CollectionPreview);
