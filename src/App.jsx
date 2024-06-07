import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneraLayout from './Components/GeneraLayout';
import Home from './page/Home'
import Product from './page/Products';
import Categorie from './page/Categories';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path='/' element={<GeneraLayout />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<Product />} />
            <Route path='/categories' element={<Categorie />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
