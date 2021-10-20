import React from 'react';
import './App.css';
import StopwatchInput from 'react-stopwatch-input';

function App() {
  return (
    <div className="App">
      <p>Basic input</p>
      <StopwatchInput 
        name="stopwatchInput"
        required={false}
      />
    </div>
  );
}

export default App;
