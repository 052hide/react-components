import type { Pet } from '@/api/types/pet'

export const mockPet = {
  base: (override?: Partial<Pet>): Pet => ({
    id: 1,
    name: 'Cat 1',
    ...override,
  }),
}
