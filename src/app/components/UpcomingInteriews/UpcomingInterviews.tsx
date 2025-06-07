import React from 'react';
import { Paper, Typography, Box, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

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
        <Paper
            className={"inter"}
            elevation={0}
            sx={{
                p: '24px',
                border: '1px solid #EAECF0',
                borderRadius: '8px'
            }}
        >
            {/* Header */}
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

            {/* Interview Blocks */}
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
                            sx={{
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                color: '#000',
                                mb: '8px'
                            }}
                        >
                            {interview.date}, {interview.time}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography
                                sx={{
                                    fontFamily: 'ZangeziSans09, sans-serif',
                                    fontWeight: 400,
                                    fontSize: '16px',
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
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '14px',
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