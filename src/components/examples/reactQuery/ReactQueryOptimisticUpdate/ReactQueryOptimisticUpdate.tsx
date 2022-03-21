import clsx from 'clsx'
import { useState } from 'react'

import type { AxiosResponse } from 'axios'

import type { PetsResponse } from '@/api/types/pet'
import { Button } from '@/components/ui'
import { useUpdatePet, usePets } from '@/hooks/reactQuery/pet'
import { petKeyFactory } from '@/hooks/reactQuery/pet'
import { queryClient } from '@/lib/react-query'

const params = {
  id: 1,
  name: 'Optimistic Update',
} as const

export const ReactQueryOptimisticUpdate = () => {
  const [updated, setUpdated] = useState<boolean>(false)

  const { data, refetch } = usePets({})

  const { mutateAsync } = useUpdatePet({
    config: {
      onMutate: async ({ pathParams, requestBody }) => {
        await queryClient.cancelQueries(petKeyFactory.list())
        const previousPetsResponse = queryClient.getQueryData<
          AxiosResponse<PetsResponse>
        >(petKeyFactory.list())
        queryClient.setQueryData<ReturnType<typeof usePets>['data']>(
          petKeyFactory.list(),
          (oldPetsResponse) => {
            if (!oldPetsResponse) {
              return
            }
            return {
              ...oldPetsResponse,
              data: {
                ...oldPetsResponse.data,
                items: oldPetsResponse.data.items.map((p) => {
                  return p.id === pathParams[0]
                    ? {
                        ...p,
                        ...requestBody,
                      }
                    : p
                }),
              },
            }
          }
        )
        return { previousPetsResponse }
      },
      onError: (_err, _params, context) => {
        if (!context?.previousPetsResponse) {
          return
        }

        queryClient.setQueryData<ReturnType<typeof usePets>['data']>(
          petKeyFactory.list(),
          context.previousPetsResponse
        )
      },
    },
    pathParams: [params.id],
    requestBody: { name: params.name },
  })

  const updatePet = async () => {
    setUpdated(true)
    await mutateAsync(
      {
        pathParams: [params.id],
        requestBody: { name: params.name },
      },
      {
        onSuccess: (updatedPet: ReturnType<typeof useUpdatePet>['data']) => {
          const petsResponse = queryClient.getQueryData<
            AxiosResponse<PetsResponse>
          >(petKeyFactory.list())
          queryClient.setQueryData<ReturnType<typeof usePets>['data']>(
            petKeyFactory.list(),
            petsResponse && updatedPet
              ? {
                  ...petsResponse,
                  data: {
                    ...petsResponse.data,
                    items: petsResponse.data.items.map((p) =>
                      p.id === updatedPet.data.id
                        ? {
                            id: p.id,
                            name: updatedPet.data.name,
                          }
                        : p
                    ),
                  },
                }
              : undefined
          )
          refetch()
        },
      }
    )
  }

  return (
    <div className={clsx('tw-w-full', 'tw-flex tw-flex-col', 'tw-gap-4')}>
      <div>
        <Button
          onClick={() => (updated ? window.location.reload() : updatePet())}
        >
          {updated ? 'Refresh page' : 'Update pet'}
        </Button>
      </div>
      <div>
        {data && (
          <ul
            className={clsx(
              'tw-w-full',
              'tw-flex tw-flex-col tw-justify-center',
              'tw-divide-y'
            )}
          >
            {data.data.items.map((p) => {
              return (
                <li key={p.id} className={clsx('tw-px-4 tw-py-2')}>
                  {p.name}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
