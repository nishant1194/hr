import { Quote } from "../types/quote";
import HistoryCard from "./HistoryCard";
import { History as HistoryIcon } from "lucide-react";

interface Props {
  history: Quote[];
}

export default function History({ history }: Props) {
  return (
    <section className="mt-14">

      <div className="mb-8 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100">
          <HistoryIcon
            className="text-indigo-600"
            size={22}
          />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Recent Quotes
          </h2>

          <p className="text-slate-500">
            Your previously generated AI quotes.
          </p>

        </div>

      </div>

      {history.length === 0 ? (
        <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-white p-16 text-center">

          <HistoryIcon
            className="mx-auto mb-5 text-slate-300"
            size={60}
          />

          <h3 className="text-xl font-semibold text-slate-700">
            No history yet
          </h3>

          <p className="mt-2 text-slate-500">
            Generate your first quote to see it here.
          </p>

        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {history.map((quote) => (
            <HistoryCard
              key={quote.id}
              quote={quote}
            />
          ))}
        </div>
      )}

    </section>
  );
}