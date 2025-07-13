import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import BackToTop from "./components/BackToTop";
import { Routes, Route } from "react-router-dom";
import DevConnect from "./pages/DevConnect";
import Blogify from "./pages/Blogify";
import PortfolioProject from "./pages/PortfolioProject";
import TaskTracker from "./pages/TaskTracker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <BackToTop />
            </>
          }
        />
        <Route path="/devconnect" element={<DevConnect />} />
        <Route path="/blogify" element={<Blogify />} />
        <Route path="/portfolio-project" element={<PortfolioProject />} />
        <Route path="/tasktracker" element={<TaskTracker />} />
      </Routes>
    </>
  );
}

export default App;
