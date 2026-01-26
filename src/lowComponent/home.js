import React, { useState, useEffect } from 'react'; // Import hooks

function Home() {
  const [users, setUsers] = useState([]); // State for users
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch users on component mount
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Handle HTTP errors
        }
        return response.json(); // Parse JSON
      })
      .then(data => {
        setUsers(data); // Set users data
        setLoading(false); // Set loading false
      })
      .catch(err => {
        setError(err.message); // Set error message
        setLoading(false); // Set loading false
      });
  }, []); // Empty dependency array to run once

  if (loading) {
    return <div>Loading users...</div>; // Show loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  return (
    <div className="accordion" id="usersAccordion">
      {users.map(user => (
        <div className="accordion-item" key={user.id}>
          <h2 className="accordion-header" id={`heading${user.id}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${user.id}`}
              aria-expanded="false"
              aria-controls={`collapse${user.id}`}
            >
              {user.name}
            </button>
          </h2>
          <div
            id={`collapse${user.id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${user.id}`}
            data-bs-parent="#usersAccordion"
          >
            <div className="accordion-body">
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
              <p><strong>Company:</strong> {user.company.name}</p>
              <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;