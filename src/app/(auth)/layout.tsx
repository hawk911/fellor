import React from 'react';
import Banner from "@/app/components/authForms/Banner/Banner";
import {Box} from "@mui/material";
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                display: 'flex',
                padding:"33px",
                flexDirection: { xs: 'column', md: 'row' }
            }}
        >
            <Banner/>
            {children}
        </Box>
    );
}