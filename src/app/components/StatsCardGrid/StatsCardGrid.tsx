import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import Image from 'next/image';

const cardData = [
    {
        title: 'Total Candidates',
        current: 120,
        previous: 115,
    },
    {
        title: 'Active Jobs',
        current: 8,
        previous: 13,
    },
    {
        title: 'Interviews This Week',
        current: 26,
        previous: 26,
    },
    {
        title: 'Time to Hire',
        current: 32,
        previous: 29,
    },
];

const StatsCardGrid = () => {
    return (
        <Box
            className="inter"
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '6px',
                mb:2,
                width: '100%',
            }}
        >
            {cardData.map(({ title, current, previous }) => {
                const difference = current - previous;
                const isIncreased = difference > 0;
                const isSame = difference === 0;
                const iconSrc = isSame
                    ? null
                    : isIncreased
                        ? '/icons/arrows/greenArrowUp.png'
                        : '/icons/arrows/redArrowDown.png';
                const deltaColor = isSame
                    ? '#717680' : isIncreased ? '#22C55E' : '#F32828';

                return (
                    <Card
                        key={title}
                        sx={{
                            flex: '1 1 calc(25% - 6px)',
                            minWidth: '240px', // fallback for very small screens
                            border: '1px solid #F3F4F6',
                            borderRadius: '12px',
                            padding: '25px',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '16px',
                                marginBottom: '5px',
                            }}
                        >
                            {title}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: '24px',
                                fontWeight: 700,
                                color: '#1F2937',
                                marginBottom: '5px',
                            }}
                        >
                            {current}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            {!isSame && (
                                <Image
                                    src={iconSrc!}
                                    alt="change indicator"
                                    width={10.5}
                                    height={14}
                                />
                            )}
                            <Typography
                                sx={{
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '140%',
                                    color: "#717680",
                                }}
                            >
                                {isSame ? "The same as last month":
                                    <>
                                        <span style={{color:deltaColor}}>{Math.abs(difference)} {isIncreased ? 'more' : 'fewer' } </span>
                                        than last month
                                    </>}
                            </Typography>
                        </Box>
                    </Card>
                );
            })}
        </Box>
    );
};

export default StatsCardGrid;
