import { styled, Paper, Box, Typography } from '@mui/material'
import { FooterContentContainer } from '../../particles/FooterContentContainer'
import { FooterItem } from '../../atoms/FooterItem'

export const FooterCustom = styled(Box)(() => ({
  background: '#202027',
  padding: '20px 0'
}))

export const Footer = () => {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <FooterCustom>
        <FooterContentContainer>
          <FooterItem>
            <Typography variant='footerText' sx={{ textAlign: 'left' }}>
              About Us
            </Typography>
          </FooterItem>
          <FooterItem>
            <Typography variant='footerText'>
              Contact
            </Typography>
          </FooterItem>
          <FooterItem>
            <img src="../../../assets/twitter.svg" alt="Twitter" />
            <Typography variant='footerText'>
              Twitter
            </Typography>
          </FooterItem>
          <FooterItem>
            <img src="../../../assets/twitter.svg" alt="Facebook" />
            <Typography variant='footerText'>
              Facebook
            </Typography>
          </FooterItem>
        </FooterContentContainer>
      </FooterCustom>
    </Paper>
  )
}
