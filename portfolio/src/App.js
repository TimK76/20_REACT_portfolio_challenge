import React, { useState } from 'react';
import './App.css';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import Navigation from './components/Navigation/navigation';
import Project from './components/Project/project';

function App() {
  const [navPoints] = useState([
    {
      name: 'front end',
      description: 'A few early projects done using simple html and css with a little Javascript',
    },
    {
      name: 'group projects',
      description: 'A few group projects that I participated in for class presentations.',
    },
    {
      name: 'React/JavaScript/CSS',
      description: ''
    },
  ])
  return (
    <div className="App">
      <Header><Navigation/></Header>
      <Hero />
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
