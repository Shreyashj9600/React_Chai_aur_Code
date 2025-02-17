import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './components/Card'

function App() {
  let myarr = [1, 2, 3, 4]

  return (
    <>

      <Example someArr={myarr} />
      <Example />

    </>
  )
}

export default App
