import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/pages/Home';
import './App.css';


function App() {
  useEffect(() => {
    document.body.style.backgroundColor = 'lightgray';
  }, []);
  return (
      <Router className='app'>
        <Routes>    
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
