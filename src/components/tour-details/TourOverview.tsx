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

      <div className="mt-8 bg-slate-900 rounded-3xl p-6">

        <h3 className="text-xl font-semibold mb-4">
          About This Tour
        </h3>

        <p className="text-slate-300 leading-8">
          {tour.overview}
        </p>

      </div>

    </section>
  );
}