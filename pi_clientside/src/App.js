import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage'
import Test from './pages/Test';
import ProfilePage from './pages/Profile/ProfilePage';
import Admin from './AdminPages/Admin';
import ResetPasswordPages from './pages/ResetPages/ResetPasswordPages';
import ForgetPages from './pages/ResetPages/ForgetPages';


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
        <Route exact path='/reset' element={<ResetPasswordPages/>} />
        <Route path='/reset/:token' element={<ForgetPages/>} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
