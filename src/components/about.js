import React, { useState } from 'react'; 

const About = () => {
  const [inputValue, setInputValue] = useState(''); 
  // State to store current input value

  const handleChange = (e) => {
    setInputValue(e.target.value); 
    // Update inputValue state on every input change
  };

  const handleClick = () => {
   alert("Data from form " + inputValue);
  }

  return (
    <>
      <h1>About Us</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange}
        placeholder="Type something here" 
      />
      <button className='primary-btn' onClick={handleClick} >Submit</button>
      {/* Input box with onChange handler */}
      <p>{inputValue}</p> 
      {/* Display the typed input live below the input box */}
    </>
  );
};

export default About; 
// Export the component as default
 