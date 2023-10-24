import { styled } from '../../styles'

export const LabelContainer = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const InputTextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: '$20',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  '&:placeholder': {
    color: '$gray400',
  },
})
