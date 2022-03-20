import axios from 'axios'

import type { PetsRequestQueryParams, PetsResponse } from '@/api/types/pet'

import { ENDPOINT_PETS } from './endpoint'

export const fetchPets = ({
  queryParams,
}: {
  queryParams?: PetsRequestQueryParams
}) => {
  return axios.get<PetsResponse>(ENDPOINT_PETS, { params: queryParams })
}
