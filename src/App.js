import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import './App.css';


function App() {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, []);
  return (
      <Router className='app'>
        <Routes>    
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} /> 
          {/* <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
