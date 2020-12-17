import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ApplicationState } from '../../redux/store';
import { CollectionItem } from '../../redux/shop/shop.types';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';

type CollectionsOverviewProps = {
  collections: CollectionItem[];
}

const CollectionsOverview: FC<CollectionsOverviewProps> = ({ collections }) => (
  <div className='collections-overview'>
    {collections
      .sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
      .map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
  </div>
);

const mapStateToProps = createStructuredSelector<ApplicationState, CollectionsOverviewProps>({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
