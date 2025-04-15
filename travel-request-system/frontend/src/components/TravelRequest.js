import React, { useState, useEffect } from 'react';

const TravelRequest = () => {
  const [formData, setFormData] = useState({
    travelPurpose: '',
    travelDate: '',
    returnDate: '',
    destination: '',
    employeeName: '',
  });

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem('travelRequests')) || [];
    setRequests(storedRequests);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRequest = {
      id: Date.now(), // ✅ Unique ID
      ...formData,
      submittedBy: localStorage.getItem('currentUser'),
      status: 'Pending', 
    };

    const updatedRequests = [...requests, newRequest];
    localStorage.setItem('travelRequests', JSON.stringify(updatedRequests));
    setRequests(updatedRequests); 
    alert('Travel request submitted!');

    setFormData({
      travelPurpose: '',
      travelDate: '',
      returnDate: '',
      destination: '',
      employeeName: '',
    });
  };

  return (
    <div className="form-container">
      <h2 className='text-table' style={{ marginBottom: '20px' }}>Submit Travel Request</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="employeeName"
          placeholder="Employee Name"
          value={formData.employeeName}
          onChange={handleChange}
          required
        />
        <input
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
        <input
          name="travelPurpose"
          placeholder="Purpose"
          value={formData.travelPurpose}
          onChange={handleChange}
          required
        />
        <input
          name="travelDate"
          type="date"
          value={formData.travelDate}
          onChange={handleChange}
          required
        />
        <input
          name="returnDate"
          type="date"
          value={formData.returnDate}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Request</button>
      </form>

      <hr />
    {requests.length === 0 ? (
      <p>No travel requests yet.</p>
    ) : (
      <table className="request-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Destination</th>
            <th>Purpose</th>
            <th>Travel Date</th>
            <th>Return Date</th>
            <th>Submitted By</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, index) => (
            <tr key={index}>
              <td>{req.employeeName}</td>
              <td>{req.destination}</td>
              <td>{req.travelPurpose}</td>
              <td>{req.travelDate}</td>
              <td>{req.returnDate}</td>
              <td>{req.submittedBy}</td>
              <td>{req.status || 'Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
    </div>
  );
};

export default TravelRequest;
