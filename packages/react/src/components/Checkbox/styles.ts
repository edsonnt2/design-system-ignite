import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

export const LabelContainer = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
    borderColor: '$ignite300',
  },
  '&:focus': {
    borderColor: '$ignite300',
  },
  '&:hover': {
    borderColor: '$ignite300',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
