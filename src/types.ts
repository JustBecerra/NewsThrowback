export interface Article {
  id: string
  headline: string
  subheadline: string
  snippet: string
  source: string
  date: string
  location: string
  author: string
  edition: string
  url: string
  fullText: string[]
}

export type Status = 'idle' | 'loading' | 'done'
