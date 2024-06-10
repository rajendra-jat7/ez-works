import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Email is invalid');
      return;
    }
    try {
      const response = await axios.post('http://34.225.132.160:8002/api', { email });
      if (response.status === 200) {
        setMessage('Form Submitted');
        console.log("Form Submitted!! 200 STATUS");
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setMessage('Invalid email domain');
        console.log("Invalid Email!!! 422 ERROR")
      } else {
        setMessage('An error occurred');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
      />
      <button type="submit">Contact Me</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ContactForm;
