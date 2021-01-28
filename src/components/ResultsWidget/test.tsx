import { render, screen } from '@testing-library/react'

import ResultsWidget from '.'

describe('<ResultsWidget />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<ResultsWidget />)

    expect(
      screen.getByRole('heading', { name: /ResultsWidget/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
