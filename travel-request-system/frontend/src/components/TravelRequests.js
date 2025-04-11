import React, { useEffect, useState } from "react";

const TravelRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/requests/") // Adjust URL if needed
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setRequests(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Travel Requests</h2>
      <ul>
        {requests.map((req, index) => (
          <li key={index}>
            {req.destination} — {req.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelRequests;
