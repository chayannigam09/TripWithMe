import { Link } from "react-router-dom";
import { MapPinned, Plane } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-orange-50 via-green-50 to-blue-50 px-6">
      <div className="max-w-2xl text-center">
        <div className="relative flex justify-center mb-4">
          <MapPinned className="h-28 w-28 text-gray-300" />

          {/* <Plane className="absolute -top-2 left-1/2 h-10 w-10 text-blue-600 animate-fly" /> */}
        </div>

        <h1 className="text-7xl md:text-8xl font-extrabold mb-4">
          <span className="text-trip">4</span>
          <span className="text-with">0</span>
          <span className="text-me">4</span>
        </h1>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Oops! You've Gone Off Route
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          The destination you're looking for doesn't exist or may have been
          moved.
          <br />
          Let's help you get back on your next adventure.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-md text-white font-semibold bg-orange-500 hover:scale-105 transition"
          >
            🏠 Back to Home
          </Link>

          <Link
            to="/popular-tours"
            className="px-6 py-3 rounded-md border border-gray-300 bg-white hover:bg-gray-100 transition font-semibold"
          >
            ✈️ Explore Tours
          </Link>
        </div>
      </div>
    </div>
  );
}