import axios from 'axios'

import type {
  PetUpdateRequestPathParams,
  PetUpdateRequestBody,
  PetUpdateResponse,
} from '@/api/types/pet'

import { ENDPOINT_PET } from './endpoint'

export const updatePet = ({
  pathParams,
  requestBody,
}: {
  pathParams: PetUpdateRequestPathParams
  requestBody: PetUpdateRequestBody
}) => {
  return axios.patch<PetUpdateResponse>(ENDPOINT_PET(pathParams), {
    ...requestBody,
  })
}
