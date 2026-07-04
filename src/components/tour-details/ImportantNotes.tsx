import {
  AlertTriangle,
  Shield,
  CheckCircle,
  Clock
} from "lucide-react";

export default function ImportantNotes({
  notes,
}: any) {

  const styles : any = {
    danger:
      "bg-red-500/10 border-l-4 border-red-500",
    warning:
      "bg-amber-500/10 border-l-4 border-amber-500",
    success:
      "bg-green-500/10 border-l-4 border-green-500",
    info:
      "bg-blue-500/10 border-l-4 border-blue-500",
  };

  return (
    <section className="mt-12">

      <h2 className="text-3xl font-bold mb-8">
        Important Notes
      </h2>

      <div className="space-y-4">

        {notes.map(
          (note: any, index: number) => (
            <div
              key={index}
              className={`
                p-5 rounded-2xl
                ${styles[note.type]}
              `}
            >
              {note.text}
            </div>
          )
        )}

      </div>

    </section>
  );
}