import { useEffect, useState } from 'react'

export interface Employee {
  email: string
  gitHub?: string
  highlighted: boolean
  imagePortraitUrl: string
  imageWallOfLeetUrl: string
  linkedIn?: string
  mainText: string
  manager: string
  name: string
  office: string
  orgUnit: string
  phoneNumber: string
  published: boolean
  stackOverflow?: string
  twitter?: string
}

type Status = 'error' | 'loading' | 'success'

export default function useEmployees() {
  const [data, setData] = useState<Employee[]>([])
  const [status, setStatus] = useState<Status>('loading')

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('/employees')
        const { data } = await response.json()

        if (response.status !== 200) {
          throw new Error(`Fetch failed with status ${response.status}`)
        }

        setData(data)
        setStatus('success')
      } catch (error) {
        setStatus('error')
      }
    })()
  }, [])

  return { data, status }
}
