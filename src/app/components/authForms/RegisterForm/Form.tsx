import React from 'react';
import {
    Box,
    Button,
    Divider,
    FormControlLabel,
    Link as MuiLink,
    Typography,
    useTheme
} from '@mui/material';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormInput from '@/app/components/styled/FormInput/FormInput';
import CustomCheckbox from '@/app/components/styled/CustomCheckbox/CustomCheckbox';
import SocialButtons from "@/app/common/SocialButtons/SocialButtons";

const registerSchema = z.object({
    fullName: z.string().min(2, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    repeatPassword: z.string().min(6, 'Please repeat your password'),
    agree: z.boolean().refine(val => val === true, {
        message: 'You must agree to the terms and conditions',
    }),
}).refine(data => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const fields = [
    { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Your full name', name: 'fullName' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Email', name: 'email' },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'Password', name: 'password' },
    { id: 'repeatPassword', label: 'Repeat Password', type: 'password', placeholder: 'Repeat password', name: 'repeatPassword' },
];

const RegisterForm = () => {
    const theme = useTheme();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit: SubmitHandler<RegisterFormData> = data => {
        console.log('Register data:', data);
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
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center' }}>
                    Create an Account
                </Typography>

                {fields.map(field => (
                    <FormInput
                        key={field.id}
                        id={field.id}
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        error={errors[field.name as keyof typeof errors]?.message}
                        registerProps={register(field.name as keyof RegisterFormData)}
                    />
                ))}

                <FormControlLabel
                    sx={{
                        '& .MuiFormControlLabel-label': {
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 400,
                            color: theme.palette.gray[500],
                            fontSize: '16px',
                        },
                        mb: 2,
                    }}
                    control={<CustomCheckbox {...register('agree')} />}
                    label="I agree to the terms and conditions"
                />
                {errors.agree && (
                    <Typography sx={{ color: 'error.main', fontSize: 13, mb: 2 }}>
                        {errors.agree.message}
                    </Typography>
                )}

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 1,
                        mb: 2,
                        textTransform: 'none',
                        bgcolor: theme.palette.primary.main,
                        '&:hover': { bgcolor: '#e56712' },
                        borderRadius: '8px',
                        fontSize: '14px',
                    }}
                >
                    Sign Up
                </Button>

                <Divider sx={{ my: 3 }}>Or</Divider>

                <SocialButtons />

                <Typography variant="body2" sx={{
                    mt: 3,
                    color: theme.palette.gray[500],
                    fontWeight: 400,
                    fontSize: "16px",
                    textAlign: 'center'
                }}>
                    Already have an account?{' '}
                    <MuiLink sx={{
                        fontSize: 16,
                        fontWeight: 600,
                        textDecoration: "none",
                        color: '#694BC0',
                        lineHeight: "24px"
                    }} component={Link} href="/login" variant="body2">
                        Log in
                    </MuiLink>
                </Typography>
            </Box>
        </Box>
    );
};

export default RegisterForm;
