"use client";
import React, { ReactNode, useState } from "react";
import {
    Box, FormControl,
    MenuItem,
    Paper,
    Typography,
} from "@mui/material";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
     ReferenceLine,
} from "recharts";
import { Props } from "recharts/types/component/DefaultLegendContent";
import { Assistant } from "next/font/google";
import StyledSelect from "@/app/components/styled/StyledSelect/StyledSelect";

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
        <Paper>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: "14px",
                }}
            >
                <Typography
                    variant={"h6"}
                >
                    Hiring Insights
                </Typography>
                <FormControl variant="outlined"
                             size={"small"} sx={{minWidth:120}}>
                    <StyledSelect
                        labelId="type"
                        value={timeframe}
                        sx={{color:"#6B7280"}}
                        onChange={handleTimeframeChange}
                    >
                        <MenuItem value={30}>Last 30 days</MenuItem>
                        <MenuItem value={7}>Last week</MenuItem>
                        <MenuItem value={1}>Current Day</MenuItem>
                    </StyledSelect>
                </FormControl>

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
