import { styled, Paper, Box, Typography, Container } from '@mui/material'

export const FooterCustom = styled(Box)(() => ({
  // display: 'flex',
  // justifyContent: 'space-between',
  // gap: '20px',
  background: '#202027',
  padding: '20px 0'
  // padding: '10px 30px'
}))

export const FooterContentContainer = styled(Container)(() => ({
  maxHeight: '80%',
  // border: '1px solid red',
  width: '85%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  background: '#202027',
  padding: '0'
}))

export const FooterItem = styled(Box)(() => ({
  // border: '1px solid yellow',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
