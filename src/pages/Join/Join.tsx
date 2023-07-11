import React from 'react'
import { Footer } from '../../components/organisms/Footer/Footer'
import { Box, Container, InputLabel, styled, Input } from '@mui/material'
import { JoinButton } from '../../components/atoms/JoinButton'
import { JoinInput } from '../../components/atoms/JoinInput'
import { JoinForm } from '../../components/particles/JoinForm'
import { JoinInputLabel } from '../../components/atoms/JoinInputLabel'

export function Join() {
  return (
    <>
      <Container>
        <Box>
          Join the <span style={{ color: 'purlple'}}>fun.</span>
        </Box>
        <Box>
          <JoinForm id='signup'>
            <JoinInputLabel html-for='name'>
              Name:
            </JoinInputLabel>
            <JoinInput id='name' />
            <JoinInputLabel>
              Email:
            </JoinInputLabel>
            <JoinInput />
            <JoinInputLabel>
              Password:
            </JoinInputLabel>
            <JoinInput />
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <JoinButton sx={{  padding: '2px 25px' }}>
                Join Now
              </JoinButton>
            </Box>
          </JoinForm>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default Join