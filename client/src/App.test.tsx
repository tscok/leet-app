import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const h1 = screen.getByText(/The fellowship of the tretton37/i)
  expect(h1).toBeInTheDocument()
  expect(screen.getByLabelText(/filter options area/i)).toBeInTheDocument()
})
