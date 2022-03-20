import type { ReactNode, MutableRefObject, ButtonHTMLAttributes } from 'react'

import { THEME, SIZE } from './const'

export type ButtonProps = {
  inputRef?: MutableRefObject<HTMLButtonElement>
  id?: ButtonHTMLAttributes<HTMLButtonElement>['id']
  name?: ButtonHTMLAttributes<HTMLButtonElement>['name']
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']

  // slot
  children: ReactNode

  // state
  isDisabled?: boolean
  isLoading?: boolean

  // style
  theme?: keyof typeof THEME
  size?: keyof typeof SIZE
  isBlock?: boolean
  roundType?: 'base' | 'full' | 'circle'
  roundDirection?: {
    topLeft: boolean
    topRight: boolean
    bottomLeft: boolean
    bottomRight: boolean
  }

  // function
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
}
