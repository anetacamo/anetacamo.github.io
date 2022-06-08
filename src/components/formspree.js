// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm({ itemsInCart }) {
  const [state, handleSubmit] = useForm("mqkwowdd");
  let description = "";

  if (state.succeeded) {
    return (
      <>
        <h2>Thanks for the message!</h2>
        <p>Will get back to you ASAP!</p>
      </>
    );
  }
  return (
    <form className="formspree" onSubmit={handleSubmit}>
      <input
        id="name"
        type="textl"
        name="name"
        placeholder="Your name"
        className="large"
      />
      <input
        id="email"
        type="email"
        name="email"
        className="large"
        placeholder="Mail to contact you"
      />
      <p style={{ textDecoration: "underline", marginBottom: 8 }}>
        those are the items from your cart:
      </p>
      <input
        id="prints"
        type="hidden"
        name="prints"
        value={itemsInCart.map((item) => ` ${item.title}: ${item.size}`)}
      />
      <ul>
        {itemsInCart.map((item) => (
          <li>
            {item.title}: {item.size}
          </li>
        ))}
      </ul>
      <p style={{ marginTop: 8 }}>
        <i>When the form is sent, I will see the list of the items.</i>
        <br /> If you wanna add/remove any, either scroll to the top or choose
        them on the web.
      </p>

      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        className="large"
        placeholder="Let me know when would it suit you - but please give me at least two working day to get the order ready:)"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <br />
      <br />
      <button type="submit" disabled={state.submitting}>
        Send the message
      </button>
    </form>
  );
}
function Formspree({ itemsInCart }) {
  return <ContactForm itemsInCart={itemsInCart} />;
}
export default Formspree;
