import { Typography } from '@mui/material'
import React from 'react'

interface PlaylistDescriptionProps {
    data?: any;
    color?: string
}

const PlaylistDescription: React.FC<PlaylistDescriptionProps> = (props) => {


    const formatDescription = (items:any[]) => {
        console.log({items})
        return <div className="flex items-center gap-x-1">
            {items?.map((item, index:any) => {
                return (
                  <>
                    <Typography className="!text-[14px] !text-white !font-sans !font-medium">
                      {item?.name}
                    </Typography>
                    {items?.length - 1 !== index ? (
                      <div className="w-[4px] h-[4px] mt-[2px] rounded-full bg-[#FFF]"></div>
                    ) : (
                      ""
                    )}
                  </>
                );
            })}
        </div>
    }

    return (
      <div className={`flex items-end gap-x-6 mt-[8vh]`}>
        <div className="max-h-[130px] max-w-[130px] mt-[6vh] aspect-square rounded-lg overflow-hidden bg-[#ccc]">
          <img
            src={
              props?.data?.images?.length !== 0 && props?.data
                ? props?.data?.images[0]?.url
                : ""
            }
            alt=""
            className="w-full h-full aspect-square"
          />
        </div>
        <div className="!font-sans text-white">
          <Typography className="!text-[14px] !font-sans !font-[300]">
            {props?.data?.album_type}
          </Typography>
          <Typography className="!text-[2.4vw] !font-sans !font-bold !truncate">
            {props?.data?.name}
          </Typography>
          {formatDescription(props?.data?.artists)}
        </div>
      </div>
    );
}

export default PlaylistDescription