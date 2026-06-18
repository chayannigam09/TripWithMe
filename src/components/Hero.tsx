import React from 'react';
import { Search, Calendar, Users, MapPin } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://t3.ftcdn.net/jpg/03/53/27/18/360_F_353271860_8efDQDPpdpoIqq2ngfJRbVP3JHPZzB9x.jpg)',
          opacity:'0.5'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Travel Together<br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
           Explore Better with TripWithMe
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Discover extraordinary destinations, connect with fellow travelers, and create unforgettable memories with our innovative travel technology platform.
        </p>

        {/* Search Box */}
        {/* <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                <option>1 Traveler</option>
                <option>2 Travelers</option>
                <option>3+ Travelers</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center font-semibold">
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </div> */}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-4xl font-bold mb-2">5K+</div>
            <div className="text-gray-300">Happy Travelers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-gray-300">Destinations</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">99%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
        </div>
      <button onClick={() => navigate("/popular-tours")} className="mt-4 px-8 py-3 text-white font-semibold rounded-full animate-bounce cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
        GET STARTED 
      </button>
      </div>
    </section>
  );
};

export default Hero;