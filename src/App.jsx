import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import BackToTop from "./components/BackToTop";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import DevConnect from "./pages/DevConnect";
import Blogify from "./pages/Blogify";
import PortfolioProject from "./pages/PortfolioProject";
import TaskTracker from "./pages/TaskTracker";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo === "projects") {
      const timer = setTimeout(() => {
        const section = document.getElementById("projects");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100); // Delay to ensure DOM is rendered

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <Projects />
              <BackToTop />
            </Layout>
          }
        />
        <Route
          path="/devconnect"
          element={
            <>
              <Navbar />
              <DevConnect />
            </>
          }
        />
        <Route
          path="/blogify"
          element={
            <>
              <Layout>
                <Blogify />
              </Layout>
            </>
          }
        />
        <Route
          path="/portfolio-project"
          element={
            <>
              <Layout>
                <PortfolioProject />
              </Layout>
            </>
          }
        />
        <Route
          path="/tasktracker"
          element={
            <>
              <Layout>
                <TaskTracker />
              </Layout>
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Layout>
                <NotFound />
              </Layout>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
