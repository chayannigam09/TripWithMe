export default function TourFilters() {
  return (
    <div className="sticky top-24 bg-slate-900 p-6 rounded-2xl border border-slate-800 h-fit">

      <h2 className="text-xl text-white font-semibold mb-6">
        Find Your Tour
      </h2>

      <input
        placeholder="Search destination"
        className="w-full p-3 rounded-lg bg-slate-800 text-white"
      />

      <select className="w-full mt-4 p-3 rounded-lg bg-slate-800 text-white">
        <option>All Destinations</option>
      </select>

      {/* <select className="w-full mt-4 p-3 rounded-lg bg-slate-800 text-white">
        <option>Any Duration</option>
      </select> */}
    </div>
  );
}