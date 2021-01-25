import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('heading', { name: /Footer/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
