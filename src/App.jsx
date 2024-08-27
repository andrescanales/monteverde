// src/App.jsx
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      {/* <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div> */}
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
      </div>
    </>
  );
}

export default App;
