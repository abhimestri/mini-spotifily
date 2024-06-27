import React, { useEffect, useState } from "react";
import PlaylistDescription from './PlaylistDescription'
import axios from 'axios'
import {useParams} from "react-router-dom"
import { getAlbumDetails } from "../API/api";
import PlaylistContent from "./PlaylistContent";
import randomColor from 'randomcolor'

interface PlaylistDetailsProps {

}

const PlaylistDetails: React.FC<PlaylistDetailsProps> = (props) => {

    const [playlistDetails, setPlaylistDetails] = useState<any>("")

    const params = useParams()

    const randomGeneratedColor = randomColor({
      luminosity: "light",
      hue: "random",
    });

    useEffect(() => {
        if(playlistDetails === ""){
            getAlbumDetails(params?.id)?.then(details => {
                console.log({details})
                setPlaylistDetails(details?.data)
            })
        }
    }, [playlistDetails]);

    // console.log({randomGeneratedColor})

    return (
      <div className={`px-[20px]`}>
        <PlaylistDescription
          data={playlistDetails}
          color={randomGeneratedColor}
        />
        <PlaylistContent data={playlistDetails?.tracks?.items} />
      </div>
    );
}

export default PlaylistDetails
