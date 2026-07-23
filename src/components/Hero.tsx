import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-[260px] md:min-h-screen flex items-center justify-center">
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
      <div className="h-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-0 md:mb-6 mt-8 leading-tight">
          Travel Together<br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
           Explore Better with TripWithMe
          </span>
        </h1>
        <p className="hidden md:block text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
         Discover breathtaking destinations, travel with like-minded explorers, and create unforgettable memories through affordable, well-planned journeys designed for every adventure.
        </p>

        <div className="hidden md:grid grid-cols-3 gap-3 text-white">
          <div>
            <div className="text-2xl md:text-4xl font-bold mb-2">100+</div>
            <div className="text-gray-300">Happy Travelers</div>
          </div>
          <div>
            <div className="text-2xl md:text-4xl font-bold mb-2">10+</div>
            <div className="text-gray-300">Destinations</div>
          </div>
          <div>
            <div className="text-2xl md:text-4xl font-bold mb-2">99%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
        </div>
        <button onClick={() => navigate("/popular-tours")} className="mt-8 px-6 py-2 text-white font-semibold rounded-full animate-bounce cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
          GET STARTED 
        </button>
      </div>
    </section>
  );
};

export default Hero;