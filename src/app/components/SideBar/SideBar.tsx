"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mainLogo from "@/assets/mainLogoBlack.png";
import { Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { usePathname } from 'next/navigation';
import {candidateSidebarItems, recruiterSideBarItems} from "@/consts/sideBarElems";

const Sidebar = () => {
    const pathname = usePathname();
    const [expanded, setExpanded] = useState<string | null>(null);

    const handleLogout = () => {
        console.log("Logging out...");
        // Здесь можно вызвать logout() или redirect
    };

    return (
        <Box
            sx={{
                zIndex:2,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '256px',
                height: '100vh',
                borderRight: '1px solid #E4E4E5',
                p: '20px 16px',
                boxSizing: 'border-box',
                fontFamily: 'Inter, sans-serif',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Box>
                <Image src={mainLogo} alt="Fellor" width={130} height={25} />

                <Box mt={4}>
                    {recruiterSideBarItems.map((item) => {
                        const hasChildren = item.children && item.children.length > 0;
                        const isExpanded = expanded === item.href;
                        const isActive = pathname === item.href || (hasChildren && item.children.some(c => pathname.startsWith(c.href)));

                        return (
                            <Box key={item.label}>
                                <Link href={item.href} passHref>
                                    <Box
                                        onClick={(e) => {
                                            if (hasChildren) {
                                                e.preventDefault();
                                                setExpanded(isExpanded ? null : item.href);
                                            }
                                        }}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '12px',
                                            marginBottom: '5px',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            backgroundColor: isActive ? '#F2F1FF' : 'transparent',
                                            '&:hover': {
                                                backgroundColor: '#F2F1FF'
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <Image src={item.icon} alt={item.label} width={20} height={20} />
                                            <span style={{ fontWeight: 500, fontSize: '14px', lineHeight: '20px' }}>
                                                {item.label}
                                            </span>
                                        </Box>
                                        {hasChildren && (
                                            <Image
                                                src={isExpanded ? '/icons/arrows/greyArrowUp.svg' : '/icons/arrows/greyDownIcon.svg'}
                                                alt="Arrow"
                                                width={12}
                                                height={7}
                                            />
                                        )}
                                    </Box>
                                </Link>

                                {isExpanded && hasChildren && (
                                    <Box
                                        ml={4}
                                        pl={2}
                                        sx={{
                                            position: 'relative',
                                        }}
                                    >
                                        <Image
                                            src="/icons/sideBar/union.svg"
                                            alt="icon"
                                            width={12}
                                            height={112}
                                            style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: 0,
                                                pointerEvents: 'none'
                                            }}
                                        />
                                        {item.children.map((subItem) => {
                                            const isSubActive = pathname === subItem.href;
                                            return (
                                                <Link href={subItem.href} key={subItem.label} passHref>
                                                    <Box
                                                        sx={{
                                                            padding: '8px 14px',
                                                            marginBottom: '10px',
                                                            borderRadius: '8px',
                                                            cursor: 'pointer',
                                                            color: "#242220",
                                                            backgroundColor: isSubActive ? '#F2F1FF' : 'transparent',
                                                            '&:hover': {
                                                                backgroundColor: '#F2F1FF'
                                                            },
                                                            fontWeight: 500,
                                                            fontSize: '14px',
                                                            lineHeight: '20px',
                                                            position: 'relative',
                                                            pl: '20px' // Добавляем отступ слева для текста
                                                        }}
                                                    >
                                                        {subItem.label}
                                                    </Box>
                                                </Link>
                                            );
                                        })}
                                    </Box>
                                )}
                            </Box>
                        );
                    })}
                </Box>
            </Box>

            {/* Logout */}
            <Box mt={4}>
                <Box
                    onClick={handleLogout}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        color:"#252B37",
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: '#F2F1FF'
                        },
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '20px'
                    }}
                >
                    <Image src={"/icons/sideBar/logOut.png"}
                           width={20} height={20} alt={"Icon"} />
                    <span>Log out</span>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
