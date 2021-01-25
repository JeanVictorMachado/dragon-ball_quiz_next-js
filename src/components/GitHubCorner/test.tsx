import { render, screen } from '@testing-library/react'

import GitHubCorner from '.'

describe('<GitHubCorner />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<GitHubCorner />)

    expect(
      screen.getByRole('heading', { name: /GitHubCorner/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
