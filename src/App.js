import './App.css';
import Main from './components/Main.js';
import Main2 from './components/Main2.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={
          <Main2></Main2>
        } />
      </Routes>
    </Router>
    
  );
}

export default App;
