import { CheckCircle, XCircle } from "lucide-react";

interface Props {
  inclusions: string[];
  exclusions: string[];
}

export default function TourInclusions({
  inclusions,
  exclusions,
}: Props) {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        What's Included
      </h2>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Included */}
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-emerald-50 p-8">

          <div className="absolute left-0 top-0 h-full w-1 bg-emerald-500" />

          <div className="flex items-center gap-3 mb-4">
            <CheckCircle
              size={28}
              className="text-emerald-400"
            />

            <h3 className="text-2xl font-bold text-emerald-600">
              Included
            </h3>
          </div>

          <div className="space-y-2">

            {inclusions.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <CheckCircle
                  size={20}
                  className="text-emerald-400 mt-1 shrink-0"
                />

                <p className="text-emerald-600">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* Excluded */}
        <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-red-50 p-8">

          <div className="absolute left-0 top-0 h-full w-1 bg-red-500" />

          <div className="flex items-center gap-3 mb-4">
            <XCircle
              size={28}
              className="text-red-400"
            />

            <h3 className="text-2xl font-bold text-red-500">
              Not Included
            </h3>
          </div>

          <div className="space-y-2">

            {exclusions.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <XCircle
                  size={20}
                  className="text-red-400 mt-1 shrink-0"
                />

                <p className="text-red-500">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}