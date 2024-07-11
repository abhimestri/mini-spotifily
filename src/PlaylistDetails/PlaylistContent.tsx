import { Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import CustomTable from '../components/Table/Table'
import { columns, getDataTableItems, getFormatedItems } from "./utils";
import PlayMusicIcon from '../assets/PlayMusicIcon.svg'
import { MusicContext } from '../store/MusicContext';
import { getArtistsTopTracksList, getMyPlaylistDetails } from '../API/api';

import { useParams } from "react-router-dom";

interface PlaylistContentProps {
    data? : any;
    type? : string | "artists" | "playlist" | "album";
    id: any;
}

const PlaylistContent = (props:PlaylistContentProps) => {

    const [artistsList, setArtistsList] = useState<any>(null);
    const [playList, setPlaylist] = useState<any>(null);
    const [tableContentData, setTableContentData] = useState<any>(null);
    const { audioUrl, setAudioUrl } = useContext(MusicContext);

    const params = useParams();


    useEffect(() => {
      if (props?.type === "playlist" && !tableContentData) {
        setTableContentData(
          getFormatedItems(props?.data?.tracks?.items, props?.type)
        );
      } else if (props?.type === "artists" && !tableContentData) {
        getArtistsTopTracksList(props?.id)?.then((data) => {
          setTableContentData(
            getFormatedItems(data?.data?.tracks, props?.type)
          );
        });
      } else if (
        (props?.type === "my-playlist" ||
          props?.type === "featured-playlist") &&
        !tableContentData
      ) {
        getMyPlaylistDetails(props?.id)?.then((details) => {
          setTableContentData(
            getFormatedItems(details?.data?.tracks?.items, props?.type)
          );
        });
      }
    }, [tableContentData, props?.data]);

    useEffect(() => {
      if (tableContentData) {
        setTableContentData(null);
      }
    }, [props?.id, params?.id]);

    return (
      <div className="playlistContent">
        <CustomTable
          columns={[...columns()]}
          data={getDataTableItems(props?.type, tableContentData, setAudioUrl, audioUrl)}
        />
      </div>
    );
}

export default PlaylistContent