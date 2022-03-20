import clsx from 'clsx'
import NextLink from 'next/link'
import * as React from 'react'

import type { ButtonLinkProps } from './type'

import { classNames } from './const'

export const ButtonLink = ({
  inputRef,
  id,
  href,
  isTargetBlank = false,
  prefetch = true,
  children,
  isDisabled = false,
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
}: ButtonLinkProps) => {
  return (
    <div
      className={clsx('tw-w-full', 'tw-flex tw-justify-center tw-items-center')}
    >
      {isDisabled ? (
        <p
          className={clsx(
            classNames().link({
              isDisabled,
              theme,
              size,
              isBlock,
              roundType,
              roundDirection,
            })
          )}
        >
          <span className={clsx(classNames().linkText({ isDisabled, theme }))}>
            {children}
          </span>
        </p>
      ) : (
        <NextLink href={href} prefetch={prefetch}>
          <a
            ref={inputRef}
            id={id}
            target={isTargetBlank ? '_blank' : undefined}
            rel={isTargetBlank ? 'noopener' : undefined}
            className={clsx(
              classNames().link({
                isDisabled,
                theme,
                size,
                isBlock,
                roundType,
                roundDirection,
              })
            )}
          >
            <span
              className={clsx(classNames().linkText({ isDisabled, theme }))}
            >
              {children}
            </span>
          </a>
        </NextLink>
      )}
    </div>
  )
}
