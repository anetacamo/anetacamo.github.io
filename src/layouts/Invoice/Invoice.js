import React, { useState } from 'react';
import { Footer, MetaTags } from '../../components';
import invoices from '../../invoice-data/invoice.json';
import me from '../../invoice-data/my-data.json';
import clients from '../../invoice-data/clients.json';
import styles from './Invoice.module.scss';

const Invoice = () => {
  const [yearIndex, setYearIndex] = useState(invoices.length - 1);

  const currentYearsInvoices = invoices[yearIndex];
  const currentYear = invoices[yearIndex].year;

  const [invoiceNum, setInvoiceNum] = useState(
    currentYearsInvoices.invoices.length - 1
  );

  const invoice = currentYearsInvoices.invoices[invoiceNum];

  const card = invoice.billed ? 1 : 0;

  const billTo = invoice.billto;
  const client = clients.filter((client) => client.nick === billTo)[0];
  console.log(client);

  const dateString = `${currentYearsInvoices.year}-${invoice.date}`;
  var date = `${dateString}T10:20:30Z`;
  var currentDate = new Date(date);
  var futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + 14);

  // Format the future date as "dd/m/yy"
  var formattedFutureDate = futureDate.toLocaleDateString('en-GB');
  var formattedCurrentDate = currentDate.toLocaleDateString('en-GB');

  const onYearChange = (index) => {
    setYearIndex(index);
    setInvoiceNum(invoices[index].invoices.length - 1);
  };

  return (
    <>
      <MetaTags name='Invoice' image='/images/intro.png' />
      <div className={`blog-container cv-container ${styles.invoice}`}>
        <div className='blogs'>
          <div style={{ display: 'flex' }}>
            {invoices.map((invoice, index) => (
              <span
                style={{ textDecoration: 'underline' }}
                onClick={() => onYearChange(index)}
              >
                {`${index}: ${invoice.year}(${invoice.invoices.length}), `}
              </span>
            ))}
            <button
              onClick={() =>
                setInvoiceNum(
                  invoiceNum === 1
                    ? setYearIndex(yearIndex - 1) &&
                        setInvoiceNum(invoices.yearIndex.invoices.length - 1)
                    : invoiceNum - 1
                )
              }
            >
              show previous
            </button>
            <p>
              {yearIndex} / {invoiceNum}
            </p>
            <button onClick={() => setInvoiceNum(invoiceNum + 1)}>
              show next
            </button>
          </div>

          <p>
            <i>
              Invoice Number: {currentYearsInvoices.year}-
              {currentYearsInvoices.invoices.length}
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
          {client.name && (
            <p>
              <b>{client.name}</b>
            </p>
          )}
          {client.in && <p>{client.in}</p>}
          {client.dic && <p>{client.dic}</p>}
          {client.web && <p>{client.web}</p>}
          {client.address && client.address.map((line) => <p>{line}</p>)}
          <p>
            <i>Description of Services/Products Provided</i>
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              {invoice.job.map((line) => (
                <p>{line}</p>
              ))}
            </div>
            {invoice.pay && (
              <div style={{ textAlign: 'right' }}>
                {invoice.pay.map((line) => (
                  <p>{line}</p>
                ))}
              </div>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 12,
            }}
          >
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

      {/* <video width='325' height='400' controls>
          <source
            src='https://www.youtube.com/watch?v=xLU-VE6UgOg&ab_channel=ParasportDanmark'
            type='video/mp4'
          />
        </video> */}

      <Footer />
    </>
  );
};
export default Invoice;
