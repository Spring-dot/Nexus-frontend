import React from "react";
import { Routes, Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/dashboard/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />


    </Routes>
   
  );
}

export default App;
