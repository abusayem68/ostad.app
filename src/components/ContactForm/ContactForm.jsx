import React, { useEffect, useRef } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="contact-form">
      <div className="contact-info">
        <div className="call-us">
          <div>CALL US</div>
          <div>+880 1735119517</div>
        </div>
        <div className="address">
          <div>ADDRESS</div>
          <div>DHAKA, BANGLADESH</div>
        </div>
        <div className="email">
          <div>EMAIL</div>
          <div>ABUSAYEM2024@GMAIL.COM</div>
        </div>
      </div>
      <form action="">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '50px',
          }}>
          <div>
            <input
              ref={inputRef}
              type="text"
              placeholder="Name"
            />
            <input
              type="text"
              placeholder="Email"
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Message"></textarea>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit">SUBMIT MESSAGE</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
