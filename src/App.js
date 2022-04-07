import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './components/Main/Main.js';
import About from './components/About/About.js';
import Marks from './components/Marks/Marks.js';
import Archive from './components/Archive/Archive.js';
import DataManager from './components/ManageData/DataManager.js';
import NoticeModal from './components/UI/NoticeModal';
import './App.css';

import noticeContext from './context/noticeContext';

const App = () => {
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [noticeMessage, setNoticeMessage] = useState("wait");

  const noticeContextValue = {
    isNoticeModalOpen,
    noticeMessage,
    setIsNoticeModalOpen,
    setNoticeMessage,
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
          <noticeContext.Provider value={noticeContextValue}>
            <DataManager></DataManager>
            {
              isNoticeModalOpen ?
              <NoticeModal></NoticeModal> : ""
            }
          </noticeContext.Provider>
        } />
      </Routes>
    </Router>

  );
}

export default App;
