import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { useState } from 'react'

import { InputFixedDigit } from './InputFixedDigit'
import { InputFixedDigitProps } from './type'

const LocalComponent = ({ value, ...props }: InputFixedDigitProps) => {
  const [localValue, setLocalValue] = useState<string | undefined>('')

  const onChangeHandler = (value?: string) => {
    action('onChange')(value)
    setLocalValue(value)
  }

  return (
    <InputFixedDigit
      {...props}
      value={value || localValue}
      onChange={onChangeHandler}
    />
  )
}

const meta: ComponentMeta<typeof LocalComponent> = {
  title: 'ui/InputFixedDigit',
  component: LocalComponent,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof LocalComponent> = {
  args: {
    value: '',
    isDisabled: false,
    length: 6,
  },
}
