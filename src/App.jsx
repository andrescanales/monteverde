// src/App.jsx
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

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
        <h1>MonteVerde Coffee Store</h1>
        <ItemListContainer greeting="Listado de Productos"/>
      </div>
    </>
  );
}

export default App;
