import clsx from 'clsx'

import type { AxiosResponse } from 'axios'

import type { PetsResponse } from '@/api/types/pet'
import { useUpdatePet, usePets } from '@/hooks/reactQuery/pet'
import { petKeyFactory } from '@/hooks/reactQuery/pet'
import { queryClient } from '@/lib/react-query'

export const ReactQueryOptimisticUpdate = () => {
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
    pathParams: [1],
    requestBody: { name: 'aaa' },
  })

  const updatePet = async () => {
    await mutateAsync(
      {
        pathParams: [1],
        requestBody: { name: 'new Name' },
      },
      {
        onSuccess: () => {
          refetch()
        },
      }
    )
  }

  return (
    <div>
      <div>
        <button onClick={() => updatePet()}>submit</button>
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
