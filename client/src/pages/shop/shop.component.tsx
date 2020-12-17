import React, { useEffect, lazy, Suspense, FC } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart, Dispatch } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';
import BackToTopButton from '../../components/back-to-top-button/back-to-top-button.component';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

interface ShopPageProps extends RouteComponentProps {
  fetchCollectionsStart: () => void;
}

const ShopPage: FC<ShopPageProps> = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
      <BackToTopButton />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
