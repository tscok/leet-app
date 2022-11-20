import React from 'react'
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import { Employee } from '../types'

const ListView = ({ data }: { data: Employee[] }) => (
  <Paper>
    <TableContainer>
      <Table aria-label="employee list view">
        <TableHead>
          <TableRow>
            <TableCell>Profile</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Office</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((employee) => (
            <TableRow key={employee.email}>
              <TableCell>
                <Avatar alt={employee.name} src={employee.imagePortraitUrl || ''} />
              </TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.office}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
)

export default ListView
