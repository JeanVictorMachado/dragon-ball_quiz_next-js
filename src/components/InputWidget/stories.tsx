import { Story, Meta } from '@storybook/react/types-6-0'
import InputWidget from '.'

export default {
  title: 'InputWidget',
  component: InputWidget
} as Meta

export const Basic: Story = (args) => <InputWidget />
