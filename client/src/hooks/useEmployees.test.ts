import { renderHook } from '@testing-library/react'

import useEmployees from './useEmployees'

describe('useEmployees', () => {
  it('should return initial data and status', () => {
    const { result } = renderHook(() => useEmployees())
    expect(result.current.status).toBe('loading')
    expect(result.current.employees).toEqual([])
  })
})
