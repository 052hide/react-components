import clsx from 'clsx'

import type { InputTextProps } from './type'

import { baseClassNames, roundedClassNames } from '@/components/ui/input/const'

export const classNames = () => {
  return {
    input: ({
      isError,
      roundDirection,
    }: Pick<InputTextProps, 'isError' | 'roundDirection'>) => {
      return clsx(
        baseClassNames({ isError }),
        roundedClassNames({ roundDirection })
      )
    },
  }
}
