export default function TourHero({ tour }: any) {
  console.log(tour)
  return (
    // <section
    //   className="h-[500px] bg-cover bg-center relative"
    //   style={{
    //     backgroundImage: `url(${tour.thumbnail})`,
    //   }}
    // >
    //   <div className="absolute inset-0 bg-black/60">

    //     <div className="max-w-7xl mx-auto px-4 h-full flex items-center">

    //       <div>
    //         <h1 className="text-6xl font-bold text-white">
    //           {tour.title}
    //         </h1>

    //         <p className="text-xl text-white mt-4">
    //           {tour.location}
    //         </p>

    //         <div className="flex gap-4 mt-6">
    //           <span className="bg-white/20 px-4 py-2 rounded-full text-white">
    //             {tour.duration}
    //           </span>

    //           <span className="bg-white/20 px-4 py-2 rounded-full text-white">
    //             ₹{tour.price}
    //           </span>
    //         </div>

    //       </div>

    //     </div>

    //   </div>
    // </section>
    <section className="max-w-7xl mx-auto px-4 py-1">

  <div className="mb-1">

    {/* <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
      Popular Tour
    </span> */}

    <h1 className="text-3xl md:text-5xl font-bold mt-3">
      {tour.title}
    </h1>

    <p className="text-slate-400 mt-2">
      {tour.location}
    </p>

    <div className="flex flex-wrap gap-3 mt-4">

      <span className="bg-slate-800 px-4 py-2 rounded-full">
        {tour.duration}
      </span>

      <span className="bg-slate-800 px-4 py-2 rounded-full">
        ₹{tour.price}
      </span>

    </div>

  </div>

</section>
  );
}