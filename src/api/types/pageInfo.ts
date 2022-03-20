export type PageInfo<T extends number | string = number> = {
  currentPage: number
  pageSize: number
  totalCount: number
  first: T
  last: T
  hasPrevious: boolean
  hasNext: boolean
}
