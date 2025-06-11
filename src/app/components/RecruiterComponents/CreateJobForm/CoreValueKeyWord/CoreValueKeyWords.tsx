import React from 'react';
import {Box, Typography} from "@mui/material";
import CoreValueForm from "./CoreValueForm/CoreValueForm";
const CoreValueKeyWords = () => {
    return (
        <div>
            <Box mb={2}>
                <Typography variant={"h6"} sx={{fontWeight:500,color:"#374151",mb:1}}>
                    Step 1: Core Value Keywords
                    <span style={{fontWeight:300}}>(Highly Suggested)</span>
                </Typography>
                <Typography sx={{fontStyle:"Italic",lineHeight:"24px",fontSize:14,fontWeight:300}}>
                    These keywords match candidates beyond skills — based on personality and fit.
                    Which company core values matter most for success in this role?
                    Choose up to 3 keywords per dimension. </Typography>
            </Box>
            <CoreValueForm/>

        </div>
    );
};

export default CoreValueKeyWords;