import { useParams } from "react-router-dom";
import { tours } from "../tours";

import TourHero from "../components/tour-details/TourHero";
// import TourGallery from "../components/tour-details/TourGallery";
// import TourOverview from "../components/tour-details/TourOverview";
import TourItinerary from "../components/tour-details/TourItinerary";
import TourInclusions from "../components/tour-details/TourInclusions";
import BookingCard from "../components/tour-details/BookingCard";

export default function TourDetails() {
  const { slug } = useParams();

  const tour = tours.find(
    (item) => item.slug === slug
  );

  if (!tour) {
    return <h1>Tour Not Found</h1>;
  }

  return (
    <>
      <TourHero tour={tour} />

      {/* <TourGallery images={tour.gallery} /> */}

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid lg:grid-cols-[1fr_350px] gap-10">

          <div className="space-y-10">
            {/* <TourOverview tour={tour} /> */}
            <TourItinerary itinerary={tour.itinerary} />
            <TourInclusions
            inclusions={tour.inclusions}
            exclusions={tour.exclusions}
            />
          </div>

          <BookingCard tour={tour} />

        </div>

      </div>
    </>
  );
}