import { Story, Meta } from '@storybook/react/types-6-0'
import Widget from '.'

export default {
  title: 'Widget',
  component: Widget
} as Meta

export const Basic: Story = (args) => <Widget />
