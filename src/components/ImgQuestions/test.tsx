import { render, screen } from '@testing-library/react'

import ImgQuestions from '.'

describe('<ImgQuestions />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<ImgQuestions />)

    expect(
      screen.getByRole('heading', { name: /ImgQuestions/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
