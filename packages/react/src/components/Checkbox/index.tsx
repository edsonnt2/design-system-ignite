import { Check } from 'phosphor-react'
import { CheckboxRoot, CheckboxIndicator, LabelContainer } from './styles'
import { ComponentProps } from 'react'

export interface CheckBoxProps extends ComponentProps<typeof CheckboxRoot> {
  label?: ComponentProps<typeof LabelContainer>
}

export function CheckBox({ label, ...props }: CheckBoxProps) {
  const checkboxContainer = (
    <CheckboxRoot {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxRoot>
  )

  if (!label) return checkboxContainer

  const { children, ...restLabel } = label
  return (
    <LabelContainer {...restLabel}>
      {checkboxContainer}
      {children}
    </LabelContainer>
  )
}
