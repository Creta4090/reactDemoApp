import React, { useState } from "react"; // Import useState for state management

function Contact() {
  const [email, setEmail] = useState(""); // State for email input
  const [name, setName] = useState("");
  const [message, setMessage] = useState(""); // State for textarea
  const [errors, setErrors] = useState({}); // State for validation errors
  const [submissions, setSubmissions] = useState([]); // State to store submitted data
  // Function to validate form inputs
  const validate = () => {
    const newErrors = {}; // Object to hold errors

    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required"; // Email required error
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email is invalid"; // Email format error
    }

    if (!message) {
      newErrors.message = "Message is required"; // Message required error
    }
    if (!name) {
        newErrors.message = "Please enter name";
    }

    setErrors(newErrors); // Update error state
    // Return true if no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validate()) {
      // If validation passes
      const newEntry = { name, email, message }; // Create new submission object
      setSubmissions([...submissions, newEntry]); // Add new entry to submissions array
      setEmail(""); // Clear email input
      setName(""); // Clear email input
      setMessage(""); // Clear message input
      setErrors({}); // Clear errors
    }
  };
  return (
    <>
    <form onSubmit={handleSubmit}> {/* Form submission handler */}
      <div className="row align-items-center">
        <div className="col-6">
          <h1>Contact Us</h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
             Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`} // Add Bootstrap invalid class if error
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update email state
              required
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div> // Show email error
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`} // Add Bootstrap invalid class if error
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div> // Show email error
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className={`form-control ${errors.message ? "is-invalid" : ""}`} // Add invalid class if error
              id="exampleFormControlTextarea1"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update message state
              required
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">{errors.message}</div> // Show message error
            )}
          </div>
          <button type="submit" className="btn btn-primary">Submit</button> {/* Submit button */}
        </div>
      </div>
    </form>

    {submissions.length > 0 && (
        <div className="mt-4">
          <h2>Submitted Data</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
</>

  );
}

export default Contact;