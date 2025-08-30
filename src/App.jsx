import {useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Headroom from 'react-headroom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Znake from './pages/projects/znake'
import Fingerprint from './pages/projects/fingerprint'
import ToothMate from './pages/projects/toothmate'

function App() {


    return (
        <>
            <Router>
                <ScrollToTop/>
                <Headroom>
                    <Header/>
                </Headroom>
                <Routes>
                    {/* Single Page */}
                    <Route path="/" element={
                        <>
                            <section id="home"><Home/></section>
                            <section id="about"><About/></section>
                            <section id="projects"><Projects/></section>
                            <section id="contact"><Contact/></section>
                        </>
                    }/>

                    {/* Separate Pages */}
                    <Route path="/znake" element={<Znake/>}/>
                    <Route path="/fingerprint" element={<Fingerprint/>}/>
                    <Route path="/toothmate" element={<ToothMate/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}

export default App
