// App.js
import React from "react";
import { useState } from "react";
import ThemeProvider from "./theme/index";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

export default function App() {
  const [isDarkTheme, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider isDarkTheme={isDarkTheme}>
      <Router>
        <Routes toggleDarkMode={toggleDarkMode} />
      </Router>
    </ThemeProvider>
  );
}
