import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <a
        href={`https://wa.me/917583869015?text=${encodeURIComponent(
          `Hi TripWithMe 👋
I am interested in your travel packages. Please share the details.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
      <FaWhatsapp className="w-6 h-6 text-green-500" />

      </a>
    </div>
  );
}

export default App;