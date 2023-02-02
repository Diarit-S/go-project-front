import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen">
      <h1 className="text-3xl font-bold underline">Go Project Front!</h1>
    </div>
  );
}

export default App;
