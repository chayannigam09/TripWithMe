import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BookingCard({ tour }: any) {
  const [selectedBatch, setSelectedBatch] =
    useState("");

  const [guests, setGuests] =
    useState("1");

  const totalPrice = Number(tour.price) * Number(guests);
  const handleBooking = () => {
    const message = `
*Trip Inquiry*

🏔 Tour: ${tour.title}
📅 Batch: ${selectedBatch}
👥 Guests: ${guests}

Hi, I would like to book this trip. Please share the payment details.
`;

    window.open(
      `https://wa.me/917583869015?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <div className="sticky top-24 h-fit">

      <div className="bg-white rounded-3xl shadow-xl p-6">

        <p className="text-gray-500">
          Starting From
        </p>

        <h2 className="text-4xl font-bold">
          ₹{tour.price}
        </h2>

        {/* Batch Selection */}

        <div className="mt-6">

          <label className="block text-sm font-medium mb-2">
            Select Batch
          </label>

          <select
            value={selectedBatch}
            onChange={(e) =>
              setSelectedBatch(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          >
            <option value="">
              Choose Batch
            </option>

            {tour.batches.map(
              (batch: string) => (
                <option
                  key={batch}
                  value={batch}
                >
                  {batch}
                </option>
              )
            )}
          </select>

        </div>

        {/* Guest Selection */}

        <div className="mt-4">

          <label className="block text-sm font-medium mb-2">
            Guests
          </label>

          <select
            value={guests}
            onChange={(e) =>
              setGuests(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(
              (guest) => (
                <option
                  key={guest}
                  value={guest}
                >
                  {guest} Guest
                  {guest > 1 ? "s" : ""}
                </option>
              )
            )}
          </select>
          {/* <div className="mt-4 bg-slate-100 rounded-xl p-3"> */}
          <p className="mt-2">Total Amount : ₹{totalPrice}</p>

          {/* </div> */}
        </div>

        {/* Book Now */}

        <button
          onClick={handleBooking}
          disabled={!selectedBatch}
          className="
            w-full
            mt-6
            py-3
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-purple-600
            text-white
            disabled:opacity-50
          "
        >
          Book Now
        </button>

        {/* WhatsApp Inquiry */}

        <a
          href={`https://wa.me/917583869015`}
          target="_blank"
          rel="noreferrer"
          className="
            w-full
            mt-4
            py-3
            rounded-full
            bg-green-600
            text-white
            flex
            justify-center
            items-center
            gap-2
          "
        >
          <FaWhatsapp />
          WhatsApp Inquiry
        </a>

      </div>

    </div>
  );
}