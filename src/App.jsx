import React from 'react'
import HalamanSebelumLogin from './page/HalamanSebelumLogin'
import Login from './page/Login'
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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App