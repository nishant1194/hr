"use client";

import { useState } from "react";
import { Sparkles, ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  onGenerate: (
    theme: string,
    tone: string,
    audience: string,
    customMessage: string
  ) => void;
  loading: boolean;
}

const themes = [
  "🌅 Motivation",
  "👑 Leadership",
  "🤝 Teamwork",
  "🚀 Success",
  "💡 Innovation",
  "📈 Growth",
  "🙏 Gratitude",
  "🎯 Productivity",
];

const audiences = [
  "All team",
  "Employees",
  "Managers",
  "Developers",
  "Sales Team",
];

export default function QuoteForm({
  onGenerate,
  loading,
}: Props) {
  const [theme, setTheme] = useState(themes[0]);
  const [tone, setTone] = useState("");
  const [audience, setAudience] = useState(audiences[0]);

  const [showCustom, setShowCustom] = useState(false);
  const [customMessage, setCustomMessage] = useState("");

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-slate-900">
        Customize Your Quote
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Configure your quote and let AI generate something meaningful.
      </p>

      {/* Theme */}

      <div className="mt-6">
        <h3 className="mb-3 font-semibold text-slate-800">
          Theme
        </h3>

        <div className="flex flex-wrap gap-2">
          {themes.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTheme(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                theme === item
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Tone
        /*
      <div className="mt-6">
        <h3 className="mb-3 font-semibold text-slate-800">
          Tone
        </h3>

        <div className="flex flex-wrap gap-2">
          {tones.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTone(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                tone === item
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div> */}

      {/* Audience */}

      <div className="mt-6">
        <h3 className="mb-3 font-semibold text-slate-800">
          Audience
        </h3>

        <div className="flex flex-wrap gap-2">
          {audiences.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setAudience(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                audience === item
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}

      <div className="my-6 border-t border-slate-200" />

      {/* Custom Instructions */}

      <button
        type="button"
        onClick={() => setShowCustom(!showCustom)}
        className="flex w-full items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-slate-100"
      >
        <div className="text-left">
          <p className="font-semibold text-slate-800">
            Add Custom Instructions
          </p>

          <p className="text-sm text-slate-500">
            Optional
          </p>
        </div>

        {showCustom ? (
          <ChevronUp size={20} />
        ) : (
          <ChevronDown size={20} />
        )}
      </button>

      {showCustom && (
        <div className="mt-4">

          <textarea
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            rows={3}
            placeholder="Example: Tomorrow is Monday after a long weekend. Encourage employees to start the week with positivity."
            className="w-full resize-none rounded-2xl border border-slate-300 bg-slate-50 p-4 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
          />

          {/* Quick Suggestions */}

          <div className="mt-4 flex flex-wrap gap-2">

            {[
              "Monday motivation",
              "Celebrate team success",
              "Welcome new employees",
              "Festival wishes",
            ].map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => setCustomMessage(suggestion)}
                className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600 transition hover:border-indigo-500 hover:text-indigo-600"
              >
                {suggestion}
              </button>
            ))}

          </div>

        </div>
      )}

      {/* Generate */}

      <button
        type="button"
        disabled={loading}
        onClick={() =>
          onGenerate(
            theme,
            tone,
            audience,
            customMessage
          )
        }
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Sparkles size={20} />

        {loading ? "Generating Quote..." : "Generate Quote"}
      </button>

    </div>
  );
}