import { ComponentProps } from 'react'
import { InputTextArea, LabelContainer } from './style'

export interface TextAreaProps extends ComponentProps<typeof InputTextArea> {
  label?: ComponentProps<typeof LabelContainer>
}

export function TextArea({ label, ...props }: TextAreaProps) {
  const textAreaContainer = <InputTextArea {...props} />

  if (!label) return textAreaContainer

  const { children, ...restLabel } = label
  return (
    <LabelContainer {...restLabel}>
      {children}
      {textAreaContainer}
    </LabelContainer>
  )
}
