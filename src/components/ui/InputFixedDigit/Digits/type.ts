import type { InputFixedDigitProps } from '@/components/ui/InputFixedDigit/type'

export type DigitsProps = Pick<
  InputFixedDigitProps,
  'value' | 'length' | 'isDisabled'
> & {
  isFocus?: boolean
}
