import React from 'react';
import {
    Box,
    Button,
    Divider,
    FormControlLabel,
    Link as MuiLink,
    Typography,
    useTheme
} from "@mui/material";
import Link from "next/link";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import SocialButtons from "@/app/components/common/SocialButtons/SocialButtons";
import FormInput from "@/app/components/styled/FormInput/FormInput";
import CustomCheckbox from "@/app/components/styled/CustomCheckbox/CustomCheckbox";

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    remember: z.boolean().optional()
});

type LoginFormData = z.infer<typeof loginSchema>;


const fields = [
    {
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Email',
        name: 'email'
    },
    {
        id: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Password',
        name: 'password'
    }
];

const LoginForm = () => {
    const theme = useTheme();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            remember: false
        }
    });

    const onSubmit: SubmitHandler<LoginFormData> = (data: any) => {
        console.log('RegisterForm submitted:', data);
    };

    return (
        <Box
            sx={{
                width: { xs: '100%', md: '50%' },
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{
                    maxWidth: 400,
                    width: '100%'
                }}
            >
                <Typography variant="h5" component="h2" gutterBottom sx={{
                    fontWeight: 700, textAlign: "center"
                }}>
                    Let's Find Your Fit
                </Typography>
                {fields.map((field) => (
                    <FormInput
                        key={field.id}
                        id={field.id}
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        error={errors[field.name as keyof typeof errors]?.message}
                        registerProps={register(field.name as keyof LoginFormData)}
                    />
                ))}

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <FormControlLabel
                        sx={{
                            '& .MuiFormControlLabel-label': {
                                fontFamily: '"Inter", sans-serif',
                                fontWeight: 400,
                                color: theme.palette.gray[500],
                                fontSize: '16px'
                            }
                        }}
                        control={<CustomCheckbox {...register('remember')} />}
                        label="Remember me"
                    />
                    <MuiLink
                        component={Link}
                        href="/resetPassword"
                        variant="body2"
                        sx={{
                            color: '#694BC0',
                            fontWeight: 600,
                            textDecoration: "none",
                            lineHeight: "24px",
                            fontSize: "16px"
                        }}
                    >
                        Forgot password?
                    </MuiLink>
                </Box>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3,
                        mb: 2,
                        textTransform: "none",
                        bgcolor: theme.palette.primary.main,
                        '&:hover': { bgcolor: '#e56712' },
                        borderRadius: '8px',
                        fontSize: "14px",
                    }}
                >
                    Log in
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
                    Don't have an account?{' '}
                    <MuiLink sx={{
                        fontSize: 16,
                        fontWeight: 600,
                        textDecoration: "none",
                        color: '#694BC0',
                        lineHeight: "24px"
                    }} component={Link} href="/register" variant="body2">
                        Sign Up
                    </MuiLink>
                </Typography>
            </Box>
        </Box>
    );
};

export default LoginForm;
