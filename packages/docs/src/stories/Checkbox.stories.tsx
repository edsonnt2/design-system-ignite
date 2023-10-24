import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [(story) => <Box>{story()}</Box>],
} as Meta<CheckboxProps>

export const PrimaryWithDefaultChecked: StoryObj<CheckboxProps> = {
  args: {
    defaultChecked: true,
  },
}

export const CheckboxWithTextComponentIntoTheLabelChildren: StoryObj<CheckboxProps> =
  {
    args: {
      label: {
        children: <Text size="sm">This is a TextComponent</Text>,
      },
    },
  }

export const CheckboxWithTextIntoTheLabelChildren: StoryObj<CheckboxProps> = {
  args: {
    label: {
      children: 'This is a simple text without style',
    },
  },
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
