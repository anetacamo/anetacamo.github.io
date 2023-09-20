import React from 'react';
import { Footer, MetaTags } from '../components';
import * as invoice from '../invoice.json';

const Invoice = () => {
  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString('en-GB');

  var futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 14);

  // Format the future date as "dd/m/yy"
  var formattedFutureDate = futureDate.toLocaleDateString('en-GB');

  return (
    <>
      <MetaTags name='Invoice' image='/images/intro.png' />
      <div className='blog-container cv-container'>
        <div className='blogs'>
          Aneta Camo <br />
          Aarhus 8240 <br />
          AnetaCamo@gmail.com <br />
          anetacamo.github.io <br />
          <br />
          <i>Invoice Number: {invoice.number}</i> <br />
          Invoice Date: {formattedDate} <br />
          Due Date: {formattedFutureDate} <br />
          <br />
          <i>Bill To</i>
          <br />
          <b>{invoice.billto}</b>
          <br />
          {invoice.street}
          <br />
          {invoice.town}
          <br />
          {invoice.city}
          <br /> CVR: 13003335
          <br />
          <br />
          <i>Description of Services/Products Provided</i>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>{invoice.job}</div>
            <div>{invoice.price}</div>
          </div>
          kultur-kortet.dk
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <b>Total Amount: </b>{' '}
            </div>
            <div>
              <b>{invoice.price}</b>{' '}
            </div>
          </div>
          <br />
          <i>Payment Information</i> <br />
          Bank Name: NORDEA <br />
          Account Number: 4391803280 <br />
          SWIFT/BIC: 2316 <br />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Invoice;
