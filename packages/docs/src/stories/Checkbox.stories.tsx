import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, CheckBox, CheckBoxProps } from '@ignite-ui/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  decorators: [(story) => <Box>{story()}</Box>],
} as Meta<CheckBoxProps>

export const PrimaryWithDefaultChecked: StoryObj<CheckBoxProps> = {
  args: {
    defaultChecked: true,
  },
}

export const CheckboxWithTextComponentIntoTheLabelChildren: StoryObj<CheckBoxProps> =
  {
    args: {
      label: {
        children: <Text size="sm">This is a TextComponent</Text>,
      },
    },
  }

export const CheckboxWithTextIntoTheLabelChildren: StoryObj<CheckBoxProps> = {
  args: {
    label: {
      children: 'This is a simple text without style',
    },
  },
}

export const Disabled: StoryObj<CheckBoxProps> = {
  args: {
    disabled: true,
  },
}
