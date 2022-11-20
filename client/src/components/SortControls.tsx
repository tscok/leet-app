import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

import { Employee } from '../types'

export function sortCallback(key: 'name' | 'office', ascendingOrder: boolean) {
  return function sortFn(a: Employee, b: Employee) {
    const aValue: string = a[key] || ''
    const bValue: string = b[key] || ''
    return ascendingOrder ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
  }
}

export interface Ascending {
  name: boolean
  office: boolean
}

interface SortControlsProps {
  ascending: Ascending
  onSort: (value: Ascending) => void
}

const SortControls = ({ ascending, onSort }: SortControlsProps) => (
  <ButtonGroup aria-label="sort buttons">
    <Button
      disableElevation
      onClick={() => onSort({ ...ascending, name: !ascending.name })}
      size="small"
      startIcon={ascending.name ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
      variant="outlined"
    >
      Name
    </Button>
    <Button
      disableElevation
      onClick={() => onSort({ ...ascending, office: !ascending.office })}
      size="small"
      startIcon={ascending.office ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
      variant="outlined"
    >
      Office
    </Button>
  </ButtonGroup>
)

export default SortControls
