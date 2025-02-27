import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>home page </div>} />
        <Route path='/about' element={<div>about page </div>} />
        <Route path='/contact' element={<div>contact page </div>} />
        <Route path='/my' element={<div>my page </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
