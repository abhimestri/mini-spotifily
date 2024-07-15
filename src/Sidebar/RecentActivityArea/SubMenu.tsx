import Typography from "@mui/material/Typography";
import LibraryIcon from '../../assets/Library.svg'
import AddIcon from "../../assets/Add.svg";
import TailedArrowForwardIcon from "../../assets/TailedArrowForward.svg";
import Search from "../../assets/Search.svg";
import ListIcon from "../../assets/ListIcon.svg";
import { Chip } from "../../components";
import { useNavigate } from "react-router-dom";

const SubMenu = () => {

  const navigate = useNavigate();

    return (
      <div className="px-[12px] py-[14px] flex flex-col gap-y-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-3 ml-[6px]">
            <img src={LibraryIcon} alt="" />
            <Typography className="text-[#b3b3b3] !font-sans text-white !font-[600] !text-[16px]">
              Your Library
            </Typography>
          </div>
          <div className="flex gap-x-4">
            <img src={AddIcon} alt="" className="cursor-pointer" onClick={() => navigate("/new-playlist")} />
            <img src={TailedArrowForwardIcon} alt="" />
          </div>
        </div>
        <div className="flex gap-x-2">
          <Chip
            label="Playlist"
            style={{
              color: "#FFF",
              backgroundColor: "#2A2A2A",
              fontSize: "15px",
            }}
          />
          <Chip
            label="Artist"
            style={{
              color: "#FFF",
              backgroundColor: "#2A2A2A",
              fontSize: "15px",
            }}
          />
        </div>
        <div className="flex justify-between pr-[10px]">
          <div>
            <img src={Search} style={{ width: "10%" }} alt="Search" />
          </div>
          <div className="flex items-center gap-x-1">
            <Typography className="!font-sans] !text-[12px] text-[#b3b3b3]">
              Recents
            </Typography>
            <img src={ListIcon} alt="" />
          </div>
        </div>
      </div>
    );
}

export default SubMenu