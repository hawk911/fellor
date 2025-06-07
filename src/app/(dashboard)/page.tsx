"use client";
import {Box, Grid} from "@mui/material";
import StatsCardGrid from "../components/StatsCardGrid/StatsCardGrid";
import UpcomingInterviews from "@/app/components/UpcomingInteriews/UpcomingInterviews";
import TodoList from "@/app/components/RecruiterComponents/TodoList/TodoList";
import TopActiveJobs from "@/app/components/RecruiterComponents/TopActiveJobs/TopActiveJobs";
import HiringInsights from "@/app/components/RecruiterComponents/HiringInsights/HiringInsights";

export default function Home() {
  return (
    <Box>
      <StatsCardGrid/>
        <Grid sx={{mt:2}} container spacing={2}>
            <Grid size={{xs:12,lg:8}} >
              <HiringInsights/>
            </Grid>
            <Grid size={{xs:12,lg:4}}>
                <UpcomingInterviews/>
            </Grid>
            <Grid size={{xs:12,lg:8}}>
                <TopActiveJobs/>
            </Grid>
            <Grid size={{xs:12,lg:4}}>
                <TodoList/>
            </Grid>
        </Grid>
    </Box>
  );
}
