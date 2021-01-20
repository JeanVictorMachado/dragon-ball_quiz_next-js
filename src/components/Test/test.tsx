import { render, screen } from '@testing-library/react'

import Test from '.'

describe('<Test />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<Test />)

    expect(
      screen.getByRole('heading', { name: /Test/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
