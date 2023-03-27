import { render, screen } from '@testing-library/react'

import FormContact from '.'

describe('<FormContact />', () => {
  it('should render the heading', () => {
    const { container } = render(<FormContact />)

    expect(
      screen.getByRole('heading', { name: /FormContact/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
