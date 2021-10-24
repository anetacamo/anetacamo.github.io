import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51JmMD8BVvuThU5XseTEByoAl2qv3MIWDr9GiDHS9Bap81mdjZF5ulw5smKUPtrycSLkhc3DFHOMscLDp9aS0omOd00AL5AZX9Y'
);

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { amount } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'dkk',
      });

      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
};
