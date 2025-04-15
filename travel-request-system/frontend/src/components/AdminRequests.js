import React from 'react';
import { Link } from 'react-router-dom';

const AdminRequests = () => {
  const role = localStorage.getItem('role');
  if (role !== 'admin') {
    return <p>You are not authorized to view this page.</p>;
  }

  const requests = JSON.parse(localStorage.getItem('travelRequests')) || [];

  return (
    <div>
      <h2>All Travel Requests</h2>
      {requests.length === 0 ? (
        <p>No travel requests submitted.</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Destination</th>
              <th>Purpose</th>
              <th>Submitted By</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr key={index}>
                <td>{req.employeeName}</td>
                <td>{req.destination}</td>
                <td>{req.travelPurpose}</td>
                <td>{req.submittedBy}</td>
                <td>{req.status || 'Pending'}</td>
                <td>
                  <Link to={`/request-details/${index}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminRequests;
