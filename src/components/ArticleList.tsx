import type { Article, Status } from '../types'
import ArticleCard from './ArticleCard'

interface Props {
  status: Status
  articles: Article[]
  onArticleClick: (article: Article) => void
}

export default function ArticleList({ status, articles, onArticleClick }: Props) {
  if (status === 'loading') {
    return (
      <div className="mt-12 flex flex-col items-center gap-3 text-stone-600">
        <div className="w-8 h-8 border-2 border-stone-700 border-t-slate-400 rounded-full animate-spin" />
        <p className="text-xs tracking-[0.2em] uppercase">Consulting the archives…</p>
      </div>
    )
  }

  if (status === 'done' && articles.length > 0) {
    return (
      <section className="w-full max-w-lg mt-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-stone-800" />
          <p className="text-stone-600 text-[10px] tracking-[0.2em] uppercase shrink-0">
            {articles.length} records found
          </p>
          <div className="h-px flex-1 bg-stone-800" />
        </div>

        <ul className="flex flex-col gap-4">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} onClick={onArticleClick} />
          ))}
        </ul>
      </section>
    )
  }

  return null
}
