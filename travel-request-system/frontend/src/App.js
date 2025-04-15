import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TravelRequest from './components/TravelRequest';
import AdminRequests from './components/AdminRequests';
import AdminRequestList from './components/AdminRequestList';
import AdminRequestDetail from './components/AdminRequestDetail';
import RequestDetails from './components/RequestDetails';


const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/travel-request">Travel Request</Link>
      <Link to="/admin-requests">Admin View</Link>
      <button onClick={handleLogout}>Logout</button>
      
    </nav>
  );
};

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/travel-request" element={<TravelRequest />} />
        <Route path="/admin-requests" element={<AdminRequests />} />
        <Route path="/admin/travel-requests" element={<AdminRequestList />} />
        <Route path="/admin/travel-request/:id" element={<AdminRequestDetail />} />
        <Route path="/request-details/:id" element={<RequestDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
