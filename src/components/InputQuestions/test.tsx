import { render, screen } from '@testing-library/react'

import InputQuestions from '.'

describe('<InputQuestions />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<InputQuestions />)

    expect(
      screen.getByRole('heading', { name: /InputQuestions/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
