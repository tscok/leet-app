import React from 'react'
import { render, screen, act, fireEvent } from '@testing-library/react'

import ViewControls from './ViewControls'

describe('ViewControls', () => {
  it('should render control buttons', () => {
    const onSetView = jest.fn()
    render(<ViewControls onSetView={onSetView} view="grid" />)
    const gridButton = screen.getByLabelText(/grid view button/i)
    const listButton = screen.getByLabelText(/list view button/i)

    expect(gridButton).toBeInTheDocument()
    expect(listButton).toBeInTheDocument()

    fireEvent.click(gridButton)
    expect(onSetView).toHaveBeenCalledWith('grid')

    fireEvent.click(listButton)
    expect(onSetView).toHaveBeenCalledWith('list')
  })
})
