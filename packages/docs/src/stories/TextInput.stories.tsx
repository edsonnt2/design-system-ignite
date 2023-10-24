import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  decorators: [(story) => <Box>{story()}</Box>],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your text',
  },
}

export const InputWithTextComponentIntoTheLabelChildren: StoryObj<TextInputProps> =
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

export const InputWithTextIntoTheLabelChildren: StoryObj<TextInputProps> = {
  args: {
    label: {
      children: 'This is a simple text without style',
    },
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com/',
  },
}
