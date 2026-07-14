import React from 'react';
import { Smartphone, Shield, Users, Headphones, MapPin, Calendar } from 'lucide-react';

const services = [
  // {
  //   icon: Smartphone,
  //   title: 'Smart Travel App',
  //   description: 'Plan, book, and manage your entire journey with our intelligent mobile application featuring offline maps and real-time updates.'
  // },
  // {
  //   icon: Shield,
  //   title: 'Travel Insurance',
  //   description: 'Comprehensive coverage for medical emergencies, trip cancellations, and lost baggage to ensure worry-free adventures.'
  // },
  {
    icon: Users,
    title: 'Group Matching',
    description: 'Connect with like-minded travelers and join groups based on interests, destinations, and travel dates.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support available wherever you are in the world, whenever you need assistance.'
  },
  // {
  //   icon: MapPin,
  //   title: 'Local Guides',
  //   description: 'Access to verified local guides and hidden gems recommended by fellow travelers and locals.'
  // },
  {
    icon: Calendar,
    title: 'Flexible Booking',
    description: 'Easy booking modifications, cancellations, and date changes with minimal fees and maximum flexibility.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose{" "}
            <span className="text-[#F25A29]">Trip</span>
            <span className="text-[#2FAE5B]">With</span>
            <span className="text-[#2E7DDB]">Me</span>
            ?
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">We make every journey affordable, comfortable, and memorable with carefully planned trips, trusted services, and unforgettable travel experiences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;