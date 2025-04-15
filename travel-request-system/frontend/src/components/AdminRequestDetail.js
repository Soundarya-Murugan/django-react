import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AdminRequestDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState(null);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('travelRequests')) || [];
    const found = all.find(r => r.id === Number(id));
    setRequest(found);
  }, [id]);

  const updateStatus = (status) => {
    const all = JSON.parse(localStorage.getItem('travelRequests')) || [];
    const updated = all.map(r =>
      r.id === Number(id) ? { ...r, status } : r
    );
    localStorage.setItem('travelRequests', JSON.stringify(updated));
    alert(`Request ${status}`);
    navigate('/admin/travel-requests');
  };

  if (!request) return <p>Loading...</p>;

  return (
    <div>
      <h2>Request Details</h2>
      <p><strong>Employee:</strong> {request.employeeName}</p>
      <p><strong>Destination:</strong> {request.destination}</p>
      <p><strong>Purpose:</strong> {request.travelPurpose}</p>
      <p><strong>Travel Date:</strong> {request.travelDate}</p>
      <p><strong>Return Date:</strong> {request.returnDate}</p>
      <p><strong>Status:</strong> {request.status}</p>

      <button onClick={() => updateStatus('Approved')}>Approve</button>
      <button onClick={() => updateStatus('Rejected')}>Reject</button>
    </div>
  );
};

export default AdminRequestDetail;
