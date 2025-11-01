import React, { useState, useEffect } from "react";

const words = [
  "Hello",
  "Bonjour",
  "Hallo",
  "Ciao",
  "नमस्ते",
  "سلام",
  "안녕하세요",
  "こんにちは",
  "Olá",
  "Hei",
  "Здравствуйте",
  "Hej",
  "Sawubona",
  "Merhaba",
  "Shalom",
  "Sawasdee",
  "Xin chào",
  "Kamusta",
  "Salam",
  "God dag",
  "Sziasztok",
  "Hei",
  "Hola",
];

const colors = [
  "#1c352d",
  "#203a31",
  "#253f36",
  "#29443a",
  "#2e493f",
  "#33503f",
  "#385645",
  "#3d5b4a",
  "#426150",
  "#476655",
  "#4c6b5b",
  "#517060",
  "#567566",
  "#5b7a66",
];

const SplashScreen = ({ onFinish }) => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => {
        if (prev === words.length - 1) {
          // last word reached, show it for 1.5s then finish
          setTimeout(() => {
            onFinish();
          }, 300);
          return prev;
        }
        return prev + 1;
      });
    }, 100); // words change every 0.8s

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className="splash-screen"
      style={{ backgroundColor: colors[currentWord % colors.length] }}
    >
      <h1 className="animated-text">{words[currentWord]}</h1>
    </div>
  );
};

export default SplashScreen;
