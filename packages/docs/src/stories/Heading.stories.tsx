import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  // tags: ['autodocs'],
  component: Heading,
  args: {
    size: 'md',
    children: 'Example with a default text to Heading component',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
    },
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
