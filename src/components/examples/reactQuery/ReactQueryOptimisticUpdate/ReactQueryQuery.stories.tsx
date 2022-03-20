import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { queryClient } from '@/lib/react-query'
import { ReactQueryProvider } from '@/providers'
import { mockPetHandler } from '@/test/server/handlers'

import { ReactQueryOptimisticUpdate } from './ReactQueryOptimisticUpdate'

const meta: ComponentMeta<typeof ReactQueryOptimisticUpdate> = {
  title: 'examples/ReactQuery/ReactQueryOptimisticUpdate',
  component: ReactQueryOptimisticUpdate,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof ReactQueryOptimisticUpdate> = {
  args: {},
  parameters: {
    msw: {
      handlers: [
        mockPetHandler.fetchList.success(),
        mockPetHandler.updatePet().success(1),
      ],
    },
  },
  decorators: [
    (Story) => {
      return (
        <ReactQueryProvider queryClient={queryClient}>
          {Story()}
        </ReactQueryProvider>
      )
    },
  ],
}
