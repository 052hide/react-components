export type InputFixedDigitProps = {
  value?: string
  isDisabled?: boolean
  length?: number

  // function
  onChange?: (value?: string) => void
  onFocus?: () => void
  onBlur?: () => void
}
