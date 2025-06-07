'use client';
import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();

    return (
        <Box
            className="inter"
            component="footer"
            sx={{
                borderTop: '1px solid #E5E7EB', // светло-серая граница
                backgroundColor: '#FCFCFD',
                px: { xs: 2, sm: 4 },
                py: { xs: 3, sm: 4 },
                display: 'flex',
                flexDirection:{xs:"column",lg:"row"},
                justifyContent:{xs:"flex-start",lg:"space-between"},
                alignItems:{xs:"center",md:"center"},
                gap: 2,
                textAlign: 'center',
            }}
        >
            {/* Фраза */}
            <Typography
                sx={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#717680',
                    lineHeight: '1.4',
                }}
            >
                Powered by Fellor — Recruiting with Bull’s Eye Precision © 2025
            </Typography>

            {/* Ссылки */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: { xs: 2, sm: 4 },
                }}
            >
                {['Privacy Policy', 'Terms of Service', 'Help'].map((label, index) => (
                    <Link
                        key={index}
                        href="#"
                        underline="none"
                        sx={{
                            fontSize: '13px',
                            fontWeight: 500,
                            letterSpacing: '-0.03em',
                            color: '#717680',
                            transition: 'color 0.2s ease',
                            '&:hover': {
                                color: theme.palette.text.primary,
                            },
                        }}
                    >
                        {label}
                    </Link>
                ))}
            </Box>
        </Box>
    );
};

export default Footer;
