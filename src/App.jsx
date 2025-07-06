import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import BackToTop from "./components/BackToTop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Projects />
      <BackToTop />
    </>
  );
}

export default App;
