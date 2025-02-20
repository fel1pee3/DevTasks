import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Routes/Home/Home'
import Register from './Routes/Register/Register'
import Login from './Routes/Login/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App