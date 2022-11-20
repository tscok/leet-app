import React, { useState } from 'react'
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import useEmployees from './hooks/useEmployees'
import EmployeeCard from './components/EmployeeCard'
import ListView from './components/ListView'
import ViewControls, { View } from './components/ViewControls'
import SortControls, { Ascending, sortCallback } from './components/SortControls'

function App() {
  const { data, status } = useEmployees()
  const [view, setView] = useState<View>('grid')
  const [textFilter, setTextFilter] = useState('')
  const [location, setLocation] = useState('All')
  const [ascending, setAscending] = useState<Ascending>({ name: true, office: true })

  const offices = new Set(data.map((d) => d.office))
  let filtered = [...data]

  if (textFilter) {
    filtered = filtered.filter(({ name }) => name.toLowerCase().includes(textFilter))
  }

  if (location !== 'All') {
    filtered = filtered.filter(({ office }) => (office || '').includes(location))
  }

  if (filtered.length > 0) {
    filtered = [...filtered].sort(sortCallback('name', ascending.name))
    filtered = [...filtered].sort(sortCallback('office', ascending.office))
  }

  return (
    <Container>
      <Stack spacing={2} sx={{ mt: 4 }}>
        <Typography component="h1" variant="h6">
          The fellowship of the tretton37
        </Typography>

        <Paper aria-label="filter options area" sx={{ textAlign: 'center', p: 2 }}>
          <Stack direction="row" display="flex" justifyContent="space-between">
            <Stack direction="row" spacing={2}>
              <TextField
                label="Filter by name"
                onChange={(evt) => setTextFilter(evt.target.value)}
                size="small"
                value={textFilter}
              />

              <Select
                onChange={(evt: SelectChangeEvent) => setLocation(evt.target.value as string)}
                size="small"
                sx={{ textAlign: 'left', width: 150 }}
                value={location}
              >
                <MenuItem value="All">All offices</MenuItem>
                {(Array.from(offices).filter(Boolean) as string[]).map((office) => (
                  <MenuItem key={office} value={office}>
                    {office}
                  </MenuItem>
                ))}
              </Select>

              <SortControls
                ascending={ascending}
                onSort={(sorting: Ascending) => setAscending(sorting)}
              />
            </Stack>
            <ViewControls onSetView={(newView: View) => setView(newView)} view={view} />
          </Stack>
        </Paper>

        {status === 'loading' && (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        )}

        {status === 'success' && (
          <Box>
            {view === 'grid' ? (
              <Grid aria-label="employee grid view" container spacing={2}>
                {filtered.map((employee) => (
                  <Grid key={employee.email} item md={4} sm={6} xs={12}>
                    <EmployeeCard {...employee} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <ListView data={filtered} />
            )}
          </Box>
        )}

        {status === 'error' && (
          <Alert severity="warning" sx={{ mt: 4 }}>
            An error occurred while fetching data. This project relies on env vars stored on Heroku,
            please see https://leet-app.herokuapp.com/
          </Alert>
        )}
      </Stack>
    </Container>
  )
}

export default App
