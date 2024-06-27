import { Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import CustomTable from '../components/Table/Table'
import { columns } from './utils';
import PlayMusicIcon from '../assets/PlayMusicIcon.svg'
import { MusicContext } from '../store/MusicContext';

interface PlaylistContentProps {
    data? : any
}

const PlaylistContent = (props:PlaylistContentProps) => {

    const { audioUrl, setAudioUrl } = useContext(MusicContext);
    console.log({audioUrl})

    // var playListData: any = [
    //   {
    //     no: <img src={PlayMusicIcon} className="cursor-pointer"/>,
    //     name: "Sajni(From Lapata Ladies)",
    //     duration: "3:45",
    //   },
    //   {
    //     no: <img src={PlayMusicIcon} className="cursor-pointer"/>,
    //     name: "Sajni(From Lapata Ladies)",
    //     duration: "3:45",
    //   },
    //   {
    //     no: <img src={PlayMusicIcon} className="cursor-pointer"/>,
    //     name: "Sajni(From Lapata Ladies)",
    //     duration: "3:45",
    //   },
    //   {
    //     no: <img src={PlayMusicIcon} className="cursor-pointer"/>,
    //     name: "Sajni(From Lapata Ladies)",
    //     duration: "3:45",
    //   },
    // ];

    const playListData = props?.data?.map((dt:any) => {
      return {
        no: (
          <img
            src={PlayMusicIcon}
            className="cursor-pointer"
            onClick={() => {
                console.log("in", dt?.preview_url)
                setAudioUrl(dt?.preview_url);
            }}
          />
        ),
        name: dt?.name,
        duration: dt?.duration_ms,
      };
    });

    return (
      <div className="playlistContent">
        <CustomTable columns={[...columns()]} data={playListData} />
      </div>
    );
}

export default PlaylistContent