import type { MutableRefObject, AnchorHTMLAttributes } from 'react'

import { ButtonProps } from '@/components/ui/Button/type'

export type ButtonLinkProps = Pick<
  ButtonProps,
  | 'children'
  | 'isDisabled'
  | 'theme'
  | 'size'
  | 'isBlock'
  | 'roundType'
  | 'roundDirection'
  | 'onFocus'
  | 'onBlur'
> & {
  inputRef?: MutableRefObject<HTMLAnchorElement>
  id?: AnchorHTMLAttributes<HTMLAnchorElement>['id']
  href: string
  isTargetBlank?: boolean
  prefetch?: boolean
}
