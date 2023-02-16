import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';
import NavBar from './components/NavBar';


function App() {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, []);
  return (
      <>
        
        <Router className='app'>
        <NavBar/>
          <Routes>    
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} /> 
          </Routes>
        </Router>
      </>
  );
}

export default App;
