import React, { useEffect, FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const ScrollToTop: FC<RouteComponentProps> = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
