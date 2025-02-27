import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<div>contact page </div>} />

      </Routes>
    </BrowserRouter>


  )
}

export default App
