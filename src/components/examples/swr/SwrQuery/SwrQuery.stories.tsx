import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { swrConfiguration } from '@/lib/swr'
import { SwrProvider } from '@/providers'
import { mockPetHandler } from '@/test/server/handlers'

import { SwrQuery } from './SwrQuery'

const meta: ComponentMeta<typeof SwrQuery> = {
  title: 'examples/Swr/SwrQuery',
  component: SwrQuery,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof SwrQuery> = {
  args: {},
  parameters: {
    msw: {
      handlers: [mockPetHandler.fetchList.success()],
    },
  },
  decorators: [
    (Story) => {
      return (
        <SwrProvider swrConfiguration={swrConfiguration}>{Story()}</SwrProvider>
      )
    },
  ],
}
