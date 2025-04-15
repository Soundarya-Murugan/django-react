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
      status: 'Pending', // ✅ Default status
    };

    const updatedRequests = [...requests, newRequest];
    localStorage.setItem('travelRequests', JSON.stringify(updatedRequests));
    setRequests(updatedRequests); // update state to reflect new data
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
      <h2>Submit Travel Request</h2>
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
      <h3>Submitted Travel Requests</h3>
      {requests.length === 0 ? (
        <p>No travel requests yet.</p>
      ) : (
        <ul>
          {requests.map((req) => (
            <li key={req.id}>
              <strong>{req.employeeName}</strong> → {req.destination} | Purpose: {req.travelPurpose} <br />
              Dates: {req.travelDate} to {req.returnDate} <br />
              Submitted by: {req.submittedBy} <br />
              ✅ Status: <strong>{req.status}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TravelRequest;
