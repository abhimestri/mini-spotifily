import React from 'react'
import { Chip } from '../../components';
import Typography from "@mui/material/Typography";
import ArrowForward from '../../assets/ArrowForward.svg'
import ArrowBack from "../../assets/ArrowBack.svg";
import { useNavigate, useLocation } from 'react-router-dom'

interface TopNavigationProps {

}

const TopNavigation: React.FC = (props: TopNavigationProps) => {

  const navigate = useNavigate()
  const location = useLocation()

    return (
      <div className="sticky top-[6vh] left-[100%] z-50 bg-transparent px-[20px]">
        <div className="flex justify-between">
          <div className="flex gap-x-2">
            <div className="w-[40px] h-[40px] !rounded-full bg-[#000] flex justify-center p-[8px] pl-[10px] cursor-pointer">
              <img src={ArrowBack} alt="" onClick={() => navigate("..")} />
            </div>
            <div className="w-[40px] h-[40px] !rounded-full bg-[#000] flex justify-center p-[8px] pl-[10px] cursor-pointer">
              {" "}
              <img src={ArrowForward} alt="" />
            </div>
          </div>
          <div className="flex gap-x-4 items-center">
            <Chip label="Explore Premium" style={{ backgroundColor: "#FFF" }} />
            <Chip
              label="Install App"
              style={{ backgroundColor: "#000", color: "#FFF" }}
            />
            <div className="rounded-full w-[36px] bg-[#000] text-center p-[6px]">
              {" "}
              <Typography>p</Typography>{" "}
            </div>
            <div className="rounded-[100%] w-[36px] bg-[#000] text-center p-[6px]">
              {" "}
              p{" "}
            </div>
          </div>
        </div>
        {location?.pathname === "/" && (
            <div className="flex gap-x-2 mt-8">
              <Chip
                label="All"
                style={{ backgroundColor: "#FFF", color: "#000" }}
              />
              <Chip
                label="Music"
                style={{ backgroundColor: "#353535", color: "#FFF" }}
              />
              <Chip
                label="Podcasts"
                style={{ backgroundColor: "#353535", color: "#FFF" }}
              />
            </div>
          )}
      </div>
    );
}

export default TopNavigation 