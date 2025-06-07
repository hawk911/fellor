import React from 'react';
import { Typography, Paper } from '@mui/material';
import SourceRow from "@/app/components/styled/SourceRow/SourceRow";

const ApplicationSources = () => {
    const sources = [
        { icon: "/icons/linkedIn.svg", label: "LinkedIn", value: 70, prefix: "%" },
        { icon: "/icons/websiteGrey.svg", label: "Website", value: 20, prefix: "%" },
        { icon: "/icons/groupGrey.svg", label: "Referrals", value: 10, prefix: "%" },
    ];

    return (
        <Paper sx={{ p: 3, borderRadius: '12px' }}>
            <Typography
                sx={{
                    fontSize: '20px',
                    lineHeight: '100%',
                    fontWeight: 600,
                    mb: 3,
                }}
            >
                Application Sources
            </Typography>
            {sources.map(({ icon, label, value, prefix }) => (
                <SourceRow
                    key={label}
                    icon={icon}
                    label={label}
                    value={value}
                    prefix={prefix}
                />
            ))}
        </Paper>
    );
};

export default ApplicationSources;
