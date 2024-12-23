import React from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/Navbar/MainNavbar";

const App = () => {
  return (
    <>
      <MainNavbar></MainNavbar>

      {/* Routing Pages Start. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/play" element={<Quiz />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* Routing Pages End. */}
    </>
  );
};

export default App;
