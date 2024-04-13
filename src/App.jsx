import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Znake from './pages/projects/znake'
import Fingerprint from './pages/projects/fingerprint'

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/znake" element={<Znake />} />
          <Route path="/projects/fingerprint" element={<Fingerprint />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
