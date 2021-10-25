// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm({ itemsInCart }) {
  const [state, handleSubmit] = useForm('mqkwowdd');
  let description = '';

  if (state.succeeded) {
    return <h2>Thanks for the message!</h2>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        id='name'
        type='textl'
        name='name'
        placeholder='Your name'
        className='large'
      />
      <input
        id='email'
        type='email'
        name='email'
        className='large'
        placeholder='Mail to contact you'
      />
      <p style={{ marginBottom: 1 }}>those are the items from your cart:</p>
      <input
        id='prints'
        type='prints'
        name='prints'
        className='large pink'
        value={itemsInCart.map((item) => ` ${item.title}: ${item.size}`)}
      />
      <p style={{ marginTop: 0 }}>
        If you wanna add/remove any, either scroll to the top or choose them on
        the web.
      </p>

      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <textarea
        id='message'
        name='message'
        className='large'
        placeholder='Let me know when would it suit you - but please give me at least two working day to get the order ready:)'
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <br />
      <br />
      <button type='submit' disabled={state.submitting}>
        Send the message
      </button>
    </form>
  );
}
function Formspree({ itemsInCart }) {
  return <ContactForm itemsInCart={itemsInCart} />;
}
export default Formspree;
