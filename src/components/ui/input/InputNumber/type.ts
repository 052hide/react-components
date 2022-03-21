import type { MutableRefObject, InputHTMLAttributes } from 'react'

import type { CommonInputProps } from '@/components/ui/input/type'

export type InputNumberProps = CommonInputProps & {
  inputRef?: MutableRefObject<HTMLInputElement>
  id?: InputHTMLAttributes<HTMLInputElement>['id']
  name?: InputHTMLAttributes<HTMLInputElement>['name']
  maxLength?: InputHTMLAttributes<HTMLInputElement>['maxLength']
  autoComplete?: InputHTMLAttributes<HTMLInputElement>['autoComplete']

  value?: string
  placeholder?: string

  // function
  onChange?: (value?: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onInputValid?: (value: boolean) => void
}
