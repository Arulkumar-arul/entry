import React from 'react'
import Home from './components/Home'
import Profile from './components/Profile'
import Product from './components/Product'

import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        {/* Single page application routing methods - SPA */}
            <Route path='/' element={<Home />} />
            <Route path='/profile'  element={<Profile />} />
            <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App