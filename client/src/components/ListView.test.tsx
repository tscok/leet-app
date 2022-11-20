import React from 'react'
import { render, screen } from '@testing-library/react'

import { Employee } from '../types'
import ListView from './ListView'

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

describe('ListView', () => {
  it('should render mock user', () => {
    render(<ListView data={[mockEmployee]} />)
    expect(screen.getByLabelText(/employee list view/i)).toBeInTheDocument()
    expect(screen.getByText(/profile/i)).toBeInTheDocument()
    expect(screen.getByText(/name/i)).toBeInTheDocument()
    expect(screen.getByText(/office/i)).toBeInTheDocument()
    expect(screen.getByText(/john smith/i)).toBeInTheDocument()
    expect(screen.getByText(/stockholm/i)).toBeInTheDocument()
  })
})
