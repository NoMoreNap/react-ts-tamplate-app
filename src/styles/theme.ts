import {createTheme} from '@mui/material';
import {ruRU} from "@mui/material/locale";

export  const theme = createTheme({
    typography: {
        fontFamily: [
            'Inter',
            'sans-serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#21A78F',
            contrastText: 'white'
        },
        secondary: {
            main: '#fff',
            contrastText: 'white'
        },
        success: {
            main: '#21A78F',
            contrastText: 'white'
        },
    },
}, ruRU)