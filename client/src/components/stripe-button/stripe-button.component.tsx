import React, { useState, FC, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { ApplicationState } from '../../redux/store';
import { clearCart, Dispatch } from '../../redux/cart/cart.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { User } from '../../redux/user/user.types';

import CustomButton from '../custom-button/custom-button.component';
import { ReactComponent as DoubleArrow } from '../../assets/double-arrow-right.svg';

interface StripeCheckoutProps extends RouteComponentProps {
  price: number;
  currentUser: User | null;
  clearCart: () => void;
}

const StripeCheckoutButton: FC<StripeCheckoutProps> = ({ price, history, currentUser, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WCNEw15nsFQIhLBa1t7b1C9W00kQiGJ8zf';

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState({
    type: 'info',
    content: '',
  });

  const handleUserNotSignedIn = () => {
    setAlertMsg({
      type: 'info',
      content: 'You need to be signed in to make purchases',
    });
    setAlertOpen(true);
  };

  const handleClose = (_: SyntheticEvent<Element, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  const onToken = (token: Token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        clearCart();
        history.push('/');
      })
      .catch((error) => {
        console.log('Payment error: ' + JSON.parse(error));
        clearCart();
        history.push('/');
      });
  };

  return (
    <>
      {currentUser ? (
        <StripeCheckout
          label='Pay Now'
          name='Padma Co.'
          billingAddress
          shippingAddress
          image='https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/lotus.svg?alt=media&token=05a38c2f-ef7a-4405-bf6b-80d33ef29e49'
          description={`Your total is € ${price}`}
          currency='EUR'
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        >
          <CustomButton>
            PAY NOW
            <DoubleArrow className='double-arrow' />
          </CustomButton>
        </StripeCheckout>
      ) : (
        <CustomButton onClick={handleUserNotSignedIn}>
          PAY NOW
          <DoubleArrow className='double-arrow' />
        </CustomButton>
      )}
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert
          onClose={handleClose}
          severity='info'
          variant='filled'
        >
          {alertMsg.content}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

interface Selection {
  currentUser: User | null;
}

const mapStateToProps = createStructuredSelector<ApplicationState, Selection>({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButton)
);
