import React from "react";
import TopMenu from "../TopMenu/TopMenu";
import SongList from "./SongList";
import SubMenu from "./SubMenu";

const RecentActivitiesMenu = () => {
 return (
   <div className="absolute h-full overflow-scroll text-white mt-3 bg-[#121212]">
     <TopMenu />
     <SubMenu />
     <SongList />
   </div>
 );
}

export default RecentActivitiesMenu