import React, { useState } from "react";
import Home from "./Pages/Home";
import "./global.css";
import SplashScreen from "./Components/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <div className="main-content fade-in">
          <Home />
        </div>
      )}
    </>
  );
};

export default App;
