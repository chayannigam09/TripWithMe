import { useState } from "react";
import { ChevronDown, ChevronUp, Sun } from "lucide-react";

interface DayPlan {
  day: number;
  title: string;
  activities: string[];
}

interface Props {
  itinerary: DayPlan[];
}

export default function TourItinerary({ itinerary }: Props) {
  const [openDay, setOpenDay] = useState<number>(1);

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-8">
        Day-wise Itinerary
      </h2>

      <div className="relative">

        {/* Timeline Line */}
        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-700" />

        {itinerary.map((day) => {
          const isOpen = openDay === day.day;

          return (
            <div key={day.day} className="relative pl-14 mb-6">

              {/* Timeline Dot */}
              {/* <div className="absolute left-0 top-5 h-4 w-4 rounded-full bg-amber-500 border-4 border-white z-10" /> */}

              <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">

                <button
                  onClick={() =>
                    setOpenDay(isOpen ? 0 : day.day)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-3">

                    <Sun
                      size={20}
                      className="text-amber-400"
                    />

                    <h3 className="text-xl font-semibold text-white">
                      Day {day.day} - {day.title}
                    </h3>

                  </div>

                  {isOpen ? (
                    <ChevronUp className="text-gray-400" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "max-h-[500px]"
                      : "max-h-0"
                  }`}
                >
                  <div className="px-8 pb-6">

                    <ul className="space-y-3 text-gray-300">

                      {day.activities.map(
                        (activity, index) => (
                          <li
                            key={index}
                            className="flex gap-3"
                          >
                            <span>•</span>
                            <span>{activity}</span>
                          </li>
                        )
                      )}

                    </ul>

                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
// import { useState } from "react";

// export default function TourItinerary({ itinerary }: any) {
//   const [open, setOpen] = useState(0);

//   return (
//     <div>
//       <h2 className="text-3xl font-bold mb-6">
//         Day-wise Itinerary
//       </h2>

//       {itinerary.map((day: any, index: number) => (
//         <div
//           key={index}
//           className="border rounded-xl mb-4"
//         >
//           <button
//             onClick={() => setOpen(index)}
//             className="w-full p-5 text-left font-bold"
//           >
//             Day {day.day} - {day.title}
//           </button>

//           {open === index && (
//             <div className="p-5 pt-0">
//               <ul>
//                 {day.activities.map((activity: string) => (
//                   <li key={activity}>
//                     • {activity}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }