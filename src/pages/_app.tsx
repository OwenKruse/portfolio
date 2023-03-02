import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export default function App({ Component, pageProps }: AppProps) {


     const themeOptions = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#252323',
            },
            secondary: {
                main: '#93C7BC',
            },
            background: {
                default: '#DCE4E5',
            },
            text: {
                primary: '#000105',
            },
        },
    })



    return (
        <ThemeProvider theme={themeOptions}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
