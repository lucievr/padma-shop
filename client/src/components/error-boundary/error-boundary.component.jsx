import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error, 'error');
    return { hasErrored: true };
  }

  render() {
    if (this.state.hasErrored) {
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
