import clsx from 'clsx'

import type { InputNumberProps } from './type'

import { baseClassNames, roundedClassNames } from '@/components/ui/input/const'

export const classNames = () => {
  return {
    input: ({
      isError,
      roundDirection,
    }: Pick<InputNumberProps, 'isError' | 'roundDirection'>) => {
      return clsx(
        baseClassNames({ isError }),
        roundedClassNames({ roundDirection })
      )
    },
  }
}
