import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { useState } from 'react'

import { InputText } from './InputText'
import { InputTextProps } from './type'

const LocalComponent = ({ value, ...props }: InputTextProps) => {
  const [localValue, setLocalValue] = useState<string>('')

  const onChangeHandler = (value: string) => {
    action('onChange')(value)
    setLocalValue(value)
  }

  return (
    <InputText
      {...props}
      value={value || localValue}
      onChange={onChangeHandler}
    />
  )
}

const meta: ComponentMeta<typeof LocalComponent> = {
  title: 'ui/InputText',
  component: LocalComponent,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Text: ComponentStoryObj<typeof LocalComponent> = {
  args: {
    type: 'text',
    value: '',
    placeholder: 'Placeholder',
    isDisabled: false,
    isError: false,
    roundDirection: {
      topLeft: true,
      topRight: true,
      bottomLeft: true,
      bottomRight: true,
    },
  },
}
