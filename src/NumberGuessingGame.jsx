import React, { useState } from 'react';

const NumberGuessingGame = () => {
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userNumber = parseInt(userInput, 10);

    if (isNaN(userNumber) || userNumber < 0 || userNumber > 100) {
      setFeedback('Please enter a valid number between 0 and 100.');
      return;
    }

    setCount(count + 1);

    if (userNumber === randomNumber) {
      setFeedback(`WOOHOO... CORRECT NUMBER!!! You found it in ${count} attempt${count === 1 ? '' : 's'}.`);
    } else if (userNumber < randomNumber) {
      setFeedback(`Your number is too small. Give me a higher number than ${userNumber}.`);
    } else {
      setFeedback(`Your number is too large. Give me a smaller number than ${userNumber}.`);
    }

    setUserInput('');
  };

  return (
    <div>
      <p takingInput>Choose any number between 0 and 100:</p>
      <form onSubmit={handleSubmit}>
        <input type="number" value={userInput} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <p>{feedback}</p>
    </div>
  );
};

export default NumberGuessingGame;
