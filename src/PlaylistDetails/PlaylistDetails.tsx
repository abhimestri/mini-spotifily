import React, { useEffect, useState } from "react";
import PlaylistDescription from './PlaylistDescription'
import axios from 'axios'
import { useParams, useLocation } from "react-router-dom";
import { getAlbumDetails, getArtistsDetails, getMyPlaylistDetails } from "../API/api";
import PlaylistContent from "./PlaylistContent";
import randomColor from 'randomcolor'
import { formatDataForDescription } from "./utils";

interface PlaylistDetailsProps {

}

const PlaylistDetails: React.FC<PlaylistDetailsProps> = (props) => {

    const [playlistDetails, setPlaylistDetails] = useState<any>("")

    const params = useParams()
    const location = useLocation()
    const currentDetailsType:string = location?.pathname?.split("/")[1]

    const randomGeneratedColor = randomColor({
      luminosity: "light",
      hue: "random",
    });

    useEffect(() => {
      if (playlistDetails === "" && currentDetailsType === "playlist") {
        getAlbumDetails(params?.id)?.then((details) => {
          setPlaylistDetails(details?.data);
        });
      } else if (playlistDetails === "" && currentDetailsType === "artists") {
        getArtistsDetails(params?.id)?.then((details) => {
          setPlaylistDetails(details?.data);
        });
      } else if (
        playlistDetails === "" &&
        (currentDetailsType === "my-playlist" ||
          currentDetailsType === "featured-playlist")
      ) {
        getMyPlaylistDetails(params?.id)?.then((details) => {
          setPlaylistDetails(details?.data);
        });
      }
    }, [playlistDetails]);

    useEffect(() => {
        if(playlistDetails?.id !== params?.id){
            setPlaylistDetails("");
        }
    }, [params?.id]);

    return (
      <div className={`px-[20px]`}>
        <PlaylistDescription
          data={formatDataForDescription({
            type: currentDetailsType,
            data: playlistDetails,
          })}
          color={randomGeneratedColor}
        />
        <PlaylistContent id={params?.id} data={playlistDetails} type={currentDetailsType} />
      </div>
    );
}

export default PlaylistDetails
