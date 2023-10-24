import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  // tags: ['autodocs'],
  component: Heading,
  args: {
    children: 'Example with a default text to Heading component',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Example with H1 as customTag of the Heading component',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Value default is `h2`, but we can change that value for another one using the propriety `as`',
      },
    },
  },
}
