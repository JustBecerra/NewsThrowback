import type { Status } from '../types'

interface Props {
  word: string
  fromDate: string
  toDate: string
  status: Status
  onWordChange: (value: string) => void
  onFromDateChange: (value: string) => void
  onToDateChange: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function SearchForm({
  word,
  fromDate,
  toDate,
  status,
  onWordChange,
  onFromDateChange,
  onToDateChange,
  onSubmit,
}: Props) {
  const isLoading = status === 'loading'

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-lg bg-stone-900 border border-stone-800 rounded-xl p-8 shadow-2xl"
    >
      {/* Keyword */}
      <div className="mb-6">
        <label
          htmlFor="keyword"
          className="block text-stone-500 text-[10px] tracking-[0.2em] uppercase mb-2"
        >
          Keyword or Phrase
        </label>
        <input
          id="keyword"
          type="text"
          value={word}
          onChange={e => onWordChange(e.target.value)}
          placeholder="e.g. armistice, revolution, treaty…"
          className="w-full bg-stone-800 border border-stone-700 text-stone-100 rounded-lg px-4 py-3 text-sm placeholder:text-stone-600 focus:outline-none focus:border-slate-500 transition-colors"
        />
      </div>

      {/* Date range */}
      <div className="mb-8">
        <label className="block text-stone-500 text-[10px] tracking-[0.2em] uppercase mb-2">
          Date Range
        </label>
        <div className="flex items-center gap-3">
          <input
            type="date"
            value={fromDate}
            onChange={e => onFromDateChange(e.target.value)}
            className="flex-1 min-w-0 bg-stone-800 border border-stone-700 text-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors [color-scheme:dark]"
          />
          <span className="text-stone-600 text-xs tracking-widest uppercase shrink-0">to</span>
          <input
            type="date"
            value={toDate}
            onChange={e => onToDateChange(e.target.value)}
            className="flex-1 min-w-0 bg-stone-800 border border-stone-700 text-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors [color-scheme:dark]"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-slate-700 hover:bg-slate-600 active:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed text-slate-100 py-3 rounded-lg text-xs tracking-[0.25em] uppercase font-medium transition-colors cursor-pointer flex items-center justify-center gap-2"
      >
        {isLoading && (
          <span className="w-3.5 h-3.5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
        )}
        {isLoading ? 'Searching…' : 'Search Archives'}
      </button>
    </form>
  )
}
