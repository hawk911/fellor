import React from "react";
import {Box, Checkbox, useTheme} from "@mui/material";

const CustomCheckbox = (props:any) => {
    const theme = useTheme();

    return (
        <Checkbox
            {...props}
            icon={
                <Box
                    sx={{
                        width: 20,
                        height: 20,
                        border: `1px solid ${theme.palette.gray[300]}`,
                        borderRadius: '6px',
                        backgroundColor: '#fff',
                    }}
                />
            }
            checkedIcon={
                <Box
                    sx={{
                        width: 20,
                        height: 20,
                        border: `1px solid ${theme.palette.gray[300]}`,
                        borderRadius: '6px',
                        backgroundColor: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            width: 6,
                            height: 10,
                            border: 'solid white',
                            borderWidth: '0 2px 2px 0',
                            transform: 'rotate(45deg)',
                            display: 'inline-block',
                        }}
                    />
                </Box>
            }
        />
    );
};

export default CustomCheckbox