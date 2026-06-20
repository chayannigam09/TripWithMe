import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function TourPolicies({ policies }: any) {
  const [showAll, setShowAll] = useState(false);

  const visiblePolicies = showAll
    ? policies
    : policies.slice(0, 5);

  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold mb-8">
        Our Policies
      </h2>

      <div className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-6
      ">

        <div className="space-y-5">

          {visiblePolicies.map(
            (policy: any, index: number) => (
              <div
                key={index}
                className={`
                  pb-5
                  ${
                    index !==
                    visiblePolicies.length - 1
                      ? "border-b border-slate-800"
                      : ""
                  }
                `}
              >
                <h3 className="font-semibold text-lg text-white">
                  {policy.title}
                </h3>

                <p className="text-slate-400 mt-2 text-sm leading-7">
                  {policy.content}
                </p>
              </div>
            )
          )}

        </div>

        {policies.length > 5 && (
          <div className="flex justify-center mt-8">

            <button
              onClick={() =>
                setShowAll(!showAll)
              }
              className="
                flex
                items-center
                gap-2
                px-6
                py-3
                hover:text-blue-700
                transition
                text-white
                font-medium
              "
            >
              {showAll ? (
                <>
                  See Less
                  <ChevronUp size={18} />
                </>
              ) : (
                <>
                  See More
                  <ChevronDown size={18} />
                </>
              )}
            </button>

          </div>
        )}

      </div>

    </section>
  );
}