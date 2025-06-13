import { extendTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

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
        h6: {
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '0',
            fontWeight: 600,
            marginBottom:"15px",
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
                    color: "#fff",
                },
                textPrimary: {
                    color: "#fff",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius:"12px",
                    padding: '24px',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0px 1px 2px 0px #0000000D',
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
                    color: "#D4D7DD",
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
