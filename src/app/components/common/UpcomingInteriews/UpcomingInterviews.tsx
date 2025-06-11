import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import Image from 'next/image';
import CardHeader from "@/app/components/styled/CardHeader/CardHeader";

interface Interview {
    date: string;
    time: string;
    name: string;
    position: string;
    type: 'video' | 'onsite';
}

const UpcomingInterviews = () => {
    const interviews: Interview[] = [
        {
            date: 'Today',
            time: '2:00 PM',
            name: 'John Smith',
            position: 'Senior Developer',
            type: 'video'
        },
        {
            date: 'Tomorrow',
            time: '10:00 AM',
            name: 'Emily Brown',
            position: 'UX Designer',
            type: 'onsite'
        },
        {
            date: 'Tomorrow',
            time: '10:00 AM',
            name: 'Emily Brown',
            position: 'UX Designer',
            type: 'onsite'
        }
    ];

    return (
        <Paper>
            <CardHeader title={"Upcoming Interviews"} href={"#"} />
            {interviews.map((interview, index) => (
                <Box key={`${interview.name}-${index}`} sx={{ mb: '10px' }}>
                    <Box sx={{
                        borderLeft: '4px solid #6F3FF1',
                        backgroundColor: '#F8F8F9',
                        borderRadius: '0 8px 8px 0',
                        p: '16px',
                        alignItems: 'center'
                    }}>
                        <Typography
                            variant={"body2"}
                            sx={{
                                lineHeight: '100%',
                                letterSpacing: '',
                                color: '#000',
                                mb: '8px'
                            }}
                        >
                            {interview.date}, {interview.time}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography
                                variant={"body1"}
                                sx={{
                                    fontFamily: 'ZangeziSans09, sans-serif',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    mb: '15px'
                                }}
                            >
                                {interview.name} - {interview.position}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Image
                                    src={interview.type === 'video'
                                        ? '/videoIcon.png'
                                        : '/buildingIcon.png'}
                                    alt={interview.type === 'video'
                                        ? 'Video Interview'
                                        : 'On-site Interview'}
                                    width={interview.type === 'video' ? 18 : 12}
                                    height={16}
                                />
                                <Typography
                                    variant={"body2"}
                                    sx={{
                                        lineHeight: '100%',
                                        letterSpacing: '0%',
                                        color: '#000000'
                                    }}
                                >
                                    {interview.type === 'video' ? 'Video Interview' : 'On-site Interview'}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Paper>
    );
};

export default UpcomingInterviews;