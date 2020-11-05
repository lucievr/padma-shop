import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { clearCart } from '../../redux/cart/cart.actions';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { ReactComponent as AmericanExpress } from '../../assets/american-express.svg';
import { ReactComponent as Mastercard } from '../../assets/mastercard.svg';
import { ReactComponent as Visa } from '../../assets/visa.svg';
import { ReactComponent as Jcb } from '../../assets/jcb.svg';
import { ReactComponent as Discover } from '../../assets/discover.svg';
import { ReactComponent as Bin } from '../../assets/bin.svg';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total, clearCart }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block product' />
      <div className='header-block name'>
        <span>Product</span>
      </div>
      <div className='header-block quantity'>
        <span>Quantity</span>
      </div>
      <div className='header-block price'>
        <span>Price</span>
      </div>
      <div className='header-block' />
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    {cartItems.length > 0 ? (
      <>
        <div className='checkout-footer'>
          <span className='clear-cart' onClick={clearCart}>
            <Bin className='bin' />
            &nbsp;Clear cart
          </span>
          <span className='total'>TOTAL: € {total}</span>
        </div>
        <div className='test-warning'>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242
        </div>
        <StripeCheckoutButton price={total} />
        <div className='credit-cards'>
          <Mastercard />
          <Visa />
          <AmericanExpress />
          <Jcb />
          <Discover />
        </div>
      </>
    ) : (
      <div className='checkout-footer'>
        <span />
        <span className='total'>TOTAL: € {total}</span>
      </div>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
