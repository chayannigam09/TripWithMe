import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import url from '../assets/urls/urls.json';
import logo from '../assets/images/logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              {/* <MapPin className="h-8 w-8 text-blue-400 mr-2" /> */}
              <img src={logo} alt="" className='w-16 mr-2'  />
              <h1 className="text-2xl font-bold" >
                <span className="text-[#F25A29]">Trip</span>
                <span className="text-[#2FAE5B]">With</span>
                <span className="text-[#2E7DDB]">Me</span>
              </h1>
            </div>
            <p className="text-gray-300 text-md leading-relaxed mb-6 max-w-md">
              At TripWithMe, we believe every journey should be affordable, exciting, and unforgettable. Let us help you explore new destinations, meet amazing people, and create memories you'll cherish forever.
            </p>
            <div className="flex space-x-4">
              <a href={url.facebook} target='_blank' className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              {/* <a href="#" className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a> */}
              <a href={url.instagram} target='_blank' className="bg-pink-600 p-3 rounded-lg hover:bg-pink-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="#" target='_blank' className="bg-blue-800 p-3 rounded-lg hover:bg-blue-900 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/popular-tours"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Destinations
                </Link>
              </li>

              <li>
                <Link
                  to="/popular-tours"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Travel Packages
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/policies"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Flight Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hotel Reservations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Local Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Group Travel</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">24/7 Support</a></li>
            </ul>
          </div> */}
        </div>
        <div className="border-t border-gray-800 mt-4 p-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-gray-300">tripwithme.indore@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-gray-300">+91 7583869015</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-gray-300">Indore (MP), India</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-1 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm mb-4">
            © {new Date().getFullYear()} TripWithMe. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;