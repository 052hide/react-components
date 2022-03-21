import clsx from 'clsx'
import { useMemo } from 'react'

import { DigitsProps } from './type'

const borderClassName = ({
  value,
  isError,
  isFocus,
}: {
  value?: string
  isError?: boolean
  isFocus?: boolean
}) => {
  if (!isError && value) {
    return clsx('tw-border-green-300')
  }
  if (isError) {
    return clsx('tw-border-red-300')
  }
  if (isFocus) {
    return clsx('tw-border-indigo-300')
  }
  return clsx('tw-border-gray-300')
}

const Digit = ({
  value,
  isDisabled,
  isError,
  isFocus,
}: {
  value?: string
  isDisabled?: boolean
  isError?: boolean
  isFocus?: boolean
}) => {
  return (
    <span
      className={clsx(
        'tw-flex tw-justify-center tw-items-center',
        'tw-w-8 tw-h-full',
        'tw-px-2',
        'tw-rounded',
        'tw-border-2',
        'tw-transition-colors tw-duration-200',
        borderClassName({ value, isError, isFocus }),
        isDisabled
          ? 'tw-bg-gray-100 hover:tw-cursor-not-allowed'
          : 'tw-bg-white tw-pointer-events-none'
      )}
    >
      {value}
    </span>
  )
}

export const Digits = ({
  value,
  length = 6,
  isDisabled,
  isFocus,
}: DigitsProps) => {
  const digits = useMemo(() => {
    return `${value || ''}`.split('').map((s) => ({
      value: s,
      isError: !/[0-9]/.test(s),
    }))
  }, [value])

  return (
    <ul className={clsx('tw-h-full', 'tw-flex tw-items-center', 'tw-gap-4')}>
      {[...Array(length)].map((_, i) => (
        <li key={i} className={clsx('tw-h-full')}>
          <Digit
            value={digits[i]?.value || undefined}
            isDisabled={isDisabled}
            isError={digits[i]?.isError}
            isFocus={isFocus && digits.length === i}
          />
        </li>
      ))}
    </ul>
  )
}
