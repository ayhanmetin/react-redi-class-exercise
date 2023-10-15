import { useState } from 'react';
import './App.css';

function App() {
  const [numberOfStars, setNumberOfStars] = useState(0);
  const [multiplier, setmultiplier] = useState(1);
  const COST = 5;

  function increaseStars() {
    setNumberOfStars((oldValue) => oldValue + multiplier);
  }

  function buymultiplier() {
    setmultiplier((oldValue) => oldValue + 1);
    setNumberOfStars((oldValue) => oldValue - COST);
  }

  return (
    <>
      <div className="App">
        <h1>Stars = {numberOfStars}</h1>
        <h1>multiplier = {multiplier}</h1>

        <div>
          <button onClick={() => increaseStars()}>Increase Stars</button>
        </div>

        {numberOfStars >= COST && (
          <div>
            <div>
              <h1> </h1>
            </div>
            <button className="multiplier" onClick={() => buymultiplier()}>
              Buy multiplier (Cost {COST} Star)
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
