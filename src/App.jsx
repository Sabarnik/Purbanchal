import React from "react"; // ✅ Add this
import "./App.css";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Testimonials from "./components/TestimonialsSection";
import BlogNewsSection from "./components/BlogNewsSection";
import Footer from "./components/Footer";
import LegacySection from "./components/LegacySection";
import ConstructionCTA from "./components/ConstructionCTA"; // Import the new component 
import CSRSection from "./components/CSR";
import AboutSection from "./components/AboutSection"; // Import the new AboutSection component
function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Topbar />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Testimonials />
        <CSRSection />
        <BlogNewsSection />
        <ConstructionCTA /> 
        <LegacySection />
        {/* <div className="h-20"></div> */}
        <Footer />
      </div>
    </main>
  );
}

export default App;
