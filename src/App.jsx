import React from 'react'
import HalamanSebelumLogin from './page/HalamanSebelumLogin'
import HalamanUtamaSesudahLogin from './page/HalamanUtamaSesudahLogin'
import Register from './page/Register'
import Login from './page/Login'
import HalamanResep from './page/HalamanResep'
import HalamanDetailResep from './page/HalamanDetailResep'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// komponen
import NavbarSebelumLogin from './components/NavbarSebelumLogin'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HalamanSebelumLogin/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="halamanUtamaSesudahLogin" element={<HalamanUtamaSesudahLogin/>} />
          <Route path="halamanResep" element={<HalamanResep/>} />
          <Route path="halamanDetailResep" element={<HalamanDetailResep/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App