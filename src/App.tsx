import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import type { Article, Status } from './types'
import { fetchArticles, type ArticleSearchParams } from './api/articles'
import PageHeader from './components/PageHeader'
import SearchForm from './components/SearchForm'
import ArticleList from './components/ArticleList'
import ArticleModal from './components/ArticleModal'

function App() {
  const [word, setWord] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [searchParams, setSearchParams] = useState<ArticleSearchParams | null>(null)

  const { data: articles = [], isFetching, error } = useQuery({
    queryKey: ['articles', searchParams],
    queryFn: () => fetchArticles(searchParams!),
    enabled: !!searchParams,
    retry: 1,
  })
  console.log(articles, error)
  const status: Status = !searchParams ? 'idle' : isFetching ? 'loading' : 'done'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchParams({
      keyword: word,
      from: fromDate ? fromDate.split('-')[0] : '',
      to: toDate ? toDate.split('-')[0] : '',
    })
  }

  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center px-4 py-16">
      <PageHeader />
      <SearchForm
        word={word}
        fromDate={fromDate}
        toDate={toDate}
        status={status}
        onWordChange={setWord}
        onFromDateChange={setFromDate}
        onToDateChange={setToDate}
        onSubmit={handleSubmit}
      />

      {error && (
        <p className="mt-8 text-red-400 text-xs tracking-wider">
          {(error as Error).message}
        </p>
      )}

      <ArticleList
        status={status}
        articles={articles}
        onArticleClick={setSelectedArticle}
      />

      <footer className="mt-12 text-stone-700 text-xs tracking-wider">
        Drawn from historical newspaper records
      </footer>

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  )
}

export default App
