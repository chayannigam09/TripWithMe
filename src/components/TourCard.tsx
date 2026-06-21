import { useNavigate } from "react-router-dom";

export default function TourCard({ tour }: any) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/tour-details/${tour.slug}`)
      }
      className="
        group 
        cursor-pointer
        rounded-xl
        overflow-hidden
        bg-slate-900
        border
        border-slate-800
        hover:border-blue-500/50
        transition-all
        duration-500
      "
    >
      {/* Image */}
      <div className="relative h-55 overflow-hidden">

        <img
          src={tour.thumbnail}
          alt={tour.title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition-transform
            duration-700
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            Popular
          </span>
        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        <p className="text-slate-400 text-sm">
          {tour.location}
        </p>

        <h3 className="text-xl font-bold text-white min-h-[64px]">
          {tour.title}
        </h3>

        <p className="text-slate-400 mt-3 text-sm line-clamp-2">
          {tour.overview}
        </p>

        <div className="flex justify-between items-center mt-5">

          <span className="text-slate-300">
            {tour.duration}
          </span>

          <span className="text-yellow-400 font-bold">
            ₹{tour.price}
          </span>

        </div>

      </div>
    </div>
  );
}