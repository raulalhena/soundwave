import { Button, styled } from '@mui/material'

export const JoinButton = styled(Button)(() => ({
    backgroundColor: '#1762A7', 
    color: '#fff',
    '&:hover': {
        backgroundColor: '#2180d8'
    },
    "&:focus": {
        backgroundColor: '#2796ff'
    }
}))