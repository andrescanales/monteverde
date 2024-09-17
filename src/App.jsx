// src/App.jsx
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
// import logo from './assets/images/logo_monte_verde.webp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <NavBar />
      {/* <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div> */}
        <section className="py-5 text-center container">
          <div className="container row py-3">
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Listado de Productos"/>}></Route>
              <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
            </Routes>
          </div>
        </section>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
