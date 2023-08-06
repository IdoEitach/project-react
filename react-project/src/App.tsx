import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserNamePage from "./pages/signUp/UserNamePage/userNamePage";
import { ThemeContext } from "./context/ThemeContext";
import ButtonTheme from "./components/Button-Theme";
import HomePage from "./pages/homePage/home";
import NvarBar from "./components/Bar";
import { Route, Routes } from "react-router-dom";
import Router from "./router/router";

function App() {
  const [theme, setTheme] = useState("light");
  if (theme === "dark") {
    document.body.style.backgroundColor = "#0f0f0f";
  } else {
    document.body.style.backgroundColor = "#fff";
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <NvarBar />
      </div>
      <div className="App">
        <ButtonTheme />
        <Router />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
