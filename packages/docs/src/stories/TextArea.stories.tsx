import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  decorators: [(story) => <Box>{story()}</Box>],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your text here',
  },
}

export const TextareaWithTextComponentIntoTheLabelChildren: StoryObj<TextAreaProps> =
  {
    args: {
      label: {
        children: (
          <Text as="span" size="sm">
            This is a TextComponent
          </Text>
        ),
      },
    },
  }

export const TextareaWithTextIntoTheLabelChildren: StoryObj<TextAreaProps> = {
  args: {
    label: {
      children: 'This is a simple text without style',
    },
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
