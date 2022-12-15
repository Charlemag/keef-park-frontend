import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';

import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path="/projects" element={<IsPrivate><ProjectPage /></IsPrivate>}  />
        <Route path="/projects/:projectId" element={<IsPrivate><ProjectDetailsPage /></IsPrivate>} />
      </Routes>
    </div>
  )
}

export default App
