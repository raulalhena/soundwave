import React from 'react'
import { Footer } from '../../components/organisms/Footer/Footer'
import { footerTheme } from '../../components/templates/FooterTheme'
import { ThemeProvider } from '@emotion/react'
import { Box } from '@mui/material'
import { DiscoverContentContainer } from '../../components/organisms/DiscoverContent/DiscoverContentContainer'
import { DiscoverSectionsContainer } from '../../components/particles/DiscoverSectionsContainer'
import { DiscoverSectionsBox } from '../../components/particles/DiscoverSectionsBox'
import { DiscoverCoversBox } from '../../components/atoms/DiscoverCoversBox'

export const Discover = () => {
  return (
      <DiscoverContentContainer>
        <Box sx={{ textAlign: 'left' }}>
          Discover New Music
        </Box>
        <DiscoverSectionsContainer>
          <DiscoverSectionsBox>
            <img src="../../assets/microphone.svg" alt="Charts" width='40%' />
            Charts
          </DiscoverSectionsBox>
          <DiscoverSectionsBox>
           <img src="../../assets/albums.svg" alt="Albums" width='40%' />
            Albums
          </DiscoverSectionsBox>
          <DiscoverSectionsBox>
            <img src="../../assets/more.svg" alt="More" width='40%' />
            More
          </DiscoverSectionsBox>
        </DiscoverSectionsContainer>
        <Box sx={{ textAlign: 'left' }}>
          By joining you can benefit by listening to the latest albums released.
        </Box>
        <DiscoverCoversBox>
          <img src="../../assets/covers.jpg" alt="Covers" width='80%' style={{ border: '1px solid yellow',  marginRight: '20px' }} />
        </DiscoverCoversBox>
        <ThemeProvider theme={ footerTheme }>
          <Footer />
        </ThemeProvider>
      </DiscoverContentContainer>
  )
}

