import type { Article } from '../types'

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080'

export interface ArticleSearchParams {
  keyword: string
  from: string
  to: string
}

interface ApiArticle {
  date: string
  description: string[]
  id: string
  location_city: string[]
  location_state: string[]
  title: string
  url: string
}

interface ApiResponse {
  pagination: { total: number }
  results: ApiArticle[]
}

function extractSource(title: string): string {
  // "Image 5 of The patriot (Indiana, Pa.), December 12, 1914" → "The patriot (Indiana, Pa.)"
  const match = title.match(/of (.+?),\s*\w+ \d+,\s*\d{4}/)
  return match ? match[1] : title
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function transformArticle(raw: ApiArticle): Article {
  return {
    id: raw.id,
    headline: raw.title,
    subheadline: raw.description[1] ?? '',
    snippet: raw.description[0] ?? '',
    source: extractSource(raw.title),
    date: formatDate(raw.date),
    location: raw.location_city[0] ?? raw.location_state[0] ?? 'Unknown',
    author: '',
    edition: 'Archive Edition',
    url: raw.url,
    fullText: raw.description,
  }
}

export async function fetchArticles({ keyword, from, to }: ArticleSearchParams): Promise<Article[]> {
  const url = new URL('/article', BASE_URL)
  url.searchParams.set('keyword', keyword)
  url.searchParams.set('from', from)
  url.searchParams.set('to', to)

  const res = await fetch(url.toString())

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`)
  }

  const json: ApiResponse = await res.json()
  return json.results.map(transformArticle)
}
