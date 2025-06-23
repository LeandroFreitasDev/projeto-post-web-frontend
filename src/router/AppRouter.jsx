import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EventosPage from '../page/Eventos'
import LoginPage from '../page/Login'
import HomePage from '../page/Home'
import Cadastro from '../page/Cadastro'
import CadastroPage from '../page/Cadastro'



export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/eventos' element={<EventosPage />}></Route>
        <Route path='/cadastro' element={<CadastroPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>

    </Routes>
  )
}
