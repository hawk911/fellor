"use client";
import React, { useState } from "react";
import { Box, MenuItem, InputBase, InputLabel, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StyledSelect from "@/app/components/styled/StyledSelect/StyledSelect";

export default function TableFilters() {
    // состояния для контролируемых селектов
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [recruiter, setRecruiter] = useState("");

    return (
        <Box
            display="flex"
            justifyContent={"space-between"}
            flexWrap="wrap"
            gap={2}
            mb={3}
            alignItems="center"
        >
            {/* 🔍 Поиск */}
            <Box
                sx={{
                    flexGrow: 1,
                    maxWidth: 400,
                    position: "relative",
                    backgroundColor: "#FBFBFB",
                    borderRadius: 2,
                    border: "1px solid #D1D5DB",
                    padding: "8px 12px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <SearchIcon sx={{ color: "#9CA3AF", mr: 1 }} />
                <InputBase
                    size={"small"}
                    placeholder="Search jobs..."
                    sx={{ flexGrow: 1, fontSize: 14,padding: "0px 12px" }}
                    inputProps={{ "aria-label": "search jobs" }}
                />
            </Box>

            <Box display={"flex"} gap={"10px"}>
                <FormControl sx={{ minWidth: 95, color: "black !important" }} size="small" variant="outlined">
                    <InputLabel sx={{ color: "black" }} id="date-label">
                        Date
                    </InputLabel>
                    <StyledSelect
                        sx={{ color: "black" }}
                        labelId="date-label"
                        value={date}
                        label="Date"
                        size="small"
                        onChange={(e) => setDate(e.target.value as string)}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="Last 7 days">Last 7 days</MenuItem>
                        <MenuItem value="Last 30 days">Last 30 days</MenuItem>
                        <MenuItem value="This year">This year</MenuItem>
                    </StyledSelect>
                </FormControl>

                <FormControl sx={{ minWidth: 105, color: "black" }} size="small" variant="outlined">
                    <InputLabel sx={{ color: "black" }} id="status-label">
                        Status
                    </InputLabel>
                    <StyledSelect
                        labelId="status-label"
                        value={status}
                        label="Status"
                        size="small"
                        onChange={(e) => setStatus(e.target.value as string)}
                    >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="Live">Live</MenuItem>
                        <MenuItem value="Ready to post">Ready to post</MenuItem>
                        <MenuItem value="Archived">Archived</MenuItem>
                    </StyledSelect>
                </FormControl>

                <FormControl sx={{ minWidth: 180, color: "black" }} size="small" variant="outlined">
                    <InputLabel sx={{ color: "black" }} id="recruiter-label">
                        Assigned recruiter
                    </InputLabel>
                    <StyledSelect
                        sx={{ color: "black" }}
                        labelId="recruiter-label"
                        value={recruiter}
                        label="Assigned recruiter"
                        size="small"
                        onChange={(e) => setRecruiter(e.target.value as string)}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="Alice">Alice</MenuItem>
                        <MenuItem value="Bob">Bob</MenuItem>
                        <MenuItem value="Charlie">Charlie</MenuItem>
                    </StyledSelect>
                </FormControl>
            </Box>
        </Box>
    );
}
