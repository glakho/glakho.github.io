import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Summary from './components/Summary';
import Music from './components/Music';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/summary" element={<Summary />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
