// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DogList from './components/DogList';
import DogDetails from './components/DogDetails';


import dogsData from './dogsData';
import Navbar from './components/Navbar';
import Achat from './components/achat';




function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    setDogs(dogsData);
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/achat/:index" element={<Achat dogs={dogs} />} />
          <Route path="/dogs/:index" element={<DogDetails dogs={dogs} />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
