"use client";
import React from 'react';
import StatsCardGrid from "@/app/components/StatsCardGrid/StatsCardGrid";
import { Box, Grid } from '@mui/material';
import ManagePostings from "@/app/components/RecruiterComponents/ManagePostings/ManagePostings";
import ApplicationSources from "@/app/components/RecruiterComponents/JobManagement/ApplicationSources/ApplicationSources";
import TalentPipeline from "@/app/components/RecruiterComponents/JobManagement/TalentPipeline/TalentPipeline";

const Page = () => {
    return (
        <Box>
            <StatsCardGrid />
            <Grid container spacing={2}>
                <Grid  size={{xs:12}}>
                    <ManagePostings />
                </Grid>
                <Grid size={{xs:12,md:6}}>
                    <ApplicationSources />
                </Grid>
                <Grid  size={{xs:12,md:6}}>
                    <TalentPipeline />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Page;
