// app/theme/theme.ts
import { extendTheme } from '@mui/material/styles'; // No longer experimental
import { Inter, Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
declare module '@mui/material/styles' {
    interface Palette {
        gray: {
            200:string
            300: string;
            500: string;
            700: string;
            800:string;
        };
    }

    interface PaletteOptions {
        gray?: {
            200:string,
            300: string;
            500: string;
            700: string;
            800:string;
        };
    }
}

const theme = extendTheme({
    typography: {
        fontFamily: inter.style.fontFamily,
        fontSize:14,
        h1: {
            fontWeight: 700,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color:"white",
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 600,
                    textTransform: 'none',
                },
            },
        },
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#F97316',
                },
                secondary: {
                    main: '#FFEDD5',
                },
                gray: {
                    200:"#E4E4E5",
                    300: '#D4D7DD',
                    500: '#727885',
                    700: '#3E4654',
                    800:"#272E39",
                },
              text:{
              },
            } as any,
        },
    },
});

export default theme;