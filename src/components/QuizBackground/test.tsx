import { render, screen } from '@testing-library/react'

import QuizBackground from '.'

describe('<QuizBackground />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<QuizBackground />)

    expect(
      screen.getByRole('heading', { name: /QuizBackground/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
