import { useParams } from "react-router-dom";
import { tours } from "../tours";

import TourHero from "../components/tour-details/TourHero";
import TourGallery from "../components/tour-details/TourGallery";
import TourOverview from "../components/tour-details/TourOverview";
import TourItinerary from "../components/tour-details/TourItinerary";
import TourInclusions from "../components/tour-details/TourInclusions";
import BookingCard from "../components/tour-details/BookingCard";
import ThingsToKnow from "../components/tour-details/ThingsToKnow";
import ImportantNotes from "../components/tour-details/ImportantNotes";
import ThingsToCarry from "../components/tour-details/ThingsToCarry";
import TourFaq from "../components/tour-details/TourFaq";
import Policies from "../components/tour-details/Policies";
import TourNotFound from "../components/tours/TourNotFound";

export default function TourDetails() {
  const { slug } = useParams();

  const tour = tours.find(
    (item) => item.slug === slug
  );

  if (!tour) {
    return <TourNotFound/>;
  }

  return (
    <div className="mx-2 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-24">
      <TourHero tour={tour} />
      <div className="grid lg:grid-cols-[1fr_300px] gap-5">
        <TourGallery images={tour.gallery} />
        <BookingCard tour={tour} />
      </div>
      <div className="py-10">
        <TourOverview tour={tour} />
        <TourItinerary itinerary={tour.itinerary} />
        <TourInclusions inclusions={tour.inclusions} exclusions={tour.exclusions} />
        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          <ThingsToKnow
            items={tour.thingsToKnow}
          />

          <ThingsToCarry
            items={tour.thingsToCarry}
          />

        </div>
        <ImportantNotes notes={tour.importantNotes} />
        <TourFaq faqs={tour.faq} />
        <Policies policies={tour.policies} />
      </div>
    </div>
  );
}