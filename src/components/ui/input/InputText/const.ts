import clsx from 'clsx'

import type { InputTextProps } from './type'

import { classNames as commonClassNames } from '@/components/ui/input/const'

export const classNames = () => {
  return {
    input: ({
      isError,
      roundDirection,
    }: Pick<InputTextProps, 'isError' | 'roundDirection'>) => {
      return clsx(commonClassNames().input({ isError, roundDirection }))
    },
  }
}
