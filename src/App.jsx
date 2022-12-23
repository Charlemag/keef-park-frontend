import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import StrainsPage from './pages/StrainsPage';
import StrainsDetailsPage from './pages/StrainsDetailsPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';



import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
    <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path="/profile" element={<IsPrivate><Profile /></IsPrivate>} />
        <Route path="/strains" element={<IsPrivate><StrainsPage /></IsPrivate>}  />
        <Route path="/strains/:strainsId" element={<IsPrivate><StrainsDetailsPage /></IsPrivate>} />
        <Route path='/myprofile' element={<IsPrivate><UpdateProfile/></IsPrivate>} />
      </Routes>
    </div>
  )
}



export default App;
