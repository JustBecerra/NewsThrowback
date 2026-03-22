export interface Article {
  id: number
  headline: string
  subheadline: string
  snippet: string
  source: string
  date: string
  location: string
  author: string
  edition: string
  fullText: string[]
}

export type Status = 'idle' | 'loading' | 'done'
