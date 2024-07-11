import { Typography } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import { getCategoriesPlaylist } from "../../API/api";
import { MusicCard } from "../../components";

interface MadeForYouSectionProps {

}

const MadeForYouSection: React.FC<MadeForYouSectionProps> = (data) => {

    const [genreDetails, setGenreDetails] = useState<any>(null)

     const params = useParams();
     const location = useLocation();
     const currentDetailsType: string = location?.pathname?.split("/")[1];
     const navigate = useNavigate();

    useEffect(() => {
        if (!genreDetails && currentDetailsType === "genre") {
          getCategoriesPlaylist(params?.id)?.then((data) => {
            console.log({ data });
            setGenreDetails(data?.data)
          });
        }
    }, [genreDetails])

    return <div className='p-[20px] relative top-[6vh]'>
        <Typography className="!text-[6rem] !font-sans !font-[700]">{`${genreDetails?.message}`}</Typography>
        <div className="grid grid-cols-5 gap-x-5 gap-y-6">
            {genreDetails?.playlists?.items?.map((item: any) => {
                return (
                  <MusicCard
                    style={{
                      backgroundColor: "#ccc",
                      background: "transparent",
                    }}
                    className="col-span-1 aspect-[14/16]"
                    data={{
                      name: item?.name,
                      image: [item?.images[0]?.url],
                    }}
                    onClick={() => navigate(`/featured-playlist/${item?.id}`)}
                  />
                );
            })}
        </div>
    </div>
}

export default MadeForYouSection