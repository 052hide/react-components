import clsx from 'clsx'

import type { CommonInputProps } from './type'

export const baseClassNames = ({
  isError,
}: Pick<CommonInputProps, 'isError'>) =>
  clsx(
    'tw-h-formBase tw-w-full',
    'tw-px-4',
    'tw-border-2',
    isError
      ? 'tw-border-red-400'
      : 'tw-border-gray-400 focus:tw-border-indigo-400 focus:tw-outline-none',
    'tw-bg-white disabled:tw-bg-gray-100 disabled:tw-cursor-not-allowed',
    'tw-transition tw-duration-300'
  )

export const roundedClassNames = ({
  roundDirection,
}: Pick<CommonInputProps, 'roundDirection'>) => {
  let res: string[] = []
  if (roundDirection?.topLeft) {
    res = [...res, 'tw-rounded-tl']
  }
  if (roundDirection?.topRight) {
    res = [...res, 'tw-rounded-tr']
  }
  if (roundDirection?.bottomRight) {
    res = [...res, 'tw-rounded-br']
  }
  if (roundDirection?.bottomLeft) {
    res = [...res, 'tw-rounded-bl']
  }
  return res
}
