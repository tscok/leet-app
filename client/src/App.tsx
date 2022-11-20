import React from 'react'
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

import useEmployees from './hooks/useEmployees'
import EmployeeCard from './components/EmployeeCard'

function App() {
  const { data, status } = useEmployees()

  return (
    <Container>
      <Stack spacing={2} sx={{ mt: 4 }}>
        <Typography component="h1" variant="h6">
          The fellowship of the tretton37
        </Typography>

        <Paper sx={{ textAlign: 'center', p: 2 }}>
          <Typography>Potential filter and tools area</Typography>
        </Paper>

        {status === 'loading' && (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        )}

        {status === 'success' && (
          <Box>
            <Grid container spacing={2}>
              {data.map((employee) => (
                <Grid key={employee.email} item md={4} sm={6} xs={12}>
                  <EmployeeCard {...employee} />
                </Grid>
              ))}
            </Grid>
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
