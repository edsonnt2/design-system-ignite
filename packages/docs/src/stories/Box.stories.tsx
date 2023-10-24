import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Form/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Example text into the Box component</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
