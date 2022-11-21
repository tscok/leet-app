import { useEffect, useState } from 'react'

import { Employee } from '../types'

type Status = 'error' | 'loading' | 'success'

export default function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [status, setStatus] = useState<Status>('loading')

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('/employees')
        const { data } = await response.json()

        if (response.status !== 200) {
          throw new Error(`Fetch failed with status ${response.status}`)
        }

        setEmployees(data)
        setStatus('success')
      } catch (error) {
        setStatus('error')
      }
    })()
  }, [])

  return { employees, status }
}
