import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import CustomButton from '../custom-button/custom-button.component';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WCNEw15nsFQIhLBa1t7b1C9W00kQiGJ8zf';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error: ' + JSON.parse(error));
        alert(
          'There was an issue with your payment. Please make sure you used the provided credit card.'
        );
      });
  };

  return (
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
      <CustomButton>PAY NOW</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
