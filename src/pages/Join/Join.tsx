import React from 'react'
import { Footer } from '../../components/organisms/Footer/Footer'
import { Box, Container, InputLabel, styled, Input } from '@mui/material'
import { JoinButton } from '../../components/atoms/JoinButton'

const JoinForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  backgroundColor: '#202027',
  color: '#fff',
  padding: '10px',
  textAlign: 'left'
}))

const JoinInputLabel = styled(InputLabel)(() => ({
  color: '#fff'
}))

const JoinInput = styled(Input)(() => ({
  border: '1px solid #2E3852',
  ':hover': {
    border: '1px solid #596da0'
  }
}))

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
              <JoinButton>
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