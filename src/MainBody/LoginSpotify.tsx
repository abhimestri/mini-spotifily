import React from 'react'
import Typography from "@mui/material/Typography";
import Button from '../components/Button/Button';
const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=27de8f310f0a46f492bd74fa156244ec&response_type=token&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";



const LoginSpotify = () => {


    return (
      <div className="grid h-screen w-full place-items-center">
        <div className="flex flex-col gap-y-4 items-center">
          <Typography className="!font-sans !text-[24px] !text-white">
            {" "}
            You were logged out from your account!
          </Typography>
          <Typography className="!text-white !font-sans !text-[16px]">
            Login to your MiniSpotify
          </Typography>
          <div className="bg-[#68E28B] py-[10px] px-[40px] rounded-lg cursor-pointer">
            <a className="text-black w-full h-full" href={AUTH_URL}>
              Login
            </a>
          </div>
        </div>
      </div>
    );
}

export default LoginSpotify