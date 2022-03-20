import CircularProgress from '@mui/material/CircularProgress'
import clsx from 'clsx'
import * as React from 'react'

import type { ButtonProps } from './type'

import {
  sizeClassNames,
  widthClassNames,
  themeClassNames,
  roundedClassNames,
} from './const'

export const Button = ({
  inputRef,
  id,
  name,
  type,
  children,
  isDisabled = false,
  isLoading = false,
  theme = 'primary',
  size = 'base',
  isBlock = true,
  roundType = 'base',
  roundDirection = {
    topLeft: true,
    topRight: true,
    bottomLeft: true,
    bottomRight: true,
  },
  onClick,
}: ButtonProps) => {
  return (
    <div
      className={clsx('tw-w-full', 'tw-flex tw-justify-center tw-items-center')}
    >
      <button
        ref={inputRef}
        id={id}
        name={name}
        type={type}
        disabled={isDisabled}
        className={clsx(
          sizeClassNames({ size }),
          widthClassNames({ size, isBlock, isLoading, roundType }),
          themeClassNames({ theme, isDisabled }),
          roundedClassNames({ roundType, roundDirection }),
          'tw-flex tw-items-center tw-justify-center',
          'tw-transition-all tw-duration-500',
          'focus:tw-outline-none',
          'disabled:tw-cursor-not-allowed'
        )}
        onClick={onClick}
      >
        {isLoading ? (
          <CircularProgress
            disableShrink
            sx={{
              color: 'white',
              animationDuration: '750ms',
            }}
            size={size === 'lg' ? 24 : 20}
            thickness={4}
          />
        ) : (
          children
        )}
      </button>
    </div>
  )
}
