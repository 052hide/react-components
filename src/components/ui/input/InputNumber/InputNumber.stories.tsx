import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { useState } from 'react'

import { InputNumber } from './InputNumber'
import { InputNumberProps } from './type'

const LocalComponent = ({ value, ...props }: InputNumberProps) => {
  const [localValue, setLocalValue] = useState<string | undefined>('')
  const [valid, setValid] = useState<boolean>(true)

  const onChangeHandler = (value?: string) => {
    action('onChange')(value)
    setLocalValue(value)
  }

  const onInputValidHandler = (value: boolean) => {
    action('onInputValid')(value)
    setValid(value)
  }

  return (
    <div>
      <InputNumber
        {...props}
        value={value || localValue}
        onChange={onChangeHandler}
        onInputValid={onInputValidHandler}
      />
      {!valid && <p className={'tw-text-sm tw-text-red-500'}>invalid value</p>}
    </div>
  )
}

const meta: ComponentMeta<typeof LocalComponent> = {
  title: 'ui/InputNumber',
  component: LocalComponent,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Text: ComponentStoryObj<typeof LocalComponent> = {
  args: {
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
