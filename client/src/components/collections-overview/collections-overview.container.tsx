import { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose} from 'redux'

import { ApplicationState } from '../../redux/store';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

interface Selection {
  isLoading: boolean;
}

const mapStateToProps = createStructuredSelector<ApplicationState, Selection>({
  isLoading: selectIsCollectionFetching
});

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

// easier to read alternative using compose, it evaluates from right to left
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer as FC;
