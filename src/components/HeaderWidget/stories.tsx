import { Story, Meta } from '@storybook/react/types-6-0'
import HeaderWidget from '.'

export default {
  title: 'HeaderWidget',
  component: HeaderWidget
} as Meta

export const Basic: Story = (args) => <HeaderWidget />
