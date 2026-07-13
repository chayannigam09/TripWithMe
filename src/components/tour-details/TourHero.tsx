export default function TourHero({ tour }: any) {
  return (
    <section className="py-1">
      <div className="mb-1">
        <h1 className="text-2xl md:text-4xl text-gray-900 font-bold mt-3">{tour.title}</h1>
        <p className="text-slate-400 mt-1">
          {tour.location}, {tour.duration}
        </p>
        <div className="flex flex-wrap gap-3 mt-2">
          <span className="bg-white px-4 py-2 text-slate-800 rounded-xl">
            Starting From ₹{tour.price}
          </span>
        </div>
      </div>
    </section>
  );
}