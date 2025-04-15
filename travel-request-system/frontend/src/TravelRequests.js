import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TravelRequests = () => {
  const [requests, setRequests] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    destination: '',
    date: '',
  });

  // Fetch travel requests
  useEffect(() => {
    axios.get('http://localhost:8000/api/requests/')
      .then(res => setRequests(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // Update existing request
      axios.put(`http://localhost:8000/api/requests/${formData.id}/`, formData)
        .then(res => {
          const updatedRequests = requests.map(req => req.id === res.data.id ? res.data : req);
          setRequests(updatedRequests);
          setFormData({ id: '', destination: '', date: '' });
        })
        .catch(err => console.error(err));
    } else {
      // Create new request
      axios.post('http://localhost:8000/api/requests/', formData)
        .then(res => {
          setRequests([...requests, res.data]);
          setFormData({ destination: '', date: '' });
        })
        .catch(err => console.error(err));
    }
  };

  const handleEdit = (id) => {
    const requestToEdit = requests.find(req => req.id === id);
    setFormData(requestToEdit);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/requests/${id}/`)
      .then(() => {
        setRequests(requests.filter(req => req.id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h2 className="my-4">{formData.id ? 'Edit' : 'Create'} a Travel Request</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="mb-3">
          <label htmlFor="destination" className="form-label">Destination</label>
          <input
            type="text"
            className="form-control"
            id="destination"
            name="destination"
            placeholder="Enter destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date of Travel</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">{formData.id ? 'Update' : 'Submit'}</button>
      </form>

      <h3 className="my-4">Existing Requests</h3>
      <ul>
        {requests.map((req) => (
          <li key={req.id}>
            <strong>{req.destination}</strong> - {req.date}
            <button className="btn btn-warning ml-2" onClick={() => handleEdit(req.id)}>Edit</button>
            <button className="btn btn-danger ml-2" onClick={() => handleDelete(req.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelRequests;
