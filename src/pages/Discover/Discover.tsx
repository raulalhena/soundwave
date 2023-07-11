import React from 'react'
import { Footer } from '../../components/organisms/Footer/Footer'
import { footerTheme } from '../../components/templates/FooterTheme'
import { ThemeProvider } from '@emotion/react'
import { Container } from '@mui/material'

export const Discover = () => {
  return (
    <>
      <Container>
          <div>Discover</div>
      </Container>
      
        <ThemeProvider theme={ footerTheme }>
          <Footer />
        </ThemeProvider>
    </>
  )
}

