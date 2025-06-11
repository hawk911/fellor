import React from 'react';
import {Box, LinearProgress, Paper, Typography} from "@mui/material";
import CardHeader from "@/app/components/styled/CardHeader/CardHeader";
const TopActiveJobs = () => {
    const activeBlocks=[{
        title:"Senior developer",
        progress:73,
        candidatesCount:32,
        inPipeline:4,
        id:1,
        daysOpen:12
    },
        {
            title:"Cleaner",
            progress:73,
            candidatesCount:32,
            inPipeline:4,
            daysOpen:12,
            id:2
        }
    ]
    return (
        <Paper className={"inter"} sx={{
            border:"1px solid #EAECF0",p:"24px"
        }}>
            <CardHeader title={"Top Active Jobs"} href={"#"}   />
            <Box display="flex"
                 flexDirection="column"
                 gap={2}>
                {activeBlocks.map(el=> <Box display="flex"
                                              key={el.id}
                                              border="1px solid #E5E7EB"
                                              borderRadius={"8px"}
                                              p={3}
                                              justifyContent="space-between" alignItems="center">
                    <Box>
                        <Typography fontSize={16} fontWeight={500} color="#1F2937">
                            {el.title}
                        </Typography>
                        <Typography fontSize={14} color="#4B5563">
                            {el.candidatesCount} candidates   · {el.inPipeline} in pipeline
                        </Typography>
                    </Box>
                    <Box>
                        <Typography textAlign={"right"} fontSize={14} fontWeight={500} color="#6F3FF1">
                            {el.daysOpen} days open
                        </Typography>
                        <Box display="flex" alignItems="center" gap={2}>
                            <Box flexGrow={1}>
                                <LinearProgress
                                    variant="determinate"
                                    value={el.progress}
                                    sx={{
                                        height: 8,
                                        width:128,
                                        borderRadius: 4,
                                        backgroundColor: '#E6E5E9',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#6F3FF1',
                                        },
                                    }}
                                />
                            </Box>
                            <Typography fontSize={14} color="#4B5563" whiteSpace="nowrap">
                                {el.progress}%
                            </Typography>
                        </Box>
                    </Box>
                </Box>)}
            </Box>
        </Paper>
    );
};

export default TopActiveJobs;