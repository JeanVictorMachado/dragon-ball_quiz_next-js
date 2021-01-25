import { Story, Meta } from '@storybook/react/types-6-0'
import ButtonWidget from '.'

export default {
  title: 'ButtonWidget',
  component: ButtonWidget
} as Meta

export const Basic: Story = (args) => <ButtonWidget />
