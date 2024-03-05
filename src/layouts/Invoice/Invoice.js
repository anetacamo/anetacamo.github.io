import React, { useState } from 'react';
import { Footer, MetaTags } from '../../components';
import invoices from '../../invoice-data/invoice.json';
import me from '../../invoice-data/my-data.json';
import clients from '../../invoice-data/clients.json';
import styles from './Invoice.module.scss';

const Invoice = () => {
  const [yearIndex, setYearIndex] = useState(invoices.length - 1);

  const currentYearsInvoices = invoices[yearIndex];

  const [invoiceNum, setInvoiceNum] = useState(
    currentYearsInvoices.invoices.length - 1
  );

  //getting the data
  const invoice = currentYearsInvoices.invoices[invoiceNum];
  const card = invoice.billed ? 1 : 0;
  const billTo = invoice.billto;
  const client = clients.filter((client) => client.nick === billTo)[0];

  //date formatting
  const formatDate = (date) => {
    const dueMonth = date.getMonth() + 1;
    const dueDay = date.getDate();
    const dueYear = date.getFullYear();
    return `${dueDay}/${dueMonth} ${dueYear}`;
  };

  const dateString = `${currentYearsInvoices.year}-${invoice.date}`;

  const currentDate = new Date(dateString);
  const dueDate = new Date(dateString);
  dueDate.setDate(currentDate.getDate() + 14);

  const formattedCurrentDate = formatDate(currentDate);
  const formatteddueDate = formatDate(dueDate);

  const onYearChange = (index) => {
    setYearIndex(index);
    setInvoiceNum(invoices[index].invoices.length - 1);
  };

  return (
    <>
      <MetaTags name='Invoice' image='/images/intro.png' />
      <div className={`blog-container cv-container ${styles.invoice}`}>
        <div className='blogs'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              {invoices.map((invoice, index) => (
                <p
                  style={{ textDecoration: 'underline' }}
                  onClick={() => onYearChange(index)}
                  key={index}
                >
                  {`show ${invoice.year} `}
                </p>
              ))}
            </div>
            <div>
              <p>
                showing{' '}
                <span className='purple'>
                  {currentYearsInvoices.year}—{invoiceNum + 1}
                </span>
                <span className='gray'>
                  /{currentYearsInvoices.invoices.length}
                </span>
              </p>
            </div>
            <div>
              <button
                onClick={() => setInvoiceNum(invoiceNum - 1)}
                disabled={invoiceNum === 0}
              >
                show previous
              </button>

              <button
                onClick={() => setInvoiceNum(invoiceNum + 1)}
                disabled={
                  invoiceNum === invoices[yearIndex].invoices.length - 1
                }
              >
                show next
              </button>
            </div>
          </div>

          <div>
            <h2>invoice</h2>
            <p>
              <i style={{ marginTop: 0 }}>
                {currentYearsInvoices.year}—
                {currentYearsInvoices.invoices.length}
              </i>
            </p>
            <p>Invoice Date: {formattedCurrentDate}</p>
            <p>Due Date: {formatteddueDate}</p>
            <div className='flex'>
              <div style={{ marginRight: 48 }}>
                <h2>Invoice By</h2>
                <p>
                  <i style={{ marginTop: 0 }}>{me.name}</i>
                </p>
                {me.address.map((line) => (
                  <p>{line}</p>
                ))}
                <p>VAT {me.vat}</p>
                <p>{me.mail}</p>
                <p>{me.web}</p>
              </div>
              <div>
                <h2>Bill To</h2>
                {client.name && (
                  <p>
                    <i style={{ marginTop: 0 }}>{client.name}</i>
                  </p>
                )}
                {client.in && <p>{client.in}</p>}
                {client.dic && <p>{client.dic}</p>}
                {client.web && <p>{client.web}</p>}
                {client.address &&
                  client.address.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
              </div>
            </div>
            <p>
              <i>Description of Services/Products Provided</i>
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                {invoice.job.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              {invoice.pay && (
                <div style={{ textAlign: 'right' }}>
                  {invoice.pay.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              )}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 12,
                backgroundColor: '#ddd2fc',
                padding: 4,
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
