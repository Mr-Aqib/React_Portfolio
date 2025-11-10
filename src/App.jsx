import React, { useState } from "react";
import Home from "./Pages/Home";
import "./global.css";
import SplashScreen from "./Components/SplashScreen";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from "./Pages/Education";
import Header from "./Components/Header";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import FooterSec from "./Components/FooterSec";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <Toaster />

      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <Router>
          <Header />
          <div className="main-content fade-in">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Education" element={<Education />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Experience" element={<Experience />} />
            </Routes>
          </div>
          <FooterSec />
        </Router>
      )}
    </>
  );
};

export default App;
