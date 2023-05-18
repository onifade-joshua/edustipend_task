import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import Hero from "../src/components/Hero/Hero";
import "./App.css";


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero/>
    </div>
  );
};

export default App;
