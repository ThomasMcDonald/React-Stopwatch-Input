import React from 'react';
import './App.css';
import TimeSeriesInput from 'time-series-input';

function App() {
  return (
    <div className="App">
      <p>Basic input</p>
      <TimeSeriesInput 
        name="stonks"
        required={false}
      />
    </div>
  );
}

export default App;
