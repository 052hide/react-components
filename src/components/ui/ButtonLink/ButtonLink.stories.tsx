import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { ButtonLink } from './ButtonLink'

const meta: ComponentMeta<typeof ButtonLink> = {
  title: 'ui/ButtonLink',
  component: ButtonLink,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof ButtonLink> = {
  args: {
    href: '/to',
    isTargetBlank: false,
    prefetch: true,
    children: 'ButtonLink',
    isDisabled: false,
    theme: 'primary',
    size: 'base',
    isBlock: true,
    roundType: 'base',
    roundDirection: {
      topLeft: true,
      topRight: true,
      bottomLeft: true,
      bottomRight: true,
    },
  },
}
