import { useState } from 'react'
import type { Article, Status } from './types'
import { MOCK_ARTICLES } from './data/mockArticles'
import PageHeader from './components/PageHeader'
import SearchForm from './components/SearchForm'
import ArticleList from './components/ArticleList'
import ArticleModal from './components/ArticleModal'

function App() {
  const [word, setWord] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [articles, setArticles] = useState<Article[]>([])
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setArticles([])

    setTimeout(() => {
      setArticles(MOCK_ARTICLES)
      setStatus('done')
    }, 1800)
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
