import React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'

import { Employee } from '../types'

type Platforms = Pick<Employee, 'gitHub' | 'linkedIn' | 'twitter'>

const icons: Record<keyof Platforms, typeof SvgIcon> = {
  gitHub: GitHubIcon,
  linkedIn: LinkedInIcon,
  twitter: TwitterIcon,
}

const EmployeeCard = ({ name, imagePortraitUrl, office, ...data }: Employee) => (
  <Card>
    <CardMedia
      alt={name}
      component="img"
      height="150"
      image={imagePortraitUrl || ''}
      sx={{ objectFit: 'contain' }}
    />
    <CardContent>
      <Stack direction="row" justifyContent="space-between">
        <Stack sx={{ userSelect: 'none' }}>
          <Typography noWrap>{name}</Typography>
          <Typography>Office: {office}</Typography>
        </Stack>

        <Box>
          {Object.entries(icons).map(
            ([key, Icon]) =>
              data[key as keyof Platforms] && (
                <IconButton key={key} aria-label={`${key} icon button`} size="small">
                  <Icon sx={{ color: 'black' }} />
                </IconButton>
              ),
          )}
        </Box>
      </Stack>
    </CardContent>
  </Card>
)

export default EmployeeCard
