import React from 'react'
import Home from './Pages/Home'
import './index.css'
import {ToastContainer} from 'react-toastify'
const App = () => {
  return (
    <div>
      <Home/>
      <ToastContainer/>
    </div>
  )
}

export default App