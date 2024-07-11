import React, {useContext} from 'react'
import { MusicContext } from '../../store/MusicContext'
import AudioPlayer from "react-h5-audio-player";

const FooterPlayer = () => {

    const { audioUrl } = useContext(MusicContext)

    return (
      <div className="relative w-full h-[100%] bg-[#000]">
        {audioUrl ? (
          <div className="flex justify-center h-[12vh]">
            {/* <audio
              src={audioUrl}
              controls
              autoPlay
              className="w-[40%] bg-transparent"
            /> */}
            <AudioPlayer src={audioUrl} autoPlay />
          </div>
        ) : (
          ""
        )}
      </div>
    );
}

export default FooterPlayer