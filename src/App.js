import './App.css';
import Main from './components/Main.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={
          <Main></Main>
        } />
      </Routes>
    </Router>
    
  );
}

export default App;
