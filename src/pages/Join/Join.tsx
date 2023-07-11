import React from 'react'
import { Footer } from '../../components/organisms/Footer/Footer'
import { Box, Container, Typography } from '@mui/material'
import { JoinButton } from '../../components/atoms/JoinButton'
import { JoinInput } from '../../components/atoms/JoinInput'
import { JoinForm } from '../../components/particles/JoinForm'
import { JoinInputLabel } from '../../components/atoms/JoinInputLabel'

export function Join() {
  return (
    <>
      <Container>
        <Box sx={{ textAlign: 'left', marginBottom: '15px' }}>
          <Typography variant='joinTitle'>
            Join the <Typography variant='accentText'>fun.</Typography>
          </Typography>
        </Box>
        <Box>
          <JoinForm id='signup'>
            <JoinInputLabel htmlFor='name'>
              <Typography variant='inputLabel'>
                Name:
              </Typography>
            </JoinInputLabel>
            <JoinInput id='name' />
            <JoinInputLabel htmlFor='email'>
              <Typography variant='inputLabel'>
                Email:
              </Typography>
            </JoinInputLabel>
            <JoinInput id='email' />
            <JoinInputLabel>
              <Typography variant='inputLabel'>
                Password:
              </Typography>
            </JoinInputLabel>
            <JoinInput />
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <JoinButton sx={{  padding: '2px 25px', width: '100%', margin: '15px 0 10px 0', fontSize: '0.75rem',  }}>
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