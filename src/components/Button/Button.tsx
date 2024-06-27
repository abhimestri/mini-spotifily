import React from 'react'
import MuiButton from "@mui/material/Button";

interface ButtonProps {
    type?: any;
    style?: any;
    children: any;
}

const Button: React.FC<ButtonProps> = (props) => {
    return <MuiButton variant={props?.type} >{props?.children}</MuiButton>
}

export default Button