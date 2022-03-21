import clsx from 'clsx'
import { useCallback, useMemo, useState } from 'react'

import { classNames } from './const'
import { InputNumberProps } from './type'

export const InputNumber = ({
  inputRef,
  id,
  name,
  maxLength,
  autoComplete,
  value,
  placeholder = '',
  maximumFractionDigits = 8,
  isDisabled = false,
  isError = false,
  roundDirection = {
    topLeft: true,
    topRight: true,
    bottomLeft: true,
    bottomRight: true,
  },
  onChange,
  onFocus,
  onBlur,
  onInputValid,
}: InputNumberProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false)

  const isValid = useMemo(() => {
    return !!(value === '0' || Number(value))
  }, [value])

  const formattedValue = useMemo(() => {
    return isValid
      ? Number(value).toLocaleString(undefined, {
          maximumFractionDigits,
        })
      : value
  }, [value, isValid, maximumFractionDigits])

  const onChangeHandler = useCallback(
    (value?: string) => {
      const v = `${value}`.replaceAll(',', '')
      onInputValid && onInputValid(!!Number(v) || Number(v) === 0)
      onChange && onChange(v)
    },
    [onChange, onInputValid]
  )

  const onFocusHandler = useCallback(() => {
    setIsFocus(true)
    onFocus && onFocus()
  }, [onFocus])

  const onBlurHandler = useCallback(() => {
    setIsFocus(false)

    if (isValid) {
      const fractionDigits = `${value}`.split('.')
      if (
        fractionDigits.length === 2 &&
        fractionDigits[1].length > maximumFractionDigits
      ) {
        onChange &&
          onChange(
            `${fractionDigits[0]}.${fractionDigits[1].slice(
              0,
              maximumFractionDigits
            )}`
          )
      }
    }

    onBlur && onBlur()
  }, [value, maximumFractionDigits, isValid, onBlur, onChange])

  return (
    <input
      ref={inputRef}
      id={id}
      name={name}
      type={'text'}
      maxLength={maxLength}
      autoComplete={autoComplete}
      value={isFocus ? value : formattedValue}
      placeholder={placeholder}
      disabled={isDisabled}
      className={clsx(classNames().input({ isError, roundDirection }))}
      onChange={(event) => onChangeHandler(event.target.value)}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
    />
  )
}
