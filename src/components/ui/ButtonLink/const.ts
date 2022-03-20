import clsx from 'clsx'

import type { ButtonLinkProps } from './type'

import { classNames as buttonClassNames } from '@/components/ui/Button/const'

import styles from './styles.module.css'

export const classNames = () => {
  return {
    link: ({
      isDisabled,
      theme,
      size,
      isBlock,
      roundType,
      roundDirection,
    }: Pick<
      ButtonLinkProps,
      | 'isDisabled'
      | 'theme'
      | 'size'
      | 'isBlock'
      | 'roundType'
      | 'roundDirection'
    >) => {
      return clsx(
        buttonClassNames().button({
          isDisabled,
          isLoading: false,
          theme,
          size,
          isBlock,
          roundType,
          roundDirection,
        }),
        theme === 'secondary'
          ? 'tw-decoration-primary-900'
          : 'tw-decoration-white',
        isDisabled ? 'tw-cursor-not-allowed' : styles.link
      )
    },
    linkText: ({
      isDisabled,
      theme,
    }: Pick<ButtonLinkProps, 'isDisabled' | 'theme'>) => {
      return clsx(
        !isDisabled && [
          styles.linkUnderline,
          theme === 'secondary'
            ? styles['linkUnderline--secondary']
            : styles['linkUnderline--primary'],
        ]
      )
    },
  }
}
