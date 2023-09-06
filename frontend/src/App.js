import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Loginn from './Components/Loginn';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Signup from './Components/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PoetryBooks from './Components/PoetryBooks';
import FictionBooks from './Components/FictionBooks';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {loggedIn ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/login" element={<Loginn onLogin={handleLogin} />} />
          )}
           <Route path="/" element={<Loginn onLogin={handleLogin} />} />
          <Route path="/" exact component={Home}/>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/poetry" element={<PoetryBooks />} />
          <Route path="/fiction" element={<FictionBooks />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </>
  );
}

export default App;
