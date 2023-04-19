import React from 'react';

import BackBtn from '../components/BackBtn';

function PizzaTracker() {
  return (
    <div className="container">
      <iframe
        title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271740.8207852922!2d30.29038623488973!3d50.40473480709765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1678613387104!5m2!1sru!2sua"
        width="100%"
        height="400"
        style={{ border: '0', margin: '20px 0 60px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <BackBtn />
    </div>
  );
}

export default PizzaTracker;
