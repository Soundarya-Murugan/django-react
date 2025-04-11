import React, { useEffect, useState } from "react";

function TravelRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/requests/")
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h2>Travel Requests</h2>
      <ul>
        {requests.map((req) => (
          <li key={req.id}>
            {req.destination} - {req.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TravelRequests;
