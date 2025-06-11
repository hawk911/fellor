import React from 'react';
import {Box, Paper, Typography} from "@mui/material";
import Image from "next/image"
import Link from 'next/link';
const TodoList = () => {
    const items=[{
        title:"Job approval",
        count:0,
        href:"#",
        imagePath:"/icons/job.svg"
    },
        {
            title:"Interview feedback",
            count:0,
            href:"#",
            bg:"#F3E8FF",
            imagePath:"/icons/orangeCalendar.svg"
        },
        {title:"Offer approval",count:0,bg:"#DBFAE6",
            href:"#",
            imagePath:"/icons/group.svg"},
    ]
    return (
        <Paper             className={"inter"}
                           elevation={0}
                           sx={{padding:"24px",border:"1px solid #EAECF0"}}>
            <Typography
               variant={"h6"} >
                To-Do List            </Typography>
            {items.map(el=>  <Paper
                component={Link}
                href={el.href}
                key={el.title} sx={{marginBottom:"10px",
                display:"flex",
                p:"12px 14px",
                justifyContent:"space-between",
                alignItems:"center",
                transition:"all 0.5s ease",
                '&:hover': {
                    backgroundColor: "#F9FAFB",
                },
                border:"1px solid #EAECF0"}}>
                <Box sx={{display:"flex"}}>
                    <Box sx={{borderRadius:"8px",
                        display:"flex",
                        alignSelf:"center",
                        marginRight:"10px",
                        alignItems:"center",
                        justifyContent:"center",
                        background:el.bg,
                        width:"32px",
                        height:"32px",
                        border:"1px solid #E5E7EB"}}>
                        <Image alt={"Icon"}
                               width={14} height={16}
                               src={el.imagePath} />
                    </Box>
                    <Box>
                        <Typography
                            variant={"body1"}
                            sx={{lineHeight:"100%",letterSpacing:"0%"}} >{el.title}</Typography>
                        <Typography sx={{color:"#787878"}}>{el.count} pending approvals</Typography>
                    </Box>
                </Box>
                <Image
                    width={10}
                    height={17}
                    src={"/icons/arrows/arrowRightIcon.png"}
                    alt={"Icon"} />
            </Paper>)}
        </Paper>
    );
};

export default TodoList;