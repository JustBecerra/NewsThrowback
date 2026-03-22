export default function PageHeader() {
  return (
    <>
      <header className="text-center mb-10">
        <p className="text-slate-400 text-xs tracking-[0.35em] uppercase mb-4 font-light">
          Historical Press Archive
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl text-stone-100 tracking-tight mb-4">
          NewsThrowback
        </h1>
        <p className="text-stone-500 text-base max-w-sm mx-auto leading-relaxed">
          Uncover the stories that shaped history. Search newspaper archives from the past.
        </p>
      </header>

      <div className="flex items-center gap-4 mb-10">
        <div className="h-px w-20 bg-stone-800" />
        <span className="text-slate-500 text-xs">✦</span>
        <div className="h-px w-20 bg-stone-800" />
      </div>
    </>
  )
}
