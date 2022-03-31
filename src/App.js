import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './components/Main/Main.js';
import About from './components/About/About.js';
import Marks from './components/Marks/Marks.js';
import Archive from './components/Archive/Archive.js';
import DataControl from './components/DataControl/DataControl.js';
import WarningModal from './components/UI/WarningModal';
import './App.css';

import warningContext from './context/warningContext';

const App = () => {
  const [isWarningModalOn, setIsWarningModalOn] = useState(false);
  const [warningText, setWarningText] = useState("");

  const warningContextValue = {
    isWarningModalOn, 
    warningText, 
    setIsWarningModalOn, 
    setWarningText
  }

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
        <Route path="/dataControl" element={
          <warningContext.Provider value={warningContextValue}>
            {
              isWarningModalOn ? 
                <WarningModal></WarningModal> : ""
            }
            <DataControl></DataControl>
          </warningContext.Provider>
        } />
      </Routes>
    </Router>
    
  );
}

export default App;
