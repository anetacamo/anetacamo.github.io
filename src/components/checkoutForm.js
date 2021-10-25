import React, { useState } from 'react';
import axios from 'axios';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Input, ShopSection } from './';

const CheckoutForm = ({ totalPrice, itemsInCart }) => {
  const [isProcessing, setProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');
  const [success, setSuccess] = useState(false);
  const [address, setAddress] = useState({
    fullname: '',
    email: '',
    street: '',
    details: '',
    city: '',
    state: '',
    postal_code: '',
  });

  const stripe = useStripe();
  const elements = useElements();

  //stripe.com/docs/stripe-js/react
  //stripe.com/docs/js
  //stripe.com/docs/payments/payment-intents
  const cardElementOptions = {
    // a way to inject styles into the iframe
    style: {
      base: {
        fontSize: '12px',
      },
      invalid: {
        color: '#ff00f7',
        iconColor: '#ff00f7',
      },
    },
    hidePostalCode: true,
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    console.log('submited!');
    setProcessing(true);

    const billingDetails = {
      name: address.fullname,
      email: address.email,
      address: {
        line1: address.street,
        line2: address.details,
        city: address.city,
        country: address.country,
        postal_code: address.postal_code,
        state: address.country,
      },
    };

    const something = itemsInCart.map(
      (item) => `${item.title}: ${item.size}, `
    );
    console.log('some', something);

    const description = JSON.stringify(something);
    const receipt_email = billingDetails.email;
    console.log(receipt_email);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    });

    console.log('payment sent', paymentMethod);
    elements.getElement(CardElement).clear();

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          'https://anetacamo-node-server.herokuapp.com/payment',
          {
            amount: totalPrice * 100,
            id,
            description: description,
            receipt_email: receipt_email,
          }
        );

        if (response.data.success) {
          setCheckoutError(
            'Succesful payment! Thank you. Receipt sent to your mail'
          );
          setProcessing(false);
          setSuccess(true);
          elements.getElement(CardElement).clear();
        }
      } catch (error) {}
    } else {
      setCheckoutError(error.message);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <ShopSection title='Contact information'>
        <p>
          leave me a way to contact you if something went wrong with your order.
          Your data will not be shared with anyone else.
        </p>
        <Input
          large
          placeholder='Full Name'
          value={address['fullname']}
          onInputChange={(e) => setAddress({ ...address, ['fullname']: e })}
          required
        />
        <Input
          large
          placeholder='Email'
          type='email'
          value={address['email']}
          onInputChange={(e) => setAddress({ ...address, ['email']: e })}
        />
      </ShopSection>
      <ShopSection title='Shipping address'>
        {/*{Object.keys(address).map((item, index) => (
          <Input
            key={index}
            placeholder={item}
            value={address[item]}
            onInputChange={(e) => setAddress({ ...address, [item]: e })}
          />
        ))}*/}
        <Input
          large
          placeholder='Street'
          value={address['street']}
          onInputChange={(e) => setAddress({ ...address, ['street']: e })}
        />
        <Input
          large
          placeholder='Apt. num, optional info'
          value={address['details']}
          onInputChange={(e) => setAddress({ ...address, ['details']: e })}
        />
        <Input
          placeholder='Province'
          value={address['province']}
          onInputChange={(e) => setAddress({ ...address, ['province']: e })}
        />
        <Input
          placeholder='City'
          value={address['city']}
          onInputChange={(e) => setAddress({ ...address, ['city']: e })}
        />
        <Input
          placeholder='Postal Code'
          value={address['postal_code']}
          onInputChange={(e) => setAddress({ ...address, ['postal_code']: e })}
        />
        <Input
          placeholder='Country code'
          value={address['country']}
          onInputChange={(e) => setAddress({ ...address, ['country']: e })}
        />
      </ShopSection>
      <ShopSection title='Payment'>
        <div className='card-input'>
          <CardElement options={cardElementOptions} />
        </div>
        <p>
          Payments are processed by Stripe and governed by its
          <a href='https://stripe.com/privacy'> privacy policy.</a>
        </p>
        {success === false && (
          <button disabled={isProcessing}>
            {isProcessing ? 'Processing' : `Pay ${totalPrice} dkk`}
          </button>
        )}

        <p>{checkoutError}</p>
      </ShopSection>
    </form>
  );
};
export default CheckoutForm;
