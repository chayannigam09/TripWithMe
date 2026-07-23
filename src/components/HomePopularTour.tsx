import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useNavigate } from "react-router-dom";
import TourCard from "./TourCard";

type Tour = {
  slug: string;
  title: string;
  location: string;
  thumbnail: string;
  duration: string;
  price: number;
  overview: string;
};

interface Props {
  tours: Tour[];
}

export default function HomePopularTours({ tours }: Props) {
  const navigate = useNavigate();

  return (
    <section className="pt-10 pb-5 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Popular Tours
            </h2>
          </div>
          <button
            onClick={() => navigate("/popular-tours")}
            className="text-blue-400 hover:text-blue-300 cursor-pointer"
          >View All →
          </button>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="popular-tour-slider"
          loop
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {tours.map((tour) => (
            <SwiperSlide key={tour.slug}>
              <TourCard tour={tour} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}