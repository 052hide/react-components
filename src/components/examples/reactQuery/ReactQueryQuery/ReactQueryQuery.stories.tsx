import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { queryClient } from '@/lib/react-query'
import { ReactQueryProvider } from '@/providers'
import { mockPetHandler } from '@/test/server/handlers'

import { ReactQueryQuery } from './ReactQueryQuery'

const meta: ComponentMeta<typeof ReactQueryQuery> = {
  title: 'examples/ReactQuery/ReactQueryQuery',
  component: ReactQueryQuery,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof ReactQueryQuery> = {
  args: {},
  parameters: {
    msw: {
      handlers: [mockPetHandler.fetchList.success()],
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
