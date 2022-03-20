import type { PageInfo } from '@/api/types/pageInfo'

export type Pet = {
  id: number
  name: string
}

export type PetsRequestQueryParams = {
  name?: Pet['name']
  pageSize?: PageInfo['pageSize']
  currentPage?: PageInfo['currentPage']
  sortKey?: 'id' | 'name'
  isSortDesc?: boolean
}

export type PetDetailRequestPathParams = [id: Pet['id']]

export type PetUpdateRequestPathParams = [id: Pet['id']]
export type PetUpdateRequestBody = Pick<Partial<Pet>, 'name'>

export type PetsResponse = {
  pageInfo: PageInfo
  items: Pet[]
}

export type PetDetailResponse = Pet

export type PetUpdateResponse = Pet
