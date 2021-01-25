import { Story, Meta } from '@storybook/react/types-6-0'
import GitHubCorner from '.'

export default {
  title: 'GitHubCorner',
  component: GitHubCorner
} as Meta

export const Basic: Story = (args) => <GitHubCorner />
