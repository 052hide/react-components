import { rest } from 'msw'

import { ENDPOINT_PETS, ENDPOINT_PET } from '@/api/pet'
import type { Pet } from '@/api/types/pet'
import { mockPageInfo, mockPet } from '@/test/staticResponses'

export const mockPetHandler = {
  fetchList: {
    success: (override?: Pet[], isOnce?: boolean) =>
      rest.get(ENDPOINT_PETS, (_req, res, ctx) => {
        return isOnce
          ? res.once(
              ctx.delay(500),
              ctx.status(200),
              ctx.json({
                pageInfo: mockPageInfo.base(),
                items:
                  override ??
                  [...Array(20)].map((_, i) => {
                    const id = i + 1
                    return mockPet.base({ id, name: `Cat ${id}` })
                  }),
              })
            )
          : res(
              ctx.delay(500),
              ctx.status(200),
              ctx.json({
                pageInfo: mockPageInfo.base(),
                items:
                  override ??
                  [...Array(20)].map((_, i) => {
                    const id = i + 1
                    return mockPet.base({ id, name: `Cat ${id}` })
                  }),
              })
            )
      }),
  },
  updatePet: () => {
    return {
      success: (id: number) =>
        rest.patch(ENDPOINT_PET([id]), (_req, res, ctx) => {
          return res(
            ctx.delay(500),
            ctx.status(200),
            ctx.json(mockPet.base({ name: `Updated` }))
          )
        }),
    }
  },
}
