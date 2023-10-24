import { ComponentProps } from 'react'
import { Input, LabelContainer, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  label?: ComponentProps<typeof LabelContainer>
  prefix?: string
}

export function TextInput({ label, prefix, ...props }: TextInputProps) {
  const inputContainer = (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )

  if (!label) return inputContainer

  const { children, ...restLabel } = label
  return (
    <LabelContainer {...restLabel}>
      {children}
      {inputContainer}
    </LabelContainer>
  )
}
