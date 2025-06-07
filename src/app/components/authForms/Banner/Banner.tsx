import React from 'react';
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import loginBanner from "@/assets/loginBanner.png";
import mainLogo from "@/assets/mainLogo.png";

const BannerComponent = () => {
    return (
        <Box
            sx={{
                width: '640px',
                maxHeight: '890px',
                borderRadius: "16px",
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden', // Чтобы overlay не выходил за края
            }}
        >
            {/* Фоновое изображение */}
            <Image
                src={loginBanner}
                alt="Login banner"
                fill
                sizes="640px"
                style={{
                    objectFit: 'cover',
                    zIndex: -2,
                }}
                priority
            />

            {/* Лёгкий overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Прозрачность 10%
                    zIndex: -1, // между картинкой и контентом
                }}
            />

            {/* Контент поверх */}
            <Box
                sx={{
                    pt: "90px",
                    pl: { xs: 4, md: "50px" },
                    color: 'white',
                    height: "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    zIndex: 1,
                    pb: 8,
                }}
            >
                <Box>
                    <Image
                        width={130}
                        height={25}
                        src={mainLogo}
                        alt="Logo"
                    />
                    <Typography variant="subtitle1">
                        Recruiting with Bulls Eye Precision
                    </Typography>
                </Box>

                <Box>
                    <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom
                        sx={{ fontWeight: 'bold', color: "#FCFCFC" }}
                    >
                        Where Talent Meets <br />
                        Its Moment
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 16,
                            fontWeight: 400,
                            color: "#EEEEEE",
                            lineHeight: "22px"
                        }}
                    >
                        Step into the role that reflects your purpose and potential
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default BannerComponent;
