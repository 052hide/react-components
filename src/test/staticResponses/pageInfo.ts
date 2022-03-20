import type { PageInfo } from '@/api/types/pageInfo'

export const mockPageInfo = {
  base: (override?: Partial<PageInfo>): PageInfo => ({
    currentPage: 1,
    pageSize: 20,
    totalCount: 195,
    first: 100,
    last: 1500,
    hasPrevious: false,
    hasNext: true,
    ...override,
  }),
}
