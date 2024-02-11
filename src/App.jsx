import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import Yippie from './Pages/Yippie';
import Food from './Pages/Food';
import Dessert from './Pages/Dessert';
import Drinks from './Pages/Drinks';
import Activities from './Pages/Activities';
import FinalPage from './Pages/FinalPage';

function App() {
  return (
    <Router>
      <div className='mainDiv'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Yippie' element={<Yippie />} />
          <Route path='/Food' element={<Food />} />
          <Route path='/Drinks' element={<Drinks />} />
          <Route path='/Dessert' element={<Dessert />} />
          <Route path='/Activities' element={<Activities />} />
          <Route path='/ThankYouuu' element={<FinalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
