import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoutes from './compouents/ProtectedRoutes';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/home" element={
        <ProtectedRoutes>
          <Home />
        </ProtectedRoutes>
        } />
    </Routes>
    </BrowserRouter>
  )
}

export default App