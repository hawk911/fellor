import React, {useState} from 'react';
import {
    Box,
    Chip,
    IconButton,
    List,
    ListItemButton, ListItemText,
    Paper,
    Popover,
    Table, TableBody,
    TableCell, TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const statusStyles: Record<string, { color: string; background: string }> = {
    Live: { color: "#065F46", background: "#DCFCE7" },
    "Ready to post": { color: "#F97316", background: "#FFEDD5" },
    Archived: { color: "#9333EA", background: "#E2DAF7" },
};


interface TableComponentProps{
    currentRows:{title:string,dept:string,status:string,precision:string,time:string,pipeline:string}[]
}
const TableComponent:React.FC<TableComponentProps> = ({currentRows}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(index);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
    };
    const open = Boolean(anchorEl);
    return (
        <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
            <Table>
                <TableHead sx={{ backgroundColor: "#F9FAFB" }}>
                    <TableRow>
                        {["Job Title", "Status", "Matching Precision", "Time-to-Hire", "Candidates in Pipeline", "Actions"].map((head) => (
                            <TableCell
                                key={head}
                                sx={{ color: "#6B7280", fontWeight: 600 }}
                            >
                                {head}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentRows.map((job, index) => (
                        <TableRow key={index} hover>
                            <TableCell>
                                <div style={{ fontWeight: 500 }}>{job.title}</div>
                                <div style={{ fontSize: 12, color: "#6B7280" }}>{job.dept}</div>
                            </TableCell>
                            <TableCell>
                                <Chip
                                    label={job.status}
                                    size="small"
                                    sx={{
                                        color: statusStyles[job.status].color,
                                        backgroundColor: statusStyles[job.status].background,
                                        fontWeight: 500,
                                    }}
                                />
                            </TableCell>
                            <TableCell>{job.precision}</TableCell>
                            <TableCell>{job.time}</TableCell>
                            <TableCell>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Box
                                        sx={{
                                            width: 120,
                                            height: 6,
                                            backgroundColor: '#E6E5E9',
                                            borderRadius: 3,
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: `${(parseInt(job.pipeline.split('/')[0]) / parseInt(job.pipeline.split('/')[1])) * 100}%`,
                                                height: '100%',
                                                backgroundColor: '#78708F',
                                                borderRadius: 3,
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{ fontSize: 12, color: '#6B7280' }}>{job.pipeline}</Box>
                                </Box>
                            </TableCell>
                            <TableCell align="right">
                                <IconButton onClick={(e) => handleClick(e, index)}>
                                    <MoreVertIcon fontSize="small" />
                                </IconButton>
                                {selectedRow === index && (
                                    <Popover
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "right",
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        disableScrollLock
                                    >
                                        <List dense sx={{ minWidth: 150, color: "#6B7280" }}>
                                            <ListItemButton><ListItemText primary="Preview" /></ListItemButton>
                                            <ListItemButton><ListItemText primary="Edit" /></ListItemButton>
                                            <ListItemButton><ListItemText primary="Post" /></ListItemButton>
                                            <ListItemButton><ListItemText primary="Archive" /></ListItemButton>
                                            <ListItemButton sx={{ color: "error.main" }}>
                                                <ListItemText primary="Delete" />
                                            </ListItemButton>
                                        </List>
                                    </Popover>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableComponent;