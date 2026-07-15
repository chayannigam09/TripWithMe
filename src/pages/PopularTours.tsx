import { useMemo, useState } from "react";
import TourFilters from "../components/tours/TourFilter";
import TourCard from "../components/tours/TourCard";
import { tours } from "../tours";
import { PlaneTakeoff } from "lucide-react";
import TourNotFound from "../components/tours/TourNotFound";

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
              <TourNotFound/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}