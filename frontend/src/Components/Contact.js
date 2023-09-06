import React from 'react';
import './home.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have a question or need help with something? We're here to assist you! You can reach us using the following methods:</p>
      <ul className="contact-info">
        <li><strong>Phone:</strong> 123-456-7890</li>
        <li><strong>Email:</strong> support@example.com</li>
        <li><strong>Address:</strong> 123 Main Street, Anytown USA 12345</li>
      </ul>
      <p>Our customer service team is available Monday to Friday, from 9am to 5pm. We'll do our best to respond to your inquiry as soon as possible.</p>
      <p>Thank you for choosing us, and we look forward to hearing from you!</p>
    </div>
  );
};

export default Contact;
