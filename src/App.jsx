import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Catalog from './pages/catalog'
import CreateMascota from './pages/createMascota'
import Edition from './pages/editMascota'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Catalog />}/>
        <Route path="/create" element={<CreateMascota />} />
        <Route path="/edit/:mascotaId" element={<Edition />} />

        
      </Routes>
    </>
  )
}

export default App
