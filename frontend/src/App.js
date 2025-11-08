import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // If running locally via Docker, use this URL:
    fetch("https://docker-mini-backend.onrender.com/api/hello")

      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Error: " + err.message));
  }, []);

  return (
    <div className="App">
      <h1>Frontend + Backend + DB with Docker 🐳</h1>
      <p>
        Message from backend: <b>{message}</b>
      </p>
    </div>
  );
}

export default App;
