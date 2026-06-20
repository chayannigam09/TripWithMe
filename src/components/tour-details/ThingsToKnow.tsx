import {
  User,
  Bus,
  ShieldCheck,
  FileText
} from "lucide-react";

export default function ThingsToKnow({ items }: any) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6">
      <h2 className="text-3xl font-bold mb-6">
        Things To Know
      </h2>

      <div className="space-y-6">

        {items.map((item: any, index: number) => (
          <div
            key={index}
            className="border-b border-slate-800 pb-6"
          >
            <div className="flex gap-4">

              {/* <User className="text-purple-400 mt-1" /> */}

              <div>
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-2">
                  {item.description}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}