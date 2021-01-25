import { render, screen } from '@testing-library/react'

import Widget from '.'

describe('<Widget />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<Widget />)

    expect(
      screen.getByRole('heading', { name: /Widget/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
