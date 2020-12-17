import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { ApplicationState } from '../../redux/store';
import {
  CollectionItem as CollectionItemType,
  ShopItem,
} from '../../redux/shop/shop.types';
import {
  selectCollection,
  selectModalItem,
} from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import ItemDetailModal from '../../components/item-detail-modal/item-detail-modal.component';

import './collection.styles.scss';

interface CollectionPageProps {
  collection: CollectionItemType | null;
  modalItem: ShopItem | null;
}

const CollectionPage: FC<CollectionPageProps> = ({ collection, modalItem }) => {
  if (!collection) {
    return (
      <div className='collection-page'>
        <div className='items'>No collection found!</div>
      </div>
    );
  }
  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      {modalItem ? <ItemDetailModal /> : null}
    </div>
  );
};

type TParams = { collectionId: string };

interface ownPropsType extends RouteComponentProps<TParams> {
  modalItem: ShopItem | null;
  collection: CollectionItemType | null;
}

const mapStateToProps = (state: ApplicationState, ownProps: ownPropsType) => ({
  modalItem: selectModalItem(state),
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  // CollectionPage nested within <Route /> so has access to match prop
});

export default connect(mapStateToProps)(CollectionPage);
