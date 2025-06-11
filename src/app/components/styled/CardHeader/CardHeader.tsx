import React from 'react';
import {Box, Link as MuiLink, Typography} from "@mui/material";
import Link from "next/link";
interface CardHeaderProps{
    title:string,
    href:string
}
const CardHeader:React.FC<CardHeaderProps> = ({title,href}) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '14px'
        }}>
            <Typography
                sx={{mb:0}}
                variant={"h6"}
            >
                {title}
            </Typography>
            <MuiLink
                component={Link}
                href={href}
                sx={{
                    color: '#727885',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0%',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                }}
            >
                See all
            </MuiLink>
        </Box>
    );
};

export default CardHeader;