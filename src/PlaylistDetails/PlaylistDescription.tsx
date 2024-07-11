import { Typography } from '@mui/material'
import React from 'react'

interface PlaylistDescriptionProps {
    data?:any | {
        name: any,
        description: any,
        images: any,
        type: any
    };
    color?: string
}

const PlaylistDescription: React.FC<PlaylistDescriptionProps> = (props) => {


    return (
      <div className={`flex items-end gap-x-6 mt-[8vh]`}>
        <div className="max-h-[130px] max-w-[130px] mt-[6vh] aspect-square rounded-lg overflow-hidden bg-[#ccc]">
          <img
            src={
              props?.data?.images?.length !== 0 && props?.data?.images
                ? props?.data?.images[0]?.url
                : ""
            }
            alt=""
            className="w-full h-full aspect-square"
          />
        </div>
        <div className="!font-sans text-white">
          <Typography className="!text-[14px] !font-sans !font-[300]">
            {props?.data?.type}
          </Typography>
          <Typography className="!text-[2.4vw] !font-sans !font-bold !truncate">
            {props?.data?.name}
          </Typography>
          <Typography>{props?.data?.description}</Typography>
        </div>
      </div>
    );
}

export default PlaylistDescription