import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

import Landing from './pages/Landing/Landing'
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorite'
import Nav from './components/Nav/Nav';

function App() {


  return (
    <>
      <Router>
      <div className="container">
        <Nav />
      </div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
