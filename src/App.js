import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calc from './components/Calc';
import Home from './components/Home';
import Nav from './components/Nav';
import Quote from './components/Quote';
import './components/myStyle.css';

function App() {
  return (
  <>
    <Nav />
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<Home />}/>;
        <Route exact path='/calc' element={<Calc />}/>;
        <Route exact path='/quote' element={<Quote />}/>;
      </Routes>
    </div>
  </> 
  );
}

export default App;
