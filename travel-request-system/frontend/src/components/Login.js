import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style.css'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === formData.email && u.password === formData.password);
    if (user) {
      localStorage.setItem('currentUser', user.email);
      localStorage.setItem('role', user.role);
      user.role === 'admin' ? navigate('/admin-requests') : navigate('/travel-request');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2>Login</h2>
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
        <p className="text-center">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
