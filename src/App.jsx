import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return (
    <div
      className={theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}
    >
      <Navbar toggleTheme={toggleTheme} theme={theme}></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
