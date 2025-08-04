import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import ServicesPage from './pages/Services/ServicesPage'
import ContactPage from './pages/Contact/ContactPage'

function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/ABOUT' element={<AboutPage/>}/>
        <Route path='/SERVICES' element={<ServicesPage/>}/>
        <Route path='/CONTACt' element={<ContactPage/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
