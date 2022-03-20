import { useMutation } from 'react-query'

import type { AxiosError, AxiosResponse } from 'axios'
import type { UseMutationOptions } from 'react-query'

import { updatePet } from '@/api/pet'
import type {
  PetUpdateRequestPathParams,
  PetUpdateRequestBody,
  PetsResponse,
} from '@/api/types/pet'

export const updatePetMutationFn = ({
  pathParams,
  requestBody,
}: {
  pathParams: PetUpdateRequestPathParams
  requestBody: PetUpdateRequestBody
}) => {
  return updatePet({ pathParams, requestBody })
}

export type UseUpdatePetOptions = UseMutationOptions<
  Awaited<ReturnType<typeof updatePetMutationFn>>,
  AxiosError,
  Parameters<typeof updatePetMutationFn>[0],
  {
    previousPetsResponse?: AxiosResponse<PetsResponse>
  }
>

export const useUpdatePet = ({
  config,
  pathParams,
  requestBody,
}: Parameters<typeof updatePetMutationFn>[0] & {
  config?: UseUpdatePetOptions
}) => {
  const mutationConfig = {
    ...config,
    mutationFn: () => updatePetMutationFn({ pathParams, requestBody }),
  }
  return useMutation(mutationConfig)
}
