import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
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

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
