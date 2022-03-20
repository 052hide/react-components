import axios from 'axios'

import type {
  PetDetailRequestPathParams,
  PetDetailResponse,
} from '@/api/types/pet'

import { ENDPOINT_PET } from './endpoint'

export const fetchPet = ({
  pathParams,
}: {
  pathParams: PetDetailRequestPathParams
}) => {
  return axios.get<PetDetailResponse>(ENDPOINT_PET(pathParams))
}
