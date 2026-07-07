import React from 'react';
import { Award, Camera, Code2, Compass, Globe, Heart, Plane, Users, Zap } from 'lucide-react';
import kashmir from '../assets/images/kashmir.jpg'
import img from '../assets/images/me.jpeg'

const About = () => {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore More. Spend Less.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At TripWithMe, we believe that travel is more than just visiting new places. it's about creating unforgettable memories, meeting amazing people, and experiencing adventures that stay with you for a lifetime.
            </p>
            <p className="text-md text-gray-600 mb-8">
              Whether you're planning a weekend getaway, a group adventure, a family vacation, or a romantic escape, we make every trip comfortable, affordable, and hassle-free. From transportation and accommodation to sightseeing and local experiences, we take care of everything so you can simply enjoy the journey.
              Our goal is to help every traveler explore incredible destinations without overspending, while building a community of travel enthusiasts who love discovering the world together.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">Affordable</div>
                <div className="text-gray-600">Travel Packages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">Trusted</div>
                <div className="text-gray-600">Travel Partner</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24×7</div>
                <div className="text-gray-600">Customer Support</div>
              </div> */}
            </div>
          </div>
          <div className="relative">
            <img
              src={kashmir}
              alt="Team collaboration"
              className="rounded-xl shadow-2xl  w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">Explore</h4>
              <p className="text-gray-600">Discover incredible destinations and hidden gems with thoughtfully planned journeys.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">Trust</h4>
              <p className="text-gray-600">Transparent pricing, reliable services, and dedicated support from booking to return.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">Community</h4>
              <p className="text-gray-600">Travel with like-minded explorers, make new friends, and share unforgettable experiences.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">Memories</h4>
              <p className="text-gray-600">Every trip is designed to create stories you'll proudly remember for years to come.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet the Vision Behind TripWithMe</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="CEO"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Chayan Nigam</h4>
              <p className="text-blue-600 font-semibold mb-4">CEO & Founder</p>
              <p className="text-gray-600">Former Google engineer with 10+ years in travel tech. Passionate about using AI to enhance travel experiences.</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="CTO"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Sarah Martinez</h4>
              <p className="text-blue-600 font-semibold mb-4">CTO & Co-Founder</p>
              <p className="text-gray-600">Former Airbnb senior engineer specializing in scalable platforms and mobile applications for travel industry.</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="CPO"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">David Kumar</h4>
              <p className="text-blue-600 font-semibold mb-4">Chief Product Officer</p>
              <p className="text-gray-600">Award-winning product designer with experience at Uber and Spotify, focused on user-centric travel solutions.</p>
            </div>
          </div>
        </div> */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Meet the Vision Behind{" "}
            <span className="text-[#F25A29]">Trip</span>
                <span className="text-[#2FAE5B]">With</span>
                <span className="text-[#2E7DDB]">Me</span>
          </h3>

          <div className="max-w-3xl mx-auto text-center">
            <img
              src={img} // Replace with your own image
              alt="Chayan Nigam"
              className="w-36 h-36 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-xl"
            />

            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
              Chayan Nigam
            </h4>

            <p className="text-trip font-semibold text-lg mt-2 mb-6">
              Founder & CEO
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-6 text-md">
              Travel has the power to connect people, create unforgettable memories,
              and inspire new adventures.
              <br />
              <br />
              <i>I started{" "}</i>
              <span className="font-semibold">
                <span className="text-[#F25A29]">Trip</span>
                <span className="text-[#2FAE5B]">With</span>
                <span className="text-[#2E7DDB]">Me</span>
              </span>{" "}
              <i>with one simple mission — to make travel affordable, exciting, and accessible for everyone.
              <br />
              <br />
              Whether you're exploring with friends, family, or joining a group of
              fellow travelers, our goal is to deliver hassle-free journeys,
              unforgettable experiences, and memories you'll cherish for a lifetime.</i>
            </p>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <span className="inline-flex gap-2 items-center px-4 py-2 bg-white rounded-full shadow text-sm font-medium">
                <Globe className="h-4 w-4 text-orange-600" /> Passionate Traveller
              </span>

              <span className="inline-flex gap-2 items-center px-4 py-2 bg-white rounded-full shadow text-sm font-medium">
                <Code2 className="h-4 w-4 text-orange-600" /> Software Engineer
              </span>

              <span className="inline-flex gap-2 items-center px-4 py-2 bg-white rounded-full shadow text-sm font-medium">
                <Plane className="h-4 w-4 text-orange-600" /> Travel Entrepreneur
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;