import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Routes/Home/Home'
import Register from './Routes/Register/Register'
import Login from './Routes/Login/Login'
import Perfil from './Routes/Perfil/Perfil'
import CreateProject from './Routes/CreateProject/CreateProject'
import ScreenYourWork from './Routes/ScreenYourWork/ScreenYourWork'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/perfil' element={<Perfil />}></Route>
        <Route path='/createProject' element={<CreateProject />}></Route>
        <Route path='/screenYourWork' element={<ScreenYourWork />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App