import React from 'react'
import { render, screen } from '@testing-library/react'

import EmployeeCard from './EmployeeCard'
import { Employee } from '../types'

const mockEmployee: Employee = {
  email: 'john.smith@domain.com',
  gitHub: null,
  highlighted: false,
  imagePortraitUrl: 'totally-real-img-url',
  imageWallOfLeetUrl: 'totally-real-img-url',
  linkedIn: 'linkedin-profile',
  mainText: 'Lorem ipsum',
  manager: 'john.doe@domain.com',
  name: 'John Smith',
  office: 'Stockholm',
  orgUnit: 'yes',
  phoneNumber: '+4612345678',
  published: true,
  stackOverflow: null,
  twitter: null,
}

describe('EmployeeCard', () => {
  it('should render employee data', () => {
    render(<EmployeeCard {...mockEmployee} />)
    const img: HTMLImageElement = screen.getByRole('img')
    expect(img.src).toContain('totally-real-img-url')
    expect(screen.getByText(/john smith/i)).toBeInTheDocument()
    expect(screen.getByText(/stockholm/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/linkedIn icon button/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/twitter icon button/i)).not.toBeInTheDocument()
  })
})
