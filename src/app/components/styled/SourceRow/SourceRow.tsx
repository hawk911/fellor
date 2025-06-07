import {Box, LinearProgress, Typography} from "@mui/material";
import React from "react";
import {styled} from "@mui/system";
const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    width: 192,
    borderRadius: 4,
    backgroundColor: '#E6E5E9',
    [`& .MuiLinearProgress-bar`]: {
        backgroundColor: '#5E3EBA',
        borderRadius: 4,
    },
}));

const SourceRow = ({ icon, label, progressLabel, value,prefix }: { icon?: string;
    label: string; value: number,prefix?:string,progressLabel?:number}) => (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Box display="flex" alignItems="center" gap={1.5} width={150}>
            {icon && <img src={icon} alt={label} width={20} height={20} />}
            <Typography fontSize={16}>{label}</Typography>
        </Box>
        <CustomLinearProgress variant="determinate" value={value} />
        <Typography fontSize={14} color="#4B5563" width={30} textAlign="right">
            {progressLabel ? progressLabel: <>{value}%</>   }
        </Typography>
    </Box>
);
export default SourceRow