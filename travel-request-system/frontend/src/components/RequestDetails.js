import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const requests = JSON.parse(localStorage.getItem('travelRequests')) || [];
  const request = requests[parseInt(id)];

  if (!request) return <p>Request not found</p>;

  const handleAction = (status) => {
    requests[id].status = status;
    localStorage.setItem('travelRequests', JSON.stringify(requests));
    alert(`Request ${status}`);
    navigate('/admin-requests');
  };

  return (
    <div>
      <h2>Request Details</h2>
      <p><strong>Employee:</strong> {request.employeeName}</p>
      <p><strong>Destination:</strong> {request.destination}</p>
      <p><strong>Purpose:</strong> {request.travelPurpose}</p>
      <p><strong>Dates:</strong> {request.travelDate} to {request.returnDate}</p>
      <p><strong>Submitted By:</strong> {request.submittedBy}</p>
      <p><strong>Status:</strong> {request.status || 'Pending'}</p>

      <button onClick={() => handleAction('Approved')}>Approve</button>
      <button onClick={() => handleAction('Rejected')}>Reject</button>
    </div>
  );
};

export default RequestDetails;
