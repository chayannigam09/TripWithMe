import TourFilters from "../components/tours/TourFilter";
import TourCard from "../components/tours/TourCard";
import { tours } from "../tours";

export default function PopularTours() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="py-10 text-center">
        <h1 className="text-5xl font-bold text-white">
          Discover Your Next Adventure
        </h1>
        <p className="text-slate-400 mt-4">
          Handpicked travel experiences across India
        </p>
      </section>
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          <TourFilters />
          <div className="space-y-6">
            {tours.map((tour) => (
              <TourCard
                key={tour.slug}
                tour={tour}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}