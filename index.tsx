import React, { useState, useCallback } from 'react';
import { createContainer } from 'unstated-next';
import { render } from 'react-dom';

function useCounter(initialState = 0) {
  let [count, setCount] = useState(initialState);
  let decrement1 = useCallback(() => setCount(count - 1), []);
  let increment1 = useCallback(() => setCount(count + 1), []);
  let decrement = () => setCount(count - 1);
  let increment = () => setCount(count + 1);
  return { count, decrement, increment, decrement1, increment1 };
}

let Counter = createContainer(useCounter);

function CounterDisplay() {
  console.log('CounterDisplay');

  let counter = Counter.useContainer();
  return (
    <div>
      <button onClick={counter.decrement1}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment1}>+</button>
    </div>
  );
}

function App() {
  console.log('App');

  return (
    <Counter.Provider>
      <CounterDisplay />
      <Counter.Provider initialState={2}>
        <div>
          <div>
            <CounterDisplay />
          </div>
        </div>
      </Counter.Provider>
    </Counter.Provider>
  );
}

render(<App />, document.getElementById('root'));
