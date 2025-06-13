'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Box,
    Button,
    Paper,
    Typography,
    useTheme,
    Popover,
    Link,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import { recruiterSideBarItems } from '@/consts/sideBarElems';

const Header = () => {
    const theme = useTheme();
    const pathname = usePathname();
    const [quickAnchorEl, setQuickAnchorEl] = useState<null | HTMLElement>(null);
    const quickOpen = Boolean(quickAnchorEl);
    const handleQuickClick = (event: React.MouseEvent<HTMLElement>) => {
        setQuickAnchorEl(event.currentTarget);
    };
    const handleQuickClose = () => {
        setQuickAnchorEl(null);
    };
    const [notifAnchorEl, setNotifAnchorEl] = useState<null | HTMLElement>(null);
    const notifOpen = Boolean(notifAnchorEl);
    const handleNotifClick = (event: React.MouseEvent<HTMLElement>) => {
        setNotifAnchorEl(event.currentTarget);
    };
    const handleNotifClose = () => {
        setNotifAnchorEl(null);
    };

    const getActiveLabel = () => {
        for (const item of recruiterSideBarItems) {
            if (item.href === pathname) return item.label;
            if (item.children) {
                const subItem = item.children.find((child) => child.href === pathname);
                if (subItem) return subItem.label;
            }
        }
        return '';
    };

    const activeLabel = getActiveLabel();

    const quickActions = [
        {
            label: 'Post New Job',
            icon: '/icons/quickActions/add.svg',
            width: 17,
            height: 17,
        },
        {
            label: 'Add Candidate',
            icon: '/icons/quickActions/addPerson.svg',
            width: 21,
            height: 21,
        },
        {
            label: 'Export Reports',
            icon: '/icons/quickActions/export.svg',
            width: 19,
            height: 17,
        },
    ];

    const notifications = [
        {
            title: 'Complete Your My Values Match!',
            text: 'To move forward in the hiring process, please fill in your My Values Match. This helps ensure the best fit for the Senior Developer position.',
        },
        {
            title: 'New Interview Scheduled',
            text: 'An interview has been scheduled with the candidate for tomorrow.',
        },
    ];

    return (
        <>
            <Paper
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 24px',
                    boxShadow:0,
                    borderRadius:0,
                    border:0,
                    borderBottom: `1px solid ${theme.palette.grey[200]}`,
                }}
            >
                {/* Left side */}
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Image alt="Icon" src="/icons/message.png" width={20} height={20} />
                    <Typography
                        className="inter"
                        sx={{ fontWeight: 600, fontSize: '20px', lineHeight: '28px' }}
                    >
                        {activeLabel || 'Fellor'}
                    </Typography>
                </Box>

                {/* Right side */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Notification Icon */}
                    <Box
                        onClick={handleNotifClick}
                        sx={{
                            border: `1px solid ${theme.palette.grey[200]}`,
                            borderRadius: '4px',
                            padding: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s ease',
                            '&:hover': {
                                backgroundColor: theme.palette.grey[100],
                            },
                        }}
                    >
                        <Image alt="Notifications" src="/icons/bell.png" width={20} height={20} />
                    </Box>

                    {/* Other Icons */}
                    {[{ alt: 'Search', src: '/icons/searchIcon.png' }].map((icon) => (
                        <Box
                            key={icon.alt}
                            sx={{
                                border: `1px solid ${theme.palette.grey[200]}`,
                                borderRadius: '4px',
                                padding: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s ease',
                                '&:hover': {
                                    backgroundColor: theme.palette.grey[100],
                                },
                            }}
                        >
                            <Image alt={icon.alt} src={icon.src} width={20} height={20} />
                        </Box>
                    ))}

                    <Button
                        variant="contained"
                        onClick={handleQuickClick}
                        endIcon={
                            <Image
                                alt="Arrow Down"
                                src="/icons/arrows/altArrowDown.png"
                                width={20}
                                height={20}
                            />
                        }
                        sx={{
                            textTransform: 'none',
                            fontSize: 14,
                            color: 'white',
                            backgroundColor: theme.palette.grey[800],
                            border: `1px solid ${theme.palette.grey[700]}`,
                            borderRadius: '4px',
                            padding: '8px 16px',
                            '&:hover': {
                                backgroundColor: theme.palette.grey[700],
                            },
                        }}
                    >
                        Quick Actions
                    </Button>
                </Box>
            </Paper>

            {/* Quick Actions Popover */}
            <Popover
                open={quickOpen}
                anchorEl={quickAnchorEl}
                onClose={handleQuickClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                disableScrollLock
                PaperProps={{
                    sx: {
                        borderRadius: '10px',
                        padding: '8px 0',
                        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
                        minWidth: 200,
                        mt: '4px',
                    },
                }}
            >
                {quickActions.map((action) => (
                    <Box
                        key={action.label}
                        onClick={handleQuickClose}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '14px 16px',
                            gap: '10px',
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: '#F2F2F2',
                            },
                        }}
                    >
                        <Image
                            src={action.icon}
                            alt={action.label}
                            width={action.width}
                            height={action.height}
                        />
                        <Typography sx={{ fontSize: '14px' }}>
                            {action.label}
                        </Typography>
                    </Box>
                ))}
            </Popover>

            {/* Notifications Popover */}
            <Popover
                open={notifOpen}
                anchorEl={notifAnchorEl}
                onClose={handleNotifClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                disableScrollLock
                PaperProps={{
                    sx: {
                        borderRadius: '10px',
                        padding: '16px 20px',
                        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
                        maxWidth: 380,
                        mt: '4px',
                    },
                }}
            >
                {/* Title */}
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: 18,
                        marginBottom: '10px',
                    }}
                >
                    Notifications
                </Typography>

                {/* Notification blocks */}
                {notifications.map(({ title, text }, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            padding: '16px 17px',
                            borderRadius: '8px',
                            border: '1px solid #ECD9FF',
                            display:"flex",
                            gap:"10px",
                            borderBottom:  `1px solid ${theme.palette.grey[200]}`,
                            mb: idx !== notifications.length - 1 ? 1 : 0,
                        }}
                    >
                        <Image width={20}
                               height={20}
                               src={"/icons/notification.svg"}
                               alt={"Notification"}/>
                        <Box>
                            <Typography variant={"body1"}
                                        sx={{fontWeight: 500,
                                lineHeight: '24px'}}>
                                {title}
                            </Typography>
                            <Typography sx={{ lineHeight: '140%',
                                fontWeight:400,
                                color:"#4B5563",
                                fontSize:"14px",
                                mt: 0.5, mb: 1 }}>
                                {text}
                            </Typography>
                            <Link
                                href="#"
                                sx={{
                                    color: '#6F3FF1',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        opacity:0.7
                                    },
                                }}
                            >
                                Complete now
                            </Link>
                        </Box>
                    </Box>
                ))}
            </Popover>
        </>
    );
};

export default Header;
