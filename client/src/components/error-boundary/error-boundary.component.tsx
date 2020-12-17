import React, { ErrorInfo, ReactNode } from 'react';

import './error-boundary.styles.scss';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className='error-image-overlay'>
          <div
            className='error-image-container'
            style={{
              backgroundImage: 'url(https://i.imgur.com/flHudHE.png)',
            }}
          ></div>
          <h2 className='error-image-text'>Sorry, this page is lost...</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
