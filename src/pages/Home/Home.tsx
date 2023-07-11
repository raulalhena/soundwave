import { Box, Button, Container, styled } from '@mui/material'
import React from 'react'
import { HomeContentContainer } from '../../components/organisms/HomeContent/HomeContentContainer'

export const Home = () => {
  return (
    <HomeContentContainer>
      <Box sx={{ textAlign: 'left', fontSize: '' }}>
        Feel The Music
      </Box>
      <Box sx={{ textAlign: 'left', width: '100%' }}>
        Stream over 20 thousand songs with one click
      </Box>
      <Box sx={{ width: '35%' }}>
        <Button size='md' sx={{ bgcolor: '#1762A7', color: '#fff' }}>Join Now</Button>
      </Box>
    </HomeContentContainer>
  )
}
