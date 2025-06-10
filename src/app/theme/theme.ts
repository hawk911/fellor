// app/theme/theme.ts
import { extendTheme } from '@mui/material/styles'; // No longer experimental
import { Inter, Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

declare module '@mui/material/styles' {
    interface Palette {
        gray: {
            200: string;
            300: string;
            500: string;
            600:string;
            700: string;
            800: string;
            900:string;
        };
    }
    interface PaletteOptions {
        gray?: {
            200: string;
            300: string;
            500: string;
            600:string;
            700: string;
            800: string;
            900:string
        };
    }
}

const theme = extendTheme({
    typography: {
        fontFamily: inter.style.fontFamily,
        fontSize: 14,
        h1: {
            fontWeight: 700,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: inter.style.fontFamily,
                    fontWeight: 600,
                    fontSize:14,
                    textTransform: "none",
                },
                containedPrimary: {
                    color: "#fff", // белый цвет текста для кнопок с color="primary" и variant="contained"
                },
                textPrimary: {
                    color: "#fff", // белый текст для text кнопок с color="primary" (если нужно)
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "secondary.main",
                    },
                },

            },
        },

        MuiSelect: {
            styleOverrides: {
                outlined: {
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "secondary.main",
                    },
                },
            },
        },

        MuiCheckbox: {
            defaultProps: {
                color: "secondary",
            },
            styleOverrides: {
                root: {
                    color: "#D4D7DD", // gray.300 default color
                    "&.Mui-checked": {
                        color: "secondary.main",
                    },
                },
            },
        },

        MuiRadio: {
            defaultProps: {
                color: "secondary",
            },
            styleOverrides: {
                root: {
                    color: "#D4D7DD",
                    "&.Mui-checked": {
                        color: "secondary.main",
                    },
                },
            },
        },
        MuiSwitch: {
            defaultProps: {
                color: "secondary",
            },
            styleOverrides: {
                switchBase: {
                    color: "#D4D7DD",
                    "&.Mui-checked": {
                        color: "secondary.main",
                    },
                },
                track: {
                    backgroundColor: "#D4D7DD",
                    ".Mui-checked &": {
                        backgroundColor: "secondary.main",
                    },
                },
            },
        },
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "#F97316",
                    light: "#FFEDD5",
                },
                secondary: {
                    main: "#7D5AE2",
                },
                gray: {
                    200: "#E4E4E5",
                    300: "#D4D7DD",
                    500: "#727885",
                    600:"#525B67",
                    700: "#3E4654",
                    800: "#272E39",
                    900:"#151B28",
                },
                text: {},
            } as any,
        },
    },
});

export default theme;
