import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

import { ReactComponent as ArrowUp } from '../../assets/arrow-up.svg';

import './scroll-to-top.styles.scss';

const ScrollToTop = () => {
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className='scroll-to-top'>
        <Fab size="small" aria-label="scroll back to top">
          <ArrowUp />
        </Fab>
      </div>
    </Zoom>
  );
}

export default ScrollToTop;
