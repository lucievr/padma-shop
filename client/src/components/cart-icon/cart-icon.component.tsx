import React, { FC, useState, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Badge from '@material-ui/core/Badge';

import { ApplicationState } from '../../redux/store';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon: FC<{itemCount: number}> = ({ itemCount }) => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const handleClick = (event: MouseEvent<Element>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        className='cart-icon'
        aria-controls='cart-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <Badge badgeContent={itemCount}>
          <ShoppingIcon className='shopping-icon' />
        </Badge>
      </div>
      <CartDropdown anchorEl={anchorEl} onClose={handleClose} />
    </>
  );
};

interface Selection {
  itemCount: number; 
}

const mapStateToProps = createStructuredSelector<ApplicationState, Selection>({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
