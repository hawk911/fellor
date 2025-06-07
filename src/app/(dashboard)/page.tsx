"use client";
import {Box, Grid, Paper} from "@mui/material";
import StatsCardGrid from "../components/StatsCardGrid/StatsCardGrid";
import UpcomingInterviews from "@/app/components/UpcomingInteriews/UpcomingInterviews";
import TodoList from "@/app/components/TodoList/TodoList";
import TopActiveJobs from "@/app/components/TopActiveJobs/TopActiveJobs";
import HiringInsights from "@/app/components/HiringInsights/HiringInsights";

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
