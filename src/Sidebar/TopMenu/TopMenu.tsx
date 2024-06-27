import React from "react";
import Typography from "@mui/material/Typography";
import Home from '../../assets/Home.svg'
import Search from "../../assets/Search.svg";
import { useNavigate } from 'react-router-dom'

const TopMenu = () => {

  const navigate = useNavigate()

return (
  <div className="sticky top-[0%] z-[50] left-0 bg-[#1A1A1A] color-white w-full px-[18px] py-[20px] flex flex-col gap-y-4">
    <div className="flex gap-x-4 items-center hover:!color-[#FFF]">
      <img src={Home} style={{ width: "10%" }} alt="home" />
      <Typography className="text-[#b3b3b3] !font-sans text-white !font-[600] !text-[16px]">
        Home
      </Typography>
    </div>
    <div className="flex gap-x-4 items-center cursor-pointer" onClick={() => navigate("/search")}>
      <img src={Search} style={{ width: "10%" }} alt="Search" />
      <Typography className="text-[#b3b3b3] !font-sans text-white !font-[600] !text-[16px]">
        Search
      </Typography>
    </div>
  </div>
);
}

export default TopMenu