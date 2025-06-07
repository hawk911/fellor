"use client";
import React, { ReactNode, useState } from "react";
import {
    Box,
    MenuItem,
    Paper,
    Select,
    Typography,
} from "@mui/material";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LegendProps, ReferenceLine,
} from "recharts";
import Image from "next/image";
import { Props } from "recharts/types/component/DefaultLegendContent";
import { Assistant } from "next/font/google";

// Локальное подключение шрифта
const assistant = Assistant({
    subsets: ["latin"],
    weight: ["600"],
    display: "swap",
});

interface ChartData {
    name: string;
    interviewRate: number;
    acceptanceRate: number;
    rejectionRate: number;
}

const generateRandomData = (days: number): ChartData[] => {
    const data: ChartData[] = [];
    for (let i = 0; i < days; i++) {
        data.push({
            name: `${i + 1 < 10 ? "0" : ""}${i + 1}`, // Format as 01, 02, etc.
            interviewRate: Math.floor(Math.random() * 50) + 30,
            acceptanceRate: Math.floor(Math.random() * 30) + 20,
            rejectionRate: Math.floor(Math.random() * 40) + 10,
        });
    }
    return data;
};

const renderLegend = (props: Props): ReactNode => {
    const { payload } = props;
    return (
        <div
            className={assistant.className}
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "24px",
                paddingTop: "20px",
                fontWeight: 600,
                color: "#707479",
            }}
        >
            {payload?.map((entry, index) => (
                <div
                    key={`legend-${index}`}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <div
                        style={{
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            backgroundColor: entry.color,
                        }}
                    />
                    <span>{entry.value}</span>
                </div>
            ))}
        </div>
    );
};

const CustomExpandIcon = () => (
    <Box sx={{ width: 12, height: 7, display: "flex", alignItems: "center" }}>
        <Image
            src="/icons/arrows/greyDownIcon.svg"
            alt="arrow down"
            width={12}
            height={7}
        />
    </Box>
);

const HiringInsights = () => {
    const [timeframe, setTimeframe] = useState<number>(30);
    const [chartData, setChartData] = useState<ChartData[]>(
        generateRandomData(30)
    );

    const handleTimeframeChange = (e: any) => {
        const value = e.target.value as number;
        setTimeframe(value);
        setChartData(generateRandomData(value));
    };

    return (
        <Paper
            sx={{
                p: 3,
                border: "1px solid #EAECF0",
                borderRadius: "8px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: "14px",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "20px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        fontWeight: 600,
                    }}
                >
                    Hiring Insights
                </Typography>
                <Select
                    MenuProps={{
                        disableScrollLock: true,
                    }}
                    value={timeframe}
                    onChange={handleTimeframeChange}
                    IconComponent={CustomExpandIcon}
                    sx={{
                        color: "#6B7280",
                        fontSize: "14px",
                        fontFamily: "Inter,serif",
                        padding: '4px 8px',
                        '& .MuiSelect-icon': {
                            top: '50%',
                            transform: 'translateY(-50%)',
                            right: 8,
                            pointerEvents: 'none',
                        },
                        '& .MuiSelect-select': {
                            padding: '4px 0px 4px 4px',
                            paddingRight:"10px!important"
                        },
                    }}
                >
                    <MenuItem value={30}>Last 30 days</MenuItem>
                    <MenuItem value={7}>Last week</MenuItem>
                    <MenuItem value={1}>Current Day</MenuItem>
                </Select>
            </Box>
            <div className={assistant.className}>
                <ResponsiveContainer width="100%" height={320}>
                    <LineChart
                        data={chartData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                        {([0, 25, 50, 75, 100] as number[]).map((value) => (
                            <ReferenceLine
                                key={value}
                                y={value}
                                stroke="#0066FF26"
                                strokeDasharray="4 4"
                                strokeWidth={1}
                                ifOverflow="extendDomain"
                            />
                        ))}

                        <XAxis
                            dataKey="name"
                            tick={{
                                fontFamily: "Assistant",
                                fontWeight: 600,
                                fill: "#707479",
                                dy: 10
                            }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            type="number"
                            domain={[0, 100]}
                            ticks={[0, 25, 50, 75, 100]}
                            tick={{
                                fontFamily: "Assistant",
                                fontWeight: 600,
                                fill: "#707479",
                                dx: -10,
                            }}
                            tickFormatter={(value) => `${value}%`}
                            axisLine={false}
                            tickLine={false}
                            interval={0}
                        />

                        <Tooltip />
                        <Legend content={renderLegend} />

                        {/* Линии графика */}
                        <Line
                            type="monotone"
                            dataKey="interviewRate"
                            stroke="#22C55E"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 5 }}
                            name="Application to Interview Rate"
                        />
                        <Line
                            type="monotone"
                            dataKey="acceptanceRate"
                            stroke="#6F3FF1"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 5 }}
                            name="Offer Acceptance Rate"
                        />
                        <Line
                            type="monotone"
                            dataKey="rejectionRate"
                            stroke="#F97316"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 5 }}
                            name="Rejection Rate"
                        />
                    </LineChart>
                </ResponsiveContainer>


            </div>
        </Paper>
    );
};

export default HiringInsights;
