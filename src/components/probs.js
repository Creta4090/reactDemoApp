import React, { useState } from "react";

function ProbsDetails({ firstName, lastname }) {
  const [childInput, setChildInput] = useState("");

  const [lastNameInput, setLastName] = useState("");

  const handleInputChange = (event) => {
    setChildInput(event.target.value);
  };

  const handleInputLastName = (event) => {
    setLastName(event.target.value);
  };

  // Function to send the current child data back to the parent
  const sendData = (event) => {
     event.preventDefault();
    // 4. Call the parent's function via props and pass the data as an argument
    firstName(childInput);
    lastname(lastNameInput);
    setLastName('');
    setChildInput('');
  };

  return (
    <>
    <form onSubmit={sendData}>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          First Name
        </label>
        <input
        className="form-control"
          type="text"
          id="formGroupExampleInput"
          placeholder="firstName"
          value={childInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Last Name
        </label>
        <input
         className="form-control"
          type="text"
          id="formGroupExampleInput"
          placeholder="lastName"
          value={lastNameInput}
          onChange={handleInputLastName}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit Data to Parent
      </button>
      </form>
    </>
  );
}

export default ProbsDetails;
