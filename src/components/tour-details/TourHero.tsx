export default function TourHero({ tour }: any) {
  return (
    <section
      className="h-[500px] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${tour.thumbnail})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60">

        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">

          <div>
            <h1 className="text-6xl font-bold text-white">
              {tour.title}
            </h1>

            <p className="text-xl text-white mt-4">
              {tour.location}
            </p>

            <div className="flex gap-4 mt-6">
              <span className="bg-white/20 px-4 py-2 rounded-full text-white">
                {tour.duration}
              </span>

              <span className="bg-white/20 px-4 py-2 rounded-full text-white">
                ₹{tour.startingPrice}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}