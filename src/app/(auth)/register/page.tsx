'use client';
import Banner from "@/app/components/authForms/Banner/Banner";
import {Box} from "@mui/material";



export default function RegisterPage() {

    return (
        <Box
            sx={{
                display: 'flex',
                padding:"33px",
                flexDirection: { xs: 'column', md: 'row' }
            }}
        >
            <Banner/>
            <RegisterPage/>
        </Box>
    );
}