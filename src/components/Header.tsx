import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, MapPin, User, ShoppingBag } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="" className='w-16 mr-2' />
            <h1 className="text-2xl font-bold">
              <span className="text-[#F25A29]">Trip</span>
              <span className="text-[#2FAE5B]">With</span>
              <span className="text-[#2E7DDB]">Me</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>

            <Link
              to="/popular-tours"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Destinations
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>

            <Link
              to="/popular-tours"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Destinations
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;