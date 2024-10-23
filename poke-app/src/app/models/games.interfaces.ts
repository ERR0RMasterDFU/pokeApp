export interface GamesListResponse {
  count: number
  next: string
  previous: any
  results: GamesList[]
}

export interface GamesList {
  name: string
  url: string
}