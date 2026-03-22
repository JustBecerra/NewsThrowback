import type { Article } from '../types'

interface Props {
  article: Article
  onClick: (article: Article) => void
}

export default function ArticleCard({ article, onClick }: Props) {
  return (
    <li
      className="bg-stone-900 border border-stone-800 rounded-xl p-6 shadow-xl cursor-pointer hover:border-stone-600 hover:bg-stone-800/60 transition-colors group"
      onClick={() => onClick(article)}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium">
          {article.source}
        </span>
        <span className="text-stone-600 text-[10px] tracking-wider">
          {article.location} · {article.date}
        </span>
      </div>
      <h2 className="font-serif text-stone-100 text-lg leading-snug mb-3 group-hover:text-white transition-colors">
        {article.headline}
      </h2>
      <p className="text-stone-500 text-sm leading-relaxed">
        {article.snippet}
      </p>
      <p className="mt-4 text-[10px] tracking-[0.15em] uppercase text-slate-500 group-hover:text-slate-400 transition-colors">
        Read full article →
      </p>
    </li>
  )
}
