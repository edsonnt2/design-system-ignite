import { ComponentProps, ElementType } from 'react'
import { InputTextArea, LabelContainer } from './style'

export interface TextAreaProps extends ComponentProps<typeof InputTextArea> {
  label?: ComponentProps<typeof LabelContainer>
  as?: ElementType
}

export function TextArea({ label = {}, ...props }: TextAreaProps) {
  const { children, ...restLabel } = label
  return (
    <LabelContainer {...restLabel}>
      {children}
      <InputTextArea {...props} />
    </LabelContainer>
  )
}
