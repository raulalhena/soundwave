import { BottomNavigation, BottomNavigationAction, styled, Paper } from '@mui/material'
import React from 'react'

const BottomNavigationCustom = styled(BottomNavigation)(() => ({
  background: '#202027',
  color: '#fff'
}))

export const Footer = () => {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
    <BottomNavigationCustom>
        <BottomNavigationAction sx={{ color: '#fff' }} label='About Us' icon={'About Us'}/>
        <BottomNavigationAction sx={{ color: '#fff' }} label='Contact' icon={'Contact'}/>
        <BottomNavigationAction sx={{ color: '#fff' }} label='Twitter' icon={'Twitter'}/>
        <BottomNavigationAction sx={{ color: '#fff' }} label='Facebook' icon={'Facebook'}/>
    </BottomNavigationCustom>
   </Paper>
  )
}
