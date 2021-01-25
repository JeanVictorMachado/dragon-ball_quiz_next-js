import { render, screen } from '@testing-library/react'

import HeaderWidget from '.'

describe('<HeaderWidget />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<HeaderWidget />)

    expect(
      screen.getByRole('heading', { name: /HeaderWidget/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
