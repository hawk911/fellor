import React from 'react';
import {Box, Button, useTheme} from "@mui/material";
interface PaginationProps{
    page:number,
    pageCount:number,
    setPage:React.Dispatch<React.SetStateAction<number>>
}
const Pagination:React.FC<PaginationProps> = ({page,setPage,pageCount}) => {
    const goPrev = () => {
        if (page > 1) setPage(page - 1);
    };
    const theme=useTheme();
    const goNext = () => {
        if (page < pageCount) setPage(page + 1);
    };
    const setPageNumber = (num: number) => {
        setPage(num);
    };
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2,
                px: 1,
                userSelect: 'none',
            }}
        >
            {/* Prev */}
            <Button
                startIcon={
                    <img
                        src="/icons/arrows/arrowLeft.svg"
                        alt="Prev"
                        style={{ width: 16, height: 16 }}
                    />
                }
                onClick={goPrev}
                disabled={page === 1}
                sx={{
                    color: page === 1 ? theme.palette.gray?.[200] :theme.palette.gray?.[500],
                    textTransform: 'none',
                    fontWeight: 500,
                }}
            >
                Prev
            </Button>
            <Box sx={{ display: 'flex', gap: 1 }}>
                {Array.from({ length: pageCount }, (_, i) => i + 1).map((num) => {
                    const isCurrent = num === page;
                    return (
                        <Button
                            key={num}
                            onClick={() => setPageNumber(num)}
                            sx={{
                                minWidth: 32,
                                padding: '4px 8px',
                                textTransform: 'none',
                                fontWeight: isCurrent ? 500 : 'normal',
                                color: isCurrent
                                    ? theme.palette.primary.main
                                    : theme.palette.gray?.[500],
                                bgcolor: isCurrent ? theme.palette.primary.light : 'transparent',
                                borderRadius: 1,
                                '&:hover': {
                                    bgcolor: isCurrent ? theme.palette.primary.light : theme.palette.action.hover,
                                },
                            }}
                        >
                            {num}
                        </Button>
                    );
                })}
            </Box>
            <Button
                endIcon={
                    <img
                        src="/icons/arrows/arrowRight.svg"
                        alt="Next"
                        style={{ width: 16, height: 16 }}
                    />
                }
                onClick={goNext}
                disabled={page === pageCount}
                sx={{
                    color: page === pageCount ? theme.palette.gray?.[200] : theme.palette.gray?.[500],
                    textTransform: 'none',
                    fontWeight: 500,
                }}
            >
                Next
            </Button>
        </Box>
    );
};

export default Pagination;