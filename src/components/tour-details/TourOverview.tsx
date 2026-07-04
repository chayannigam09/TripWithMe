import {
  MapPin,
  Clock3,
  Hotel,
  Car,
  Mountain,
} from "lucide-react";

export default function TourOverview({
  tour,
}: any) {
  return (
    <section className="mt-1">

      <h2 className="text-3xl font-bold mb-2">
        Tour Overview
      </h2>

      <div className="mt-8 bg-white rounded-3xl p-6">

        <h3 className="text-xl text-gray-900 font-semibold mb-4">
          About This Tour
        </h3>

        <p className="text-slate-700 leading-8">
          {tour.overview}
        </p>

      </div>

    </section>
  );
}