import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// component
import Header from './components/Header';

// screens
import Home from './screens/Home';
import Shipping from './screens/Shipping';
import Delivery from './screens/Delivery';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <HelmetProvider>
        <Header />
        <main className='mt-0'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ship' element={<Ship />} />
            <Route path='/delivery' element={<Delivery />} />
          </Routes>
        </main>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
