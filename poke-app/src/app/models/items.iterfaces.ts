export interface ItemsListResponse {
    count: number
    next: string
    previous: any
    results: ItemsList[]
}
  
export interface ItemsList {
    name: string
    url: string
}
  