import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MyServices from "./components/MyServices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <MyServices/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
