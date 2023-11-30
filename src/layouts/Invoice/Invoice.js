import React from 'react';
import { Footer, MetaTags } from '../../components';
import invoices from '../../invoice-data/invoice.json';
import me from '../../invoice-data/my-data.json';
import clients from '../../invoice-data/clients.json';
import styles from './Invoice.module.scss';

const lastYearsInvoices = invoices[invoices.length - 1];
const invoice =
  lastYearsInvoices.invoices[lastYearsInvoices.invoices.length - 1];

const card = invoice.billed ? 1 : 0;

const billTo = invoice.billto;
const client = clients.filter((client) => client.nick === billTo)[0];

// const duedate = date.toUTCString();

const Invoice = () => {
  // var currentDate = new Date();
  // console.log(invoice.date);

  // var formattedDate = currentDate.toLocaleDateString('en-GB');
  const dateString = `${lastYearsInvoices.year}-${invoice.date}`;
  var date = `${dateString}T10:20:30Z`;
  var currentDate = new Date(date);
  var futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + 14);

  // Format the future date as "dd/m/yy"
  var formattedFutureDate = futureDate.toLocaleDateString('en-GB');
  var formattedCurrentDate = currentDate.toLocaleDateString('en-GB');

  return (
    <>
      <MetaTags name='Invoice' image='/images/intro.png' />
      <div className={`blog-container cv-container ${styles.invoice}`}>
        <div className='blogs'>
          <p>
            <i>
              Invoice Number: {lastYearsInvoices.year}-
              {lastYearsInvoices.invoices.length}
            </i>
          </p>
          <p>Invoice Date: {formattedCurrentDate}</p>
          <p>Due Date: {formattedFutureDate}</p>

          <p>
            <i>Invoice By</i>
          </p>
          <p>{me.name}</p>
          {me.address.map((line) => (
            <p>{line}</p>
          ))}
          <p>VAT {me.vat}</p>
          <p>{me.mail}</p>
          <p>{me.web}</p>
          <p>
            <i>Bill To</i>
          </p>
          <p>
            <b>{client.name}</b>
          </p>
          {client.address.map((line) => (
            <p>{line}</p>
          ))}
          <p>
            <i>Description of Services/Products Provided</i>
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              {invoice.job.map((line) => (
                <p>{line}</p>
              ))}
            </div>
            <div>{invoice.price}</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <b>Total Amount: </b>{' '}
            </div>
            <div>
              <b>{invoice.price}</b>{' '}
            </div>
          </div>
          <br />
          <p>
            <i>Payment Information</i>
          </p>
          <p>Bank name: {me.cards[card].name}</p>
          <p>Account Number: {me.cards[card].accountnumber}</p>
          <p>REG NR: {me.cards[card].regnr}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Invoice;
