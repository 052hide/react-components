import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Button } from '@/components/ui'

import { InputText } from './InputText'
import { InputTextProps } from './type'

const LocalComponent = ({ ...props }: InputTextProps) => {
  return (
    <div className={'tw-flex tw-items-center'}>
      <InputText
        {...props}
        roundDirection={{
          topLeft: true,
          topRight: false,
          bottomLeft: true,
          bottomRight: false,
        }}
      />
      <Button
        roundDirection={{
          topLeft: false,
          topRight: true,
          bottomLeft: false,
          bottomRight: true,
        }}
      >
        Button
      </Button>
    </div>
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

export const FlexRowWithButton: ComponentStoryObj<typeof LocalComponent> = {
  args: {
    type: 'text',
    value: '',
    placeholder: 'Placeholder',
    isDisabled: false,
    isError: false,
  },
}
