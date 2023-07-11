import { Box } from '@mui/material'
import { HomeContentContainer } from '../../components/organisms/HomeContent/HomeContentContainer'
import { JoinButton } from '../../components/atoms/JoinButton'

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
        <JoinButton size='md'>Join Now</JoinButton>
      </Box>
    </HomeContentContainer>
  )
}
