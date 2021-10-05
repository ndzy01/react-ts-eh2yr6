import React, { useState, useCallback } from 'react';
import T1 from './src/docs/t1';
import { createContainer } from 'unstated-next';
import { render } from 'react-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import IHttp from './src/IHttp';

const markdown = `Just a link: https://reactjs.com.`;

function useCounter(initialState = 0) {
  let [count, setCount] = useState(initialState);
  let decrement = () => setCount(count - 1);
  let increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

let Counter = createContainer(useCounter);

function CounterDisplay() {
  console.log('CounterDisplay');

  let counter = Counter.useContainer();
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  );
}

function App() {
  console.log('App');

  return (
    <Counter.Provider>
      <IHttp />
      <T1 />
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
