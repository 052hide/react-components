import clsx from 'clsx'
import * as React from 'react'

import { classNames } from './const'
import { InputTextProps } from './type'

export const InputText = ({
  inputRef,
  id,
  name,
  type = 'text',
  maxLength,
  autoComplete,
  value,
  placeholder = '',
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
}: InputTextProps) => {
  return (
    <input
      ref={inputRef}
      id={id}
      name={name}
      type={type}
      maxLength={maxLength}
      autoComplete={autoComplete}
      value={value}
      placeholder={placeholder}
      disabled={isDisabled}
      className={clsx(classNames().input({ isError, roundDirection }))}
      onChange={(event) => onChange && onChange(event.target.value)}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}
