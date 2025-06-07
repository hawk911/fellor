'use client';
import Banner from "@/app/components/authForms/Banner/Banner";
import LoginForm from "@/app/components/authForms/LoginForm/LoginForm";
import {Box} from "@mui/material";



export default function LoginPage() {

    return (
        <Box
            sx={{
                display: 'flex',
                padding:"33px",
                flexDirection: { xs: 'column', md: 'row' }
            }}
        >
            <Banner/>
           <LoginForm/>
        </Box>
    );
}