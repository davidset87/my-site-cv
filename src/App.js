import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CVWebsite from './components/CVWebsite';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CVWebsite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;