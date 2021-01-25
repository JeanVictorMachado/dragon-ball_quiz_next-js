import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b',
      color: '#fff',
      width: '100%',
      height: '100%',
      padding: '3rem',
      'text-align': 'center'
    })
  })
})
