import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function TourFaq({
  faqs,
}: any) {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">

        {faqs.map(
          (faq: any, index: number) => {
            const isOpen =
              openIndex === index;

            return (
              <div
                key={index}
                className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden"
              >

                <button
                  onClick={() =>
                    setOpenIndex(
                      isOpen
                        ? null
                        : index
                    )
                  }
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-semibold text-lg">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">

                    <div className="px-5 pb-5 text-slate-400">
                      {faq.answer}
                    </div>

                  </div>
                </div>

              </div>
            );
          }
        )}

      </div>

    </section>
  );
}