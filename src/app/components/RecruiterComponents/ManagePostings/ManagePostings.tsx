import React from 'react';
import {Box, Card, Link as MuiLink, Paper, Typography} from "@mui/material";
import Link from "next/link";
import JobTable from "./JobTable/JobTable";

const ManagePostings = () => {
    return (
        <Card sx={{p:3,}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: '14px'
            }}>
                <Typography
                    sx={{
                        fontSize: '20px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        fontWeight: 600
                    }}
                >
                    Upcoming Interviews
                </Typography>
                <MuiLink
                    component={Link}
                    href="#"
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
            <JobTable/>
        </Card>
    );
};

export default ManagePostings;