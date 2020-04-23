import React, { useState } from 'react';
import './App.css'

function Counter() {

  const [count, setCount] = useState();

  return (
    <div className="App">
      <div >
        <br />
        <form onChange={e => setCount(e.target.value)}>
          <label for="counter">Number :</label>
          <input type="number" id="counter" name="counter" />
        </form>
      </div>

      <div>
        <br />
        <button onClick={() => setCount(count - 1)} className="ui basic red button">
          -1
        </button>
        <button onClick={() => setCount(count - (-1))} className="ui basic green button">
          +1
        </button>
      </div>
      <br />
      <h3>Le compteur est  à : {count} </h3>
    </div>
  );
}

export default Counter;

