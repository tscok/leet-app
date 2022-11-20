import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import ListSharpIcon from '@mui/icons-material/ListSharp'
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp'

export type View = 'grid' | 'list'

interface ViewControlsProps {
  onSetView: (newView: View) => void
  view: View
}

const ViewControls = ({ onSetView, view }: ViewControlsProps) => (
  <ButtonGroup disableElevation>
    <Button
      aria-label="grid view button"
      onClick={() => onSetView('grid')}
      size="small"
      variant={view === 'grid' ? 'contained' : 'outlined'}
    >
      <GridViewSharpIcon />
    </Button>
    <Button
      aria-label="list view button"
      onClick={() => onSetView('list')}
      size="small"
      variant={view === 'list' ? 'contained' : 'outlined'}
    >
      <ListSharpIcon />
    </Button>
  </ButtonGroup>
)

export default ViewControls
