import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminRequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('travelRequests')) || [];
    setRequests(stored);
  }, []);

  return (
    <div>
      <h2>All Travel Requests</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Destination</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(req => (
            <tr key={req.id}>
              <td>{req.id}</td>
              <td>{req.employeeName}</td>
              <td>{req.destination}</td>
              <td>{req.status}</td>
              <td>
                <Link to={`/admin/travel-request/${req.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRequestList;
