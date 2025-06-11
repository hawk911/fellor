'use client';
import Image from "next/image"
import {
    Box,
    Button,
    FormControlLabel,
    FormLabel,
    Grid,
    MenuItem, Paper,
    Radio,
    RadioGroup,
    Typography,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from './FormInput/FormInput';
import StyledSelect from '@/app/components/styled/StyledSelect/StyledSelect';
import TextButton from "@/app/components/styled/TextButton/TextButton";
import {useId} from "react";

const schema = z.object({
    jobTitle: z.string().min(1, 'Job Title is required'),
    experienceLevel: z.string().optional(),
    introduction: z.string().optional(),
    employmentType: z.enum(['freelance', 'long-term']),
    workArrangement: z.enum(['on-site', 'remote', 'hybrid']),
    responsibilities: z.string().optional(),
    requirements: z.string().optional(),
    perks: z.string().optional(),
    education: z.string().optional(),
    location: z.string().optional(),
    salary: z.string().optional(),
    hoursPerWeek: z.string().optional(),
    companySize: z.string().optional(),
    videoUpload: z.string().optional(),
    recruiterName: z.string().optional(),
    recruiterContact: z.string().optional(),
    applicationClosingDate: z.string().optional(),
    jobNumber: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const JobPostForm = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            employmentType: 'freelance',
            workArrangement: 'on-site',
        },
    });


    const onSubmit = (data: FormData) => {
        console.log(data);
    };
       const formId=useId();
    return (
        <>
            <Paper sx={{mb:3}}>
                <Box sx={{display:"flex",justifyContent:"space-between",mb:2}}>
                    <Typography variant={"h6"}>Job Details</Typography>
                    <Box sx={{display:"flex",gap:1}}>
                        <Button sx={{padding:"6px 18px"}} variant={"outlined"}>Preview</Button>
                        <Button sx={{padding:"6px 18px"}} variant={"outlined"}>Edit</Button>
                        <TextButton sx={{padding:"6px 18px"}}>Delete</TextButton>
                    </Box>
                </Box>
                <Box mb={2}>
                    <Typography sx={{fontWeight:500,color:"#374151",mb:1}}>Job Post Language</Typography>
                    <Typography sx={{fontStyle:"Italic",lineHeight:"24px",fontSize:14,fontWeight:300}}>
                        Select the language for this job post. Fill in the Job Details, choose core value keywords, and adjust the values (±5%) to refine the match — helping you quickly identify the right fit and cut down on resume sorting time.                </Typography>
                </Box>
                <StyledSelect sx={{height:40,border:0,mb:2,
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },}} defaultValue="en">
                    <MenuItem value="en">English (EN)</MenuItem>
                    <MenuItem value="nl">Dutch</MenuItem>
                    <MenuItem value="de">German</MenuItem>
                </StyledSelect>
                <form id={formId} onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <FormInput
                                id="jobTitle"
                                label="Job Title"
                                placeholder="e.g. Senior Software Engineer"
                                error={errors.jobTitle?.message}
                                registerProps={register('jobTitle')}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box>
                                <Typography
                                    component="label"
                                    htmlFor="experienceLevel"
                                    sx={{ color: '#374151', fontWeight: 500, mb: 1, display: 'block' }}
                                >
                                    Experience Level
                                </Typography>
                                <StyledSelect
                                    fullWidth
                                    defaultValue=""
                                    {...register('experienceLevel')}
                                    sx={{
                                        height: 40,
                                        borderRadius: '8px',
                                        backgroundColor: '#fff',
                                        '& fieldset': { border: '1px solid #D1D5DB' },
                                    }}
                                >
                                    <MenuItem value="">Select...</MenuItem>
                                    <MenuItem value="junior">Junior</MenuItem>
                                    <MenuItem value="mid">Mid-level</MenuItem>
                                    <MenuItem value="senior">Senior</MenuItem>
                                </StyledSelect>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <FormInput
                                id="introduction"
                                label="Introduction"
                                placeholder="Write an intro"
                                error={errors.introduction?.message}
                                registerProps={register('introduction')}
                                multiline
                            />
                        </Grid>
                        <Grid size={{ xs: 12,sm:6 }}>
                            <FormLabel sx={{ color: '#374151', fontWeight: 500, mb: 1 }}>Employment Type</FormLabel>
                            <Controller
                                name="employmentType"
                                control={control}
                                render={({ field }) => (
                                    <RadioGroup row {...field}>
                                        <FormControlLabel value="freelance" control={<Radio />} label="Freelance" />
                                        <FormControlLabel value="long-term" control={<Radio />} label="Long-term" />
                                    </RadioGroup>
                                )}
                            />
                        </Grid>
                        <Grid size={{ xs: 12,sm:6 }}>
                            <FormLabel sx={{ color: '#374151', fontWeight: 500, mb: 1 }}>Work Arrangement</FormLabel>
                            <Controller
                                name="workArrangement"
                                control={control}
                                render={({ field }) => (
                                    <RadioGroup row {...field}>
                                        <FormControlLabel value="on-site" control={<Radio />} label="On-site" />
                                        <FormControlLabel value="remote" control={<Radio />} label="Remote" />
                                        <FormControlLabel value="hybrid" control={<Radio />} label="Hybrid" />
                                    </RadioGroup>
                                )}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <FormInput
                                id="responsibilities"
                                label="Responsibilities"
                                placeholder="Type here..."
                                error={errors.responsibilities?.message}
                                registerProps={register('responsibilities')}
                                multiline
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Box>
                                <Typography
                                    component="label"
                                    htmlFor="requirements"
                                    sx={{ color: '#374151', fontWeight: 500, mb: 1, display: 'block' }}
                                >
                                    Requirements
                                </Typography>
                                <StyledSelect
                                    fullWidth
                                    defaultValue=""
                                    {...register('requirements')}
                                    sx={{
                                        height: 40,
                                        borderRadius: '8px',
                                        backgroundColor: '#fff',
                                        '& fieldset': { border: '1px solid #D1D5DB' },
                                    }}
                                >
                                    <MenuItem value="">Select...</MenuItem>
                                </StyledSelect>
                            </Box>
                        </Grid>
                        <Grid container spacing={1.25} sx={{ gap: '10px' }}>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <Box>
                                    <Typography
                                        component="label"
                                        htmlFor="education"
                                        sx={{ color: '#374151', fontWeight: 500, mb: 1, display: 'block' }}
                                    >
                                        Education 🎓
                                    </Typography>
                                    <StyledSelect
                                        fullWidth
                                        defaultValue=""
                                        {...register('education')}
                                        sx={{
                                            height: 40,
                                            borderRadius: '8px',
                                            backgroundColor: '#fff',
                                            '& fieldset': { border: '1px solid #D1D5DB' },
                                        }}
                                    >
                                        <MenuItem value="">Select...</MenuItem>
                                        {/* Опции */}
                                    </StyledSelect>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <FormInput
                                    id="location"
                                    label="Location 📍"
                                    placeholder="Type location"
                                    error={errors.location?.message}
                                    registerProps={register('location')}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <FormInput
                                    id="salary"
                                    label="Salary 💰"
                                    placeholder="Type salary"
                                    error={errors.salary?.message}
                                    registerProps={register('salary')}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, sm: 4 }}>
                                <FormInput
                                    id="hoursPerWeek"
                                    label="Hours per Week ⏰"
                                    placeholder="e.g. 40"
                                    error={errors.hoursPerWeek?.message}
                                    registerProps={register('hoursPerWeek')}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <Box>
                                    <Typography
                                        component="label"
                                        htmlFor="companySize"
                                        sx={{ color: '#374151', fontWeight: 500, mb: 1, display: 'block' }}
                                    >
                                        Company Size 👥
                                    </Typography>
                                    <StyledSelect
                                        fullWidth
                                        defaultValue=""
                                        {...register('companySize')}
                                        sx={{
                                            height: 40,
                                            borderRadius: '8px',
                                            backgroundColor: '#fff',
                                            '& fieldset': { border: '1px solid #D1D5DB' },
                                        }}
                                    >
                                        <MenuItem value="">Select...</MenuItem>
                                        {/* Опции */}
                                    </StyledSelect>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextButton
                                fullWidth
                                variant={"text"}>
                                Upload Video
                            </TextButton>
                        </Grid>
                        <Grid size={{ xs: 12 }} sx={{ borderTop: '1px solid #ccc', pt: 2, mt: 2 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: 2,
                                }}
                            >
                                <Typography sx={{ fontWeight: 500, color: '#374151', fontSize: 18 }}>
                                    Recruiter Information
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        backgroundColor: 'red',
                                        borderRadius: '50%',
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 600, color: '#111', fontSize: 18 }}>
                                        {"Ivan"}
                                    </Typography>
                                    <Typography sx={{ color: '#555', fontSize: 14 }}>
                                        {'+380990930450'}
                                    </Typography>
                                </Box>
                            </Box>
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <FormInput
                                        label="Application Closing Date"
                                        type="date"
                                        registerProps={register('applicationClosingDate')}
                                        error={errors.applicationClosingDate?.message}/>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <FormInput
                                        label="Job Number"
                                        type="text"
                                        style={{ backgroundColor: '#F1F1F1'}}
                                        registerProps={register('jobNumber')}
                                        error={errors.jobNumber?.message}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            <Box width="100%" display={"flex"} justifyContent={"space-between"} >
                <Box>
                    <TextButton>
                        Cancel
                    </TextButton>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"10px"} >
                    <Box>
                        <TextButton startIcon={<Image src={"/icons/infoIcon.svg"}
                                                      width={12} height={12} alt={"Icon"} />}>
                            Save as draft
                        </TextButton>
                    </Box>
                    <Box>
                        <Button form={formId} variant="contained" type="submit" fullWidth>
                            Save & Continue
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>

    );
};

export default JobPostForm;
