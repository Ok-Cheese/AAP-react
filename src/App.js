import './App.css';
import Main from './components/Main.js';
import Main2 from './components/Main2.js';
import About from './components/About.js';
import Logos from './components/Logos.js';
import Archive from './components/Archive.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={
          <Main></Main>
        } />
        <Route path="/alt" element={
          <Main2></Main2>
        } />
        <Route path="/about" element={
          <About></About>
        } />
        <Route path="/logos" element={
          <Logos></Logos>
        } />
        <Route path="/archive/:id" element={
          <Archive></Archive>
        } />
      </Routes>
    </Router>
    
  );
}

export default App;
