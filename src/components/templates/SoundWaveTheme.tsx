import { createTheme } from "@mui/material";
import '@fontsource/poppins'

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
        fontFamily: ['Poppins']
    }
    
})