import { render, screen } from '@testing-library/react'

import InputWidget from '.'

describe('<InputWidget />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<InputWidget />)

    expect(
      screen.getByRole('heading', { name: /InputWidget/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
