import { useMemo, useState } from "react";
import TourFilters from "../components/tours/TourFilter";
import TourCard from "../components/tours/TourCard";
import { tours } from "../tours";
import { PlaneTakeoff } from "lucide-react";

export default function PopularTours() {
  const [search, setSearch] = useState("");
  const [destination, setDestination] = useState("All Destinations");

  // Unique destinations
  const destinations = [
    "All Destinations",
    ...new Set(tours.map((tour) => tour.location)),
  ];

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(search.toLowerCase()) ||
        tour.location.toLowerCase().includes(search.toLowerCase());

      const matchesDestination =
        destination === "All Destinations" ||
        tour.location === destination;

      return matchesSearch && matchesDestination;
    });
  }, [search, destination]);

  return (
    <div className="min-h-screen">
      <section className="py-4 text-center">
        <h1 className="text-5xl font-bold text-slate-900">
          Discover Your Next Adventure
        </h1>
        <p className="text-slate-400 mt-4">
          Handpicked travel experiences across India
        </p>
      </section>
      <div className="max-w-7xl mx-auto px-2 pb-12">
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          <TourFilters search={search}
            setSearch={setSearch}
            destination={destination}
            setDestination={setDestination}
            destinations={destinations} />
          <div className="space-y-3">
            {filteredTours.length ? (
              filteredTours.map((tour) => (
                <TourCard
                  key={tour.slug}
                  tour={tour}
                />
              ))
            ) : (
              <div className="text-center md:p-20 py-20 px-10 bg-white rounded-lg border border-slate-200">
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center">
                  <PlaneTakeoff className="h-12 w-12 text-[#F25A29]" />
                </div>
                <h2 className="text-2xl font-semibold">
                  New Destinations Are On The Way!
                </h2>

                <p className="text-gray-500 mt-2">
                  We couldn't find a matching trip right now, but don't worry! Our team is
                  continuously adding exciting destinations and weekend getaways across
                  India.
                </p>
                <p className="mt-2 font-semibold">
                  🌍 Stay tuned — your next adventure is just around the corner!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}