
import Home from './components/home';
import { useState } from 'react';
import About from './components/about';
import Navbar from './components/navbar';
import NotesState from './context/notes/NotesState';
import Login from './components/login';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alert from './components/alert';
import Signup from './components/signup';
import Userdetails from './components/userdetails';



function App() {

  
  return (
    <NotesState>
    <Router>
    <Navbar/>
    <Alert />
    <div className="container">
      <Routes>
        <Route exect path="/" element={<Home/>}/>
        <Route exect path="/about" element={<About/>}/>  
        <Route exect path="/login" element={<Login/>}/>  
        <Route exect path="/signup" element={<Signup/>}/>  
        <Route exect path="/userdetails" element={<Userdetails/>}/>  
      </Routes>
    </div>
    </Router>
    </NotesState>
  );
}

export default App;
