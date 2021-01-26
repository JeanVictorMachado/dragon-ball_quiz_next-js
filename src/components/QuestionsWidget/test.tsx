import { render, screen } from '@testing-library/react'

import QuestionsWidget from '.'

describe('<QuestionsWidget />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<QuestionsWidget />)

    expect(
      screen.getByRole('heading', { name: /QuestionsWidget/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
