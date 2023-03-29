import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';
import NavBar from './components/NavBar';
import SpringTuneUp from './components/SpringTuneUp';


function App() {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
    document.title = 'Ryan Mee';
    
  }, []);
  return (
      <>     
        <Router className='app'>
        <NavBar/>
          <Routes>    
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} /> 
            <Route path='/events/springtuneup' element={<SpringTuneUp img1Src='event_1.png' img2Src='event_1_back.png' />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
