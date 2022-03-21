import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { useState } from 'react'

import type { ButtonProps } from './type'

import { Button } from './Button'

const LocalComponent = ({
  children,
  isDisabled,
  isLoading,
  ...props
}: ButtonProps) => {
  const [isLocalLoading, setIsLocalLoading] = useState<boolean>(false)
  const [isLocalDisabled, setIsLocalDisabled] = useState<boolean>(false)

  const onClickHandler = () => {
    action('onClick')()
    setIsLocalLoading(true)
    setIsLocalDisabled(true)
    setTimeout(() => {
      setIsLocalLoading(false)
      setIsLocalDisabled(false)
    }, 1500)
  }

  return (
    <Button
      {...props}
      isDisabled={isDisabled || isLocalDisabled}
      isLoading={isLoading || isLocalLoading}
      onClick={onClickHandler}
    >
      {children}
    </Button>
  )
}

const meta: ComponentMeta<typeof LocalComponent> = {
  title: 'ui/Button',
  component: LocalComponent,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof LocalComponent> = {
  args: {
    type: 'button',
    children: 'Button',
    isDisabled: false,
    isLoading: false,
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
