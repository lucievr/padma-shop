import React, { ComponentType } from 'react';

import Spinner from '../spinner/spinner.component';

type WithSpinnerProps = {
  isLoading: boolean;
}

const WithSpinner = (WrappedComponent: ComponentType) => ({ isLoading, ...otherProps }: WithSpinnerProps) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
