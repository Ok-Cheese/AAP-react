import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './components/Main/Main.js';
import About from './components/About/About.js';
import Marks from './components/Marks/Marks.js';
import Archive from './components/Archive/Archive.js';
import DataControl from './components/DataControll/DataControl.js';
import './App.css';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={
          <Main></Main>
        } />
        <Route path="/about" element={
          <About></About>
        } />
        <Route path="/marks" element={
          <Marks></Marks>
        } />
        <Route path="/archive/:cityId" element={
          <Archive></Archive>
        } />
        <Route path="/dataControll" element={
          <DataControl></DataControl>
        } />
      </Routes>
    </Router>
    
  );
}

export default App;
