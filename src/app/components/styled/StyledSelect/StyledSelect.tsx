import React from "react";
import {Select, styled, SelectProps, Box} from "@mui/material";

const CustomSelect = styled(Select)(({ theme }) => ({
    fontSize: 14,
    fontFamily: "Inter, serif",
}));

const CustomExpandIcon = () => (
    <Box
        sx={{
            width: 12,
            height: 7,
            cursor:"pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 1,
            marginTop:0.5,
        }}
    >
        <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M1.14726 0.569443C1.29768 0.424722 1.4994 0.34564 1.7081 0.349578C1.9168 0.353516 2.1154 0.44015 2.26026 0.590443L6.15576 4.72534L10.0513 0.590443C10.1221 0.512381 10.2078 0.449327 10.3034 0.405016C10.3991 0.360705 10.5026 0.336039 10.6079 0.33248C10.7133 0.328921 10.8183 0.346541 10.9167 0.384297C11.015 0.422052 11.1049 0.479175 11.1808 0.552279C11.2567 0.625383 11.3172 0.712982 11.3586 0.809885C11.4001 0.906788 11.4216 1.01102 11.422 1.11642C11.4225 1.22181 11.4017 1.32621 11.361 1.42344C11.3204 1.52067 11.2606 1.60874 11.1853 1.68244L6.72275 6.40744C6.64929 6.48366 6.56122 6.54428 6.4638 6.58569C6.36638 6.6271 6.26161 6.64844 6.15576 6.64844C6.0499 6.64844 5.94513 6.6271 5.84771 6.58569C5.75029 6.54428 5.66222 6.48366 5.58876 6.40744L1.12626 1.68244C0.981534 1.53202 0.902453 1.3303 0.90639 1.1216C0.910328 0.912897 0.996963 0.714299 1.14726 0.569443Z"
                  fill="currentColor"
            />
        </svg>
    </Box>
);

const StyledSelect: React.FC<SelectProps> = ({
                                                       children,
                                                       ...rest
                                                   }) => {
    return (
        <CustomSelect
            IconComponent={CustomExpandIcon}
            MenuProps={{disableScrollLock: true}}
            {...rest}
        >
            {children}
        </CustomSelect>
    );
};

export default StyledSelect;