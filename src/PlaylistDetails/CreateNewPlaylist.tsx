import { Typography } from '@mui/material';
import MoreHor from '../assets/MoreHor.svg'
import ListIcon from "../assets/ListIcon.svg";
import React from 'react'

const CreateNewPlayList = () => {

    return (
      <div>
        <div className="bg-[#4D4D4D] p-4 shadow-[inset_0px_-50px_36px_-20px_rgba(0,0,0,0.35)]">
          <div className={`flex items-end gap-x-6 mt-[8vh]`}>
            <div className="bg-[#282828] h-[130px] w-[130px] mt-[6vh] aspect-square rounded-lg overflow-hidden">
              {/* <img
                src={""} box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
                alt=""
                className="w-full h-full aspect-square"
              /> */}
            </div>
            <div className="!font-sans text-white">
              <Typography className="!text-[14px] !font-sans !font-[300]">
                Playlist
              </Typography>
              <Typography className="!text-[5.4vw] !font-sans !font-bold !truncate">
                New Playlist
              </Typography>
            </div>
          </div>
        </div>
        <div className="p-4 px-6">
          <div className="flex justify-between mt-6">
            <img
              src={MoreHor}
              className="cursor-pointer"
            />
            <div className="flex gap-x-2 items-center">
              <Typography>List</Typography>
              <img src={ListIcon} alt="" className="cursor-pointer" />
            </div>
          </div>
          <hr
            style={{
              //   display: "block",
              //   height: "1px",
              //   border: 0,
              //   borderTop: "1px solid #000",
              //   margin: "1em 0",
              //   padding: 0,
              backgroundColor: "rgba(0,0,0,0.35)",
              height: "1px",
              border: 0,
            }}
          />
        </div>
      </div>
    );

}

export default CreateNewPlayList