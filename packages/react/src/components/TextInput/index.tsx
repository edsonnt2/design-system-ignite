import { ComponentProps } from 'react'
import { Input, Label, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  label?: ComponentProps<typeof Label>
  prefix?: string
}

export function TextInput({ label = {}, prefix, ...props }: TextInputProps) {
  const { children, ...restLabel } = label
  return (
    <Label {...restLabel}>
      {children}
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} />
      </TextInputContainer>
    </Label>
  )
}
