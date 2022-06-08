import React, { useState } from 'react';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Navigation from './components/Navigation/navigation';
import Project from './components/Project/project';
import Hero from './components/Hero/hero';
import './App.css';

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
      <Header />
      <Hero />
      <Footer/>
    </div>
  );
}

export default App;
