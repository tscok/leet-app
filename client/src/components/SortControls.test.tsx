import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import SortControls, { Ascending } from './SortControls'

describe('SortControls', () => {
  it('should render sort buttons', () => {
    const sortMock: Ascending = { name: true, office: true }
    const onSort = jest.fn()
    render(<SortControls ascending={sortMock} onSort={onSort} />)
    expect(screen.getByLabelText(/sort buttons/i)).toBeInTheDocument()

    const nameButton = screen.getByRole('button', { name: 'Name' })
    fireEvent.click(nameButton)
    expect(onSort).toHaveBeenCalledWith({ name: false, office: true })

    const officeButton = screen.getByRole('button', { name: 'Office' })
    fireEvent.click(officeButton)
    expect(onSort).toHaveBeenCalledWith({ name: true, office: false })
  })
})
