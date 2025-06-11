import React from 'react';
import Paper from "@mui/material/Paper";
import JobTable from "./JobTable/JobTable";
import CardHeader from "@/app/components/styled/CardHeader/CardHeader";

const ManagePostings = () => {
    return (
        <Paper>
            <CardHeader title={"Manage Postings"} href={"#"}   />
            <JobTable/>
        </Paper>
    );
};

export default ManagePostings;