import { Box } from '@mui/material'
import { HomeContentContainer } from '../../components/organisms/HomeContent/HomeContentContainer'
import { JoinButton } from '../../components/atoms/JoinButton'

export const Home = () => {
  return (
    <HomeContentContainer>
      <Box sx={{ textAlign: 'left', fontSize: '2rem', width: '80%' }}>
        Feel The Music
      </Box>
      <Box sx={{ textAlign: 'left', width: '100%' }}>
        Stream over 20 thousand songs with one click
      </Box>
      <Box sx={{ width: '35%', textAlign: 'left', }}>
        <JoinButton size='md' sx={{ fontSize: '0.75rem', textTransform: 'none', padding: '5px 15px' }}>Join Now</JoinButton>
      </Box>
    </HomeContentContainer>
  )
}
