import { ComponentProps } from 'react'
import { Input, Label, Prefix, TextInputContainer } from './styles'

type LabelProps = ComponentProps<typeof Label>

export interface TextInputProps extends ComponentProps<typeof Input> {
  label?: LabelProps
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
