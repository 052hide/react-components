import { rest } from 'msw'

import { ENDPOINT_PETS } from '@/api/pet'
import type { Pet } from '@/api/types/pet'
import { mockPageInfo, mockPet } from '@/test/staticResponses'

export const mockPetHandler = {
  fetchList: {
    success: (override?: Pet[]) =>
      rest.get(ENDPOINT_PETS, (_req, res, ctx) => {
        return res(
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
}
