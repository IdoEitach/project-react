import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserNamePage from "./pages/signUp/UserNamePage/userNamePage";
import { ThemeContext } from "./context/ThemeContext";
import ButtonTheme from "./components/Button-Theme";

function App() {
  const [theme, setTheme] = useState("light");
  if (theme === "dark") {
    document.body.style.backgroundColor = "rgb(20, 27, 32)";
  } else {
    document.body.style.backgroundColor = "#fff";
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <ButtonTheme />
        <UserNamePage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
