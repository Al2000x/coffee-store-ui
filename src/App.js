import React from 'react';
import './App.css';
import Body from './Components/body/Body';
import Footer from './Components/Footer';
import Header from './Components/header/Header';
import { Route, Routes } from 'react-router-dom';
import About from './Components/body/About';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className="container">
          <div className='body'>
            <Routes>
              <Route path="/" element={<Body text="flonty" />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
        <Footer>glonty</Footer>
      </div>
    </>
  );
}

export default App;
