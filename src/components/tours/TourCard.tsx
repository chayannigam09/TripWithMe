import { useNavigate } from "react-router-dom";

export default function TourCard({ tour }: any) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-slate-400 hover:border-blue-500 transition">

      <div className="grid md:grid-cols-[320px_1fr] h-72">

        <img src={tour.thumbnail} alt={tour.title} className="h-full w-full object-cover" />

        <div className="p-6">

          <div className="flex justify-between">

            <h2 className="text-2xl text-slate-900 font-bold">
                {tour.title}
            </h2>
            <span className="text-2xl font-bold text-slate-900">
              ₹{tour.price}
            </span>

          </div>

         

          <p className="text-slate-400">
            {tour.location}
          </p>

          <p className="text-slate-500 mt-2 line-clamp-2">
            {tour.overview}
          </p>

          <div className="flex gap-4 mt-5">
            <span className="bg-slate-800 px-4 py-2 rounded-full text-white">
              {tour.duration}
            </span>
          </div>

          <button
            onClick={() =>
              navigate(`/tour-details/${tour.slug}`)
            }
            className="mt-2 px-4 py-2 cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
          >
            View Details →
          </button>

        </div>
      </div>
    </div>
  );
}