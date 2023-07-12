import { Box, Typography,styled } from '@mui/material'
import { HomeContentContainer } from '../../components/organisms/HomeContent/HomeContentContainer'
import { JoinButton } from '../../components/atoms/JoinButton'
import { HeroGirlImage } from '../../components/atoms/HeroGirlImg'
import { HomeInfoContainer } from '../../components/particles/HomeInfoContainer'
import { SoundWaveTheme } from '../../components/templates/SoundWaveTheme'
import { Main } from '../../components/organisms/Main/Main'

export const Home = () => {
  return (
    <Main component='main'>
      <HomeContentContainer>
        <HeroGirlImage component='section'>
          <img src="../../assets/landing-page-girl.png" alt="Hero Girl" style={{ maxHeigh: '100%', maxWidth: '100%' }}/>
        </HeroGirlImage>
        <HomeInfoContainer component='section'>
          <Box sx={{ textAlign: 'left', width: '80%', [SoundWaveTheme.breakpoints.up('desktop')]: { width: '100%'} }}>
            <Typography variant='heroText'>
              Feel The Music
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'left', width: '100%' }}>
            Stream over 20 thousand songs with one click
          </Box>
          <Box sx={{ width: '35%', textAlign: 'left', marginTop: '10px', [SoundWaveTheme.breakpoints.up('desktop')]: { width: '40%'} }}>
            <JoinButton size='md' sx={{ fontSize: '0.75rem', padding: '5px 15px' }}>Join Now</JoinButton>
          </Box>
        </HomeInfoContainer>
      </HomeContentContainer>
    </Main>
  )
}
