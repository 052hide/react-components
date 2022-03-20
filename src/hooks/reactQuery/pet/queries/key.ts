import type {
  PetDetailRequestPathParams,
  PetsRequestQueryParams,
} from '@/api/types/pet'

export const petKeyFactory = {
  all: [{ scope: 'pet' }] as const,
  list: (queryParams?: PetsRequestQueryParams) =>
    [...petKeyFactory.all, { entity: 'list', queryParams }] as const,
  detail: (pathParams: PetDetailRequestPathParams) =>
    [...petKeyFactory.all, { entity: 'detail', pathParams }] as const,
}
