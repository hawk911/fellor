import React from 'react';
import {
    Box,
    Button,
    Typography,
    useTheme
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/app/components/styled/FormInput/FormInput';

const resetSchema = z.object({
    email: z.string().email('Invalid email address'),
});

type ResetFormData = z.infer<typeof resetSchema>;

const fields = [
    {
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
        name: 'email',
    },
];

const ResetPasswordForm = () => {
    const theme = useTheme();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetFormData>({
        resolver: zodResolver(resetSchema),
    });

    const onSubmit: SubmitHandler<ResetFormData> = (data) => {
        console.log('Reset password request:', data);
        // Send reset link via API here
    };

    return (
        <Box
            sx={{
                width: { xs: '100%', md: '50%' },
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{ maxWidth: 400, width: '100%' }}
            >
                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: 700, textAlign: 'center' }}
                >
                    Reset Your Password
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ textAlign: 'center', mb: 3, color: theme.palette.gray[500] }}
                >
                    Enter your email and we'll send you a reset link.
                </Typography>

                {fields.map((field) => (
                    <FormInput
                        key={field.id}
                        id={field.id}
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        error={errors[field.name as keyof typeof errors]?.message}
                        registerProps={register(field.name as keyof ResetFormData)}
                    />
                ))}

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 2,
                        textTransform: 'none',
                        bgcolor: theme.palette.primary.main,
                        '&:hover': { bgcolor: '#e56712' },
                        borderRadius: '8px',
                        fontSize: '14px',
                    }}
                >
                    Send Reset Link
                </Button>
            </Box>
        </Box>
    );
};

export default ResetPasswordForm;
