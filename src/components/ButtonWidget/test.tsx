import { render, screen } from '@testing-library/react'

import ButtonWidget from '.'

describe('<ButtonWidget />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<ButtonWidget />)

    expect(
      screen.getByRole('heading', { name: /ButtonWidget/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
