import React, { useState } from 'react';
import './App.css';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
// import Navigation from './components/Navigation/navigation';
import Project from './components/Project/project';

function App() {
  const [currentPage, setCurrentPage] = useState("About")
  function changePage() {
    if(currentPage === "About") {
      return <About/>
    }
    if(currentPage === "Project") {
      return <Project/>
    }
    if(currentPage === "Contact") {
      return <Contact/>
  }
}
  
  return (
    <div className="App">
      <Header setCurrentPage = { setCurrentPage } />
      {changePage()}
      <Footer/>
    </div>
  );
}

export default App;
