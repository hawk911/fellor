import { Paper, Typography } from "@mui/material";
import SourceRow from "@/app/components/styled/SourceRow/SourceRow";
import React from "react";

const TalentPipeline = () => {
    const rows = [
        { label: "Applied", progressLabel: 120, value: 70 },
        { label: "Shortlisted", progressLabel: 120, value: 20 },
        { label: "Interviews", progressLabel: 120, value: 10 },
        { label: "Offers", progressLabel: 120, value: 10 },
        { label: "Hires", progressLabel: 120, value: 10 },
    ];

    return (
        <Paper>
            <Typography
               variant={"h6"}
            >
                Talent Pipeline
            </Typography>
            {rows.map(({ label, progressLabel, value }) => (
                <SourceRow
                    key={label}
                    label={label}
                    progressLabel={progressLabel}
                    value={value}
                />
            ))}
        </Paper>
    );
};

export default TalentPipeline;
