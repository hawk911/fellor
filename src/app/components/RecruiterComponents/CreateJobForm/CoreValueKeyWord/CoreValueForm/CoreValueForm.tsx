"use client";
import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import FormInput from '../../FormInput/FormInput';

const TITLES = [
    'Mission and Vision Alignment',
    'Growth and Development Opportunities',
    'Employee Experience and Satisfaction',
    'Predicting Job Performance',
    'Predicting Cultural Fit',
    'Hard Skills',
];

type FormValues = {
    [key: string]: string; // dynamic key names based on title
};

const CoreValueForm = () => {
    const { handleSubmit, register } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log('Form Values:', data);
        // handle API call or next step
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                {TITLES.map((title, index) => (
                    <Grid size={{xs:12}} key={index}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid size={{xs:12,sm:2.5}}>
                                <Typography fontWeight={500} fontSize={14}
                                            color="text.primary">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid size={{xs:12,sm:2.5}}>
                                <FormInput
                                    placeholder="Keyword 1"
                                    registerProps={register(`${title}-1`)}
                                />
                            </Grid>
                            <Grid size={{xs:12,sm:2.5}}>
                                <FormInput
                                    placeholder="Keyword 2"
                                    registerProps={register(`${title}-2`)}
                                />
                            </Grid>
                            <Grid size={{xs:12,sm:2.5}}>
                                <FormInput
                                    placeholder="Keyword 3"
                                    registerProps={register(`${title}-3`)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>

            <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button type="submit" variant="contained">
                    Save & Continue
                </Button>
            </Box>
        </form>
    );
};

export default CoreValueForm;
