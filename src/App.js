import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Qualification from './Components/skills/qualification/Qualification';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Scrollup from './Components/scrollup/Scrollup';

function App() {
  return (
    <>
    <Header />
    <main className='main'>
    <Home />
    <About />
    <Skills />
    <Qualification />
    <Contact />
    </main>

    <Footer />
    <Scrollup />
    </>
  );
}

export default App;
