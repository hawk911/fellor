import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const TextButton = styled(Button)(({ theme }) => ({
    border: `1px solid ${theme.palette.gray?.[200] || '#E5E7EB'}`,
    color: theme.palette.gray[600],
    fontWeight: 400,
    textTransform: 'none',
    fontSize: 16,
    transition:"all 0.5s ease",
    '&:hover': {
        opacity:0.7,
    },
}));

export default TextButton;
