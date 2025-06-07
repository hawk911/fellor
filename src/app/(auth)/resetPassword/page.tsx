'use client';
import Banner from "@/app/components/authForms/Banner/Banner";
import {Box} from "@mui/material";
import ResetPassword from "@/app/components/authForms/ResetPassword/ResetPassword";

export default function ResetPasswordPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                padding:"33px",
                flexDirection: { xs: 'column', md: 'row' }
            }}
        >
            <Banner/>
            <ResetPassword/>
        </Box>)
}