import React from 'react';
import { Star, Quote, HeartHandshake, ShieldCheck, Wallet, MapPinned } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import avatar from '../assets/images/avatar.png'
import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Indore, Madhya Pradesh",
    image: "",
    rating: 5,
    text: "My Pachmarhi trip with TripWithMe was perfectly organized. The hotel, sightseeing, and travel arrangements were smooth, and the trip coordinator made sure everyone enjoyed every moment. Looking forward to my next trip!"
  },
  {
    id: 2,
    name: "Sneha Verma",
    location: "Bhopal, Madhya Pradesh",
    image: "",
    rating: 5,
    text: "This was my first group trip and I was a little nervous, but the entire experience was amazing. I made new friends, visited beautiful places, and everything was managed professionally. Highly recommended! "
  },
  {
    id: 3,
    name: "Aman Gupta",
    location: "Ujjain, Madhya Pradesh",
    image: "",
    rating: 5,
    text: "The Maheshwar and Omkareshwar trip was worth every rupee. Comfortable travel, delicious food, and a well-planned itinerary made it a memorable weekend. Great experience with the TripWithMe team."
  },
  {
    id: 4,
    name: "Pooja Singh",
    location: "Dewas, Madhya Pradesh",
    image: "",
    rating: 5,
    text: "Everything was exactly as promised. No hidden charges, clean accommodation, friendly staff, and enough time to enjoy every destination. I would definitely travel with TripWithMe again."
  },
  {
    id: 5,
    name: "Vikas Patel",
    location: "Indore, Madhya Pradesh",
    image: "",
    rating: 5,
    text: "The best thing about TripWithMe is their planning. We never felt rushed, and every destination was covered properly. The trip was fun, safe, and full of unforgettable memories."
  },
  {
    id: 6,
    name: "Neha Joshi",
    location: "Ratlam, Madhya Pradesh",
    image: "",
    rating: 5,
    text: "I joined the trip as a solo traveler and returned with wonderful friends. The atmosphere was friendly, the coordinator was supportive, and every activity was enjoyable. Can't wait to book another trip!"
  }
];

const Testimonials = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied travelers who have discovered the world with TripWithMe
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          grabCursor
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className=""
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative min-h-[280px] ">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100" />

                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    onError={(e) => {
                      e.currentTarget.src = avatar;
                    }}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />

                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      {testimonial.location}
                    </p>

                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed italic line-clamp-5">
                  "{testimonial.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats Section */}
        <div className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Amazing Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Would Recommend</div>
            </div>
          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="flex flex-col items-center">
              <MapPinned className="h-12 w-12 mb-3" />
              <h4 className="font-semibold">Curated Destinations</h4>
              <p className="text-blue-100 text-sm mt-1">
                Handpicked trips you'll love.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Wallet className="h-12 w-12 mb-3" />
              <h4 className="font-semibold">Budget Friendly</h4>
              <p className="text-blue-100 text-sm mt-1">
                Best experiences at the best price.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <ShieldCheck className="h-12 w-12 mb-3" />
              <h4 className="font-semibold">Trusted Service</h4>
              <p className="text-blue-100 text-sm mt-1">
                Safe, transparent and reliable.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <HeartHandshake className="h-12 w-12 mb-3" />
              <h4 className="font-semibold">Customer First</h4>
              <p className="text-blue-100 text-sm mt-1">
                Your satisfaction is our priority.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;