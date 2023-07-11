import { styled, Container } from '@mui/material'

export const NavbarContainer = styled(Container) (() => ({
    border: '1px solid blue',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginTop: '3%',
    adding: '0 10px 0 10px',
    width: '100%'
}))