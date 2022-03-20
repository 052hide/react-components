import clsx from 'clsx'

import type { ButtonProps } from './type'

export const THEME = {
  primary: 'primary',
  secondary: 'secondary',
}

export const SIZE = {
  base: 'base',
  lg: 'lg',
}

export const sizeClassNames = ({ size }: Pick<ButtonProps, 'size'>) => {
  if (size === 'lg') {
    return clsx('tw-h-12', 'tw-text-base')
  }
  return clsx('tw-h-10', 'tw-text-sm')
}

export const widthClassNames = ({
  size,
  isBlock,
  isLoading,
  roundType,
}: Pick<ButtonProps, 'size' | 'isBlock' | 'isLoading' | 'roundType'>) => {
  if (roundType === 'circle') {
    if (size === 'lg') {
      return clsx('tw-w-12')
    }
    return clsx('tw-w-10')
  }
  if (isBlock && !isLoading) {
    return clsx('tw-w-full', 'tw-px-4')
  }
  return clsx('tw-px-4', size === 'lg' ? 'tw-w-[56px]' : 'tw-w-[52px]')
}

export const themeClassNames = ({
  theme,
  isDisabled,
}: Pick<ButtonProps, 'theme' | 'isDisabled'>) => {
  if (isDisabled) {
    return clsx(
      'tw-bg-gray-400 focus:tw-bg-gray-400 hover:tw-bg-gray-400',
      'tw-text-white'
    )
  }
  if (theme === 'secondary') {
    return clsx(
      'tw-bg-white',
      'tw-border-2 tw-border-primary-900 hover:tw-border-primary-600 focus:tw-border-primary-400',
      'tw-text-primary-900 hover:tw-text-primary-600 focus:tw-text-primary-400'
    )
  }
  return clsx(
    'tw-bg-indigo-600 focus:tw-bg-indigo-700 hover:tw-bg-indigo-500',
    'tw-text-white'
  )
}

export const roundedClassNames = ({
  roundType,
  roundDirection,
}: Pick<ButtonProps, 'roundType' | 'roundDirection'>) => {
  if (roundType === 'circle') {
    return clsx('tw-rounded-full')
  }

  let res: string[] = []
  if (roundDirection?.topLeft) {
    res = [
      ...res,
      clsx(roundType === 'full' ? 'tw-rounded-tl-full' : 'tw-rounded-tl'),
    ]
  }
  if (roundDirection?.topRight) {
    res = [
      ...res,
      clsx(roundType === 'full' ? 'tw-rounded-tr-full' : 'tw-rounded-tr'),
    ]
  }
  if (roundDirection?.bottomRight) {
    res = [
      ...res,
      clsx(roundType === 'full' ? 'tw-rounded-br-full' : 'tw-rounded-br'),
    ]
  }
  if (roundDirection?.bottomLeft) {
    res = [
      ...res,
      clsx(roundType === 'full' ? 'tw-rounded-bl-full' : 'tw-rounded-bl'),
    ]
  }
  return res
}
