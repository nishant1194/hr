import { Quote } from "../types/quote";
import { ArrowUpRight } from "lucide-react";

interface Props {
  quote: Quote;
}

export default function HistoryCard({ quote }: Props) {
  return (
    <div className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div className="flex-1">

          <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            {quote.theme}
          </span>

          <p className="mt-4 line-clamp-2 text-lg font-medium leading-8 text-slate-800">
            "{quote.text}"
          </p>

          <p className="mt-5 text-sm text-slate-500">
            {quote.createdAt}
          </p>

        </div>

        <ArrowUpRight
          size={22}
          className="text-slate-400 transition group-hover:text-indigo-600"
        />

      </div>

    </div>
  );
}