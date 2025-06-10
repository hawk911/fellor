import { Box, TextField, Typography, useTheme, TextFieldProps } from "@mui/material";
import React, {useId} from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps extends Omit<TextFieldProps, | 'label' | 'error' | 'type' | 'placeholder' | 'multiline' | 'rows'> {
    label?: string;
    type?: string;
    placeholder?: string;
    error?: string;
    registerProps: UseFormRegisterReturn;
    multiline?: boolean;
    rows?: number;
}

const FormInput = ({
                       label,
                       type = 'text',
                       placeholder,
                       error,
                       registerProps,
                       multiline = false,
                       rows = 4,
                       ...rest
                   }: FormInputProps) => {
    const theme = useTheme();
    const id=useId()
    return (
        <Box sx={{ mb: 2 }}>
            {label && <Typography
                component="label"
                htmlFor={id}
                sx={{
                    display: 'block',
                    color: '#374151',
                    fontWeight: 500,
                    fontSize: '16px',
                    mb: 1,
                }}
            >
                {label}
            </Typography>}

            <TextField
                fullWidth
                id={id}
                type={type}
                placeholder={placeholder}
                error={!!error}
                helperText={error}
                multiline={multiline}
                rows={rows}
                {...registerProps}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        height: multiline ? 'auto' : 40,
                        borderRadius: '8px',
                        backgroundColor: '#fff',
                        '& fieldset': {
                            border: '1px solid #D1D5DB',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: theme.palette.secondary.main,
                        },
                        '& input, & textarea': {
                            color: '#ADAEBC',
                        },
                    },
                }}
                {...rest}
            />
        </Box>
    );
};

export default FormInput;
