import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/home' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
