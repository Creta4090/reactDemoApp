import React, { useState } from 'react'; 
import ProbsDetails from '../components/probs'
 
 function About() {
 
 // 1. Define the state in the parent component
 const [dataFromChild, setDataFromChild] = useState('');

 const [lastNameField, setLastName] = useState('');

  // 2. Define a callback function to receive data from the child
  const handleChildData = (childData) => {
    setDataFromChild(childData);
  };

  const handleLastName = (lastname) => {
    setLastName(lastname);
  }
  
  return (
    <>
      <h1>About Us</h1>
      <h2>Parent Component</h2>
      <p>Data received from child: <strong>{dataFromChild}</strong> <strong>{lastNameField}</strong></p>
      {/* 3. Pass the callback function as a prop to the child */}
      <ProbsDetails firstName={handleChildData} lastname={handleLastName} />
    </>
  );
};

export default About; 
// Export the component as default
 