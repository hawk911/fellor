import { Stack, Button } from '@mui/material';
import Image from 'next/image';

const socialButtons = [
    {
        label: 'Google',
        icon: '/icons/Google.png',
    },
    {
        label: 'Facebook',
        icon: '/icons/Facebook.png',
    },
    {
        label: 'LinkedIn',
        icon: '/icons/LinkedIn.png',
    },
];

export default function SocialButtons() {
    return (
        <Stack direction="row" spacing={2} justifyContent="center">
            {socialButtons.map(({ label, icon }) => (
                <Button
                    key={label}
                    variant="outlined"
                    startIcon={
                        <Image
                            src={icon}
                            alt={label}
                            width={20}
                            height={20}
                        />
                    }
                    sx={{
                        color: '#3E4654',
                        fontWeight: 600,
                        p: '12px 20px',
                        border: '1px solid #D4D7DD',
                        borderRadius: '8px',
                        textTransform: 'none',
                    }}
                >
                    {label}
                </Button>
            ))}
        </Stack>
    );
}
