import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import NewContact from './pages/NewContact'
import AllContacts from './pages/AllContacts'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/newContact' element={<NewContact/>}/>
      <Route path='/contacts' element={<AllContacts/>}/>
    </Routes>
     <Footer/>
    </>
  )
}

export default App
