import type { MutableRefObject, InputHTMLAttributes } from 'react'

import type { CommonInputProps } from '@/components/ui/input/type'

export type InputTextProps = CommonInputProps & {
  inputRef?: MutableRefObject<HTMLInputElement>
  id?: InputHTMLAttributes<HTMLInputElement>['id']
  name?: InputHTMLAttributes<HTMLInputElement>['name']
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  maxLength?: InputHTMLAttributes<HTMLInputElement>['maxLength']
  autoComplete?: InputHTMLAttributes<HTMLInputElement>['autoComplete']

  value?: string
  placeholder?: string

  // function
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
}
