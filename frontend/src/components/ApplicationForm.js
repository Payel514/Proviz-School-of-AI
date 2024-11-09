import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', statement: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/applicants/apply', formData);
      setMessage(res.data.message);
    } catch (error) {
      setMessage('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="statement" placeholder="Statement" onChange={handleChange}></textarea>
      <button type="submit">Apply Now</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ApplicationForm;
