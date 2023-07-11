import { createTheme } from "@mui/material";
import '@fontsource/poppins'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/900.css'

export const SoundWaveTheme = createTheme({
    palette: {
        primary: {
            main: '#2F303A'
        },
        background: {
            default: '#2F303A'
        },
        text: {
            primary: '#fff',
        }
    },
    typography: {
        fontFamily: ['Poppins'],
        joinTitle: {
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: '3.5rem'
        },
        accentText: {
            color: '#bf3681'
        },
        inputLabel: {
            fontSize: '0.75rem',
            fontWeight: 700
        }
    }
    
})