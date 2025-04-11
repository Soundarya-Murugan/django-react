import React, { useEffect, useState } from "react";
import axios from "axios";

const TravelRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/requests/")
      .then((res) => {
        setRequests(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch requests:", err);
      });
  }, []);

  return (
    <div>
      <h2>Travel Requests</h2>
      <ul>
        {requests.map((req) => (
          <li key={req.id}>{req.destination} - {req.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default TravelRequests;
