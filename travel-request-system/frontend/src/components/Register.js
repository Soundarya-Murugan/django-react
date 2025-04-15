import React, { useState } from 'react';
import '../style.css';


const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user', // default role
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registered successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <select name="role" onChange={handleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
