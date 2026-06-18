import { FaWhatsapp } from "react-icons/fa";

export default function BookingCard({ tour }: any) {
  return (
    <div className="sticky top-24 h-fit">

      <div className="bg-white rounded-3xl shadow-xl p-6">

        <p className="text-gray-500">
          Starting From
        </p>

        <h2 className="text-4xl font-bold">
          ₹{tour.price}
        </h2>

        <button className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          Book Now
        </button>

        <a
          href={`https://wa.me/917583869015?text=Hi I'm interested in ${tour.title}`}
          target="_blank"
          rel="noreferrer"
          className="w-full mt-4 py-3 rounded-full bg-green-600 text-white flex justify-center items-center gap-2"
        >
          <FaWhatsapp />
          WhatsApp Inquiry
        </a>

      </div>

    </div>
  );
}