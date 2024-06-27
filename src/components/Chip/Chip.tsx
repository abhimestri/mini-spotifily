import MuiChip from "@mui/material/Chip";
import React from 'react'

interface ChipProps {
    style? : {
        backgroundColor? : string | 'primary',
        color?: string | '#000',
        fontSize?: string | "14px",
        fontFamily?: string | "sans-serif"
    },
    label: string
}

const Chip = (props: ChipProps) => {
  return (
    <MuiChip
      label={props?.label}
      style={{
        backgroundColor: props.style?.backgroundColor,
        color: props?.style?.color,
        fontSize: props?.style?.fontSize,
        fontFamily: props?.style?.fontFamily
      }}
    />
  );
};

export default Chip