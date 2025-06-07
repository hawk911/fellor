import { Box, TextField, Typography, useTheme } from '@mui/material';

interface FormInputProps {
    id: string;
    label: string;
    type?: string;
    placeholder?: string;
    error?: string;
    registerProps: any; // react-hook-form register()
}

const FormInput = ({ id, label, type = 'text', placeholder, error, registerProps }: FormInputProps) => {
    const theme = useTheme();
    return (
        <Box sx={{ mb: 1 }}>
            <Typography
                component="label"
                htmlFor={id}
                sx={{
                    display: 'block',
                    color: theme.palette.gray[700],
                    fontWeight: 600,
                    fontSize: '16px',
                    mb: 1,
                }}
            >
                {label}
            </Typography>

            <TextField
                fullWidth
                id={id}
                type={type}
                placeholder={placeholder}
                error={!!error}
                helperText={error}
                {...registerProps}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        height: 48,
                        borderRadius: '8px',
                        '& fieldset': { border: `1px solid ${theme.palette.gray[300]}` },
                    },
                }}
            />
        </Box>
    );
};

export default FormInput;
