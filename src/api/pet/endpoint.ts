import type { PetDetailRequestPathParams } from '@/api/types/pet'

export const ENDPOINT_PETS = '/pets'
export const ENDPOINT_PET = (pathParams: PetDetailRequestPathParams) =>
  `/pets/${pathParams.join('/')}`
