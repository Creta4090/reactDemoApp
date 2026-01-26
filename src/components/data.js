import React, { useState, useEffect } from "react";

function Data() {
  const [users, setUsers] = useState([]); // Create a state variable to store users
  const [nameFilter, setNameFilter] = useState("");
  const [sortField, setSortField] = useState(null); // State for the field to sort by
  const [sortDirection, setSortDirection] = useState('asc'); // State for sort direction

  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const usersPerPage = 5; // Number of users per page
  useEffect(() => {
    // useEffect to fetch data on component mount
    fetch("https://jsonplaceholder.typicode.com/users") // Fetch data from API
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => setUsers(data)); // Set the users state with fetched data
  }, []); // Empty dependency array means this runs once on mount

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  // Calculate indexes for slicing
  const indexOfLastUser = currentPage * usersPerPage; // Last user index on current page
  const indexOfFirstUser = indexOfLastUser - usersPerPage; // First user index on current page
  // Slice users for current page
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  // Calculate total pages
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  // Handler for page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  // Function to handle sorting when a header is clicked
  const handleSort = (field) => { // field is the column to sort by
    if (sortField === field) { // If already sorting by this field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc'); // Toggle direction
    } else {
      setSortField(field); // Set new sort field
      setSortDirection('asc'); // Default to ascending
    }
  };

  
  // Function to sort users based on sortField and sortDirection
  const sortedUsers = React.useMemo(() => { // Memoize for performance
    if (!sortField) return currentUsers; // If no sort, return as is
    const sorted = [...currentUsers].sort((a, b) => { // Copy and sort array
      let aValue = a; // Start with object a
      let bValue = b; // Start with object b
      // Support nested fields like address.city
      sortField.split('.').forEach(key => { // For each key in field
        aValue = aValue[key]; // Drill down a
        bValue = bValue[key]; // Drill down b
      });
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1; // Compare values
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1; // Compare values
      return 0; // Equal values
    });
    return sorted; // Return sorted array
  }, [currentUsers, sortField, sortDirection]); // Dependencies

  return (
    <>
      <h2>User List</h2>
      <input
        className="form-control me-2"
        type="search"
        aria-label="Search"
        placeholder="Filter by name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <br />
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('email')}>Email</th>
            <th onClick={() => handleSort('street')}>Street</th>
            <th onClick={() => handleSort('city')}>City</th>
            <th onClick={() => handleSort('zipcode')}>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(sortedUsers) && sortedUsers.length > 0 ? (
        
            sortedUsers.map((user, idx) => (
              <tr key={user.id || idx}>
                <td key={`${user.name}-${idx}`}>{user.name}</td>
                <td key={`${user.email}-${idx}`}>{user.email}</td>
                <td key={`${user.address.street}-${idx}`}>{user.address.street}</td>
                <td key={`${user.address.city}-${idx}`}>{user.address.city}</td>
                <td key={`${user.address.zipcode}-${idx}`}>{user.address.zipcode}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                <strong>Not found users</strong>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination controls */}

      <nav aria-label="...">
        <ul className="pagination">
          {/* Previous button */}
          <li className="page-item">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="page-link"
            >
              Previous
            </button>
          </li>

          {/* Page numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <li className="page-item">
                <button
                  className="page-link"
                  key={page}
                  onClick={() => handlePageChange(page)}
                  style={{
                    fontWeight: currentPage === page ? "bold" : "normal",
                  }}
                >
                  {page}
                </button>
              </li>
            );
          })}

          {/* Next button */}
          <li className="page-item">
            {" "}
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Data;
