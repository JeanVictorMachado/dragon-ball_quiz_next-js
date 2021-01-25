import { render, screen } from '@testing-library/react'

import QuizLogo from '.'

describe('<QuizLogo />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<QuizLogo />)

    expect(
      screen.getByRole('heading', { name: /QuizLogo/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
