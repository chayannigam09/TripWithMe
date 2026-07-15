import { PlaneTakeoff } from "lucide-react"

export default function TourNotFound (){
    return(
        <>
            <div className="text-center md:p-20 py-20 px-10 bg-white rounded-lg border border-slate-200">
                <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center">
                  <PlaneTakeoff className="h-12 w-12 text-[#F25A29]" />
                </div>
                <h2 className="text-2xl font-semibold">
                  New Destinations Are On The Way!
                </h2>

                <p className="text-gray-500 mt-2">
                  We couldn't find a matching trip right now, but don't worry! Our team is
                  continuously adding exciting destinations and weekend getaways across
                  India.
                </p>
                <p className="mt-2 font-semibold">
                  🌍 Stay tuned — your next adventure is just around the corner!
                </p>
              </div>
        </>
    )
}