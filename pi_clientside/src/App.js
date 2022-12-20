import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage'
import Test from './pages/Test';
import ProfilePage from './pages/Profile/ProfilePage';
import Admin from './AdminPages/Admin';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/test' element={<Test/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
