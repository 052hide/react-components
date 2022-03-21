import clsx from 'clsx'
import { useCallback, useState } from 'react'

import { Digits } from './Digits'
import { InputFixedDigitProps } from './type'

export const InputFixedDigit = ({
  value,
  isDisabled = false,
  length = 6,
  onChange,
  onFocus,
  onBlur,
}: InputFixedDigitProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const onChangeHandler = useCallback(
    (value?: string) => {
      const formattedValue =
        value && value.length > length
          ? value.length === length + 1
            ? `${(value || '').slice(0, length - 1)}${(value || '').slice(-1)}`
            : (value || '').slice(0, length)
          : value
      onChange && onChange(formattedValue)
    },
    [length, onChange]
  )

  const onFocusHandler = useCallback(() => {
    setIsFocus(true)
    onFocus && onFocus()
  }, [onFocus])

  const onBlurHandler = useCallback(() => {
    setIsFocus(false)
    onBlur && onBlur()
  }, [onBlur])

  return (
    <div
      className={clsx(
        'tw-relative',
        'tw-w-full tw-h-12',
        'tw-flex tw-justify-center tw-items-center'
      )}
    >
      <Digits
        value={value}
        length={length <= 0 ? 6 : length}
        isDisabled={isDisabled}
        isFocus={isFocus}
      />
      <input
        type={'text'}
        value={value}
        disabled={isDisabled}
        className={clsx(
          'tw-absolute',
          'tw-w-full tw-h-full',
          isDisabled ? 'tw-pointer-events-none' : 'tw-opacity-0'
        )}
        onChange={(event) => onChangeHandler(event.target.value)}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
    </div>
  )
}
