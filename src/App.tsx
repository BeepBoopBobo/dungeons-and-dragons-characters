import React from 'react';
import './App.css';
import { Routes, NavLink, Route } from 'react-router-dom';
import Home from './pages/Home';
import Character from './pages/Character';
import { charDummyData } from './DummyData';
import CreateChar from './pages/CreateChar';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character/:id' element={<Character />} />
        <Route path='/create-character' element={<CreateChar />} />
      </Routes>

    </div>
  );
}

export default App;
