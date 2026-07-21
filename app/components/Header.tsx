export default function Header() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-10 text-white shadow-2xl">

      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

      <div className="relative">

        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-100">
          AI Powered
        </p>

        <h1 className="text-5xl font-black tracking-tight">
          ✨ QuoteAI
        </h1>

        <p className="mt-4 max-w-xl text-lg text-indigo-100">
          Generate inspiring quotes for your employees in seconds.
          No more searching the internet every morning.
        </p>

      </div>

    </div>
  );
}