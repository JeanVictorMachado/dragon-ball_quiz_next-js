import { Story, Meta } from '@storybook/react/types-6-0'
import QuizLogo from '.'

export default {
  title: 'QuizLogo',
  component: QuizLogo
} as Meta

export const Basic: Story = (args) => <QuizLogo />
