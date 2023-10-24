import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: <Text>Example text into the Box component</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
