export default function TourFilters() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-800 h-fit">

      <h2 className="text-xl text-slate-900 font-semibold mb-6">
        Find Your Tour
      </h2>

      <input
        placeholder="Search destination"
        className="w-full p-3 rounded-lg bg-white text-slate-900 border border-slate-300"
      />

      <select className="w-full mt-4 p-3 rounded-lg bg-white text-slate-900 border border-slate-300">
        <option>All Destinations</option>
      </select>

      {/* <select className="w-full mt-4 p-3 rounded-lg bg-slate-800 text-white">
        <option>Any Duration</option>
      </select> */}
    </div>
  );
}