import { render, screen } from '@testing-library/react'

import Project from '.'

describe('<Project />', () => {
  it('should render the heading', () => {
    const { container } = render(<Project />)

    expect(screen.getByRole('heading', { name: /Project/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
