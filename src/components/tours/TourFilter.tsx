// export default function TourFilters() {
//   return (
//     <div className="bg-white p-6 rounded-2xl border border-slate-800 h-fit">

//       <h2 className="text-xl text-slate-900 font-semibold mb-6">
//         Find Your Tour
//       </h2>

//       <input
//         placeholder="Search destination"
//         className="w-full p-3 rounded-lg bg-white text-slate-900 border border-slate-300"
//       />

//       <select className="w-full mt-4 p-3 rounded-lg bg-white text-slate-900 border border-slate-300">
//         <option>All Destinations</option>
//       </select>

//       {/* <select className="w-full mt-4 p-3 rounded-lg bg-slate-800 text-white">
//         <option>Any Duration</option>
//       </select> */}
//     </div>
//   );
// }
type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
  destinations: string[];
};

export default function TourFilters({
  search,
  setSearch,
  destination,
  setDestination,
  destinations,
}: Props) {
  return (
    <div className="bg-white p-4 rounded-lg border border-slate-200 h-fit sticky top-24">

      <h2 className="text-xl font-semibold text-slate-900 mb-2">
        Find Your Tour
      </h2>

      <input
        type="text"
        placeholder="Search by title or destination..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 rounded-md border border-slate-300 outline-none focus:ring-1 focus:ring-blue-400"
      />

      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full mt-2 p-2 rounded-md border border-slate-300 outline-none focus:ring-1 focus:ring-blue-400"
      >
        {destinations.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>

    </div>
  );
}