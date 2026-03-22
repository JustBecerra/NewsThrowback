import { useEffect } from 'react'
import type { Article } from '../types'

interface Props {
  article: Article
  onClose: () => void
}

export default function ArticleModal({ article, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <article
        className="relative bg-[#f4efe6] text-stone-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl rounded-sm border border-stone-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Masthead */}
        <div className="bg-stone-900 text-stone-100 px-8 py-4 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400">
            {article.edition}
          </span>
          <span className="font-serif text-xl font-bold tracking-wider">
            {article.source}
          </span>
          <span className="text-[10px] tracking-wider text-stone-400">
            {article.date}
          </span>
        </div>

        {/* Thick rule */}
        <div className="h-1 bg-stone-900" />
        <div className="h-px bg-stone-400 mx-6 mt-1" />

        {/* Main content */}
        <div className="px-8 pt-6 pb-8">

          {/* Headline */}
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight text-center uppercase tracking-wide mb-3">
            {article.headline}
          </h2>

          {/* Subheadline */}
          <p className="font-serif text-base text-stone-700 italic text-center leading-snug mb-4">
            {article.subheadline}
          </p>

          {/* Byline rule */}
          <div className="flex items-center gap-3 my-4">
            <div className="h-px flex-1 bg-stone-400" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500">
              By {article.author} · {article.location}
            </span>
            <div className="h-px flex-1 bg-stone-400" />
          </div>

          {/* Body — two columns */}
          <div className="columns-2 gap-6 text-sm leading-relaxed text-stone-800 font-serif text-justify">
            {article.fullText.map((paragraph, i) => (
              <p key={i} className="mb-4 break-inside-avoid">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Footer rule */}
          <div className="flex items-center gap-3 mt-6">
            <div className="h-px flex-1 bg-stone-400" />
            <span className="text-stone-400 text-xs">✦</span>
            <div className="h-px flex-1 bg-stone-400" />
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close article"
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-stone-400 hover:text-stone-100 transition-colors text-lg leading-none cursor-pointer"
        >
          ✕
        </button>
      </article>
    </div>
  )
}
