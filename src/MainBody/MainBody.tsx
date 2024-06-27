import ContentArea from "./ContentArea/ContentArea";
import SideBar from "../Sidebar/SideBar";
import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import LoginSpotify from "./LoginSpotify";
import SearchSection from "./SearchSection/SearchSection";
import TopNavigation from "./TopNavigation/TopNavigation";
import { Outlet } from 'react-router-dom'
import randomColor from "randomcolor";
import FooterPlayer from "../components/FooterPlayer/FooterPlayer";
import { MusicContext } from "../store/MusicContext";
const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=27de8f310f0a46f492bd74fa156244ec&response_type=token&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const MainBody = () => {

    const [token, setToken] = useState<String>("")
const [color, setColor] = useState<any>("");
const [audioUrl, setAudioUrl] = useState<any>("any");
    
    useEffect(() => {
        const hash = window?.location?.hash
        let token:any = window?.localStorage?.getItem("token")

        console.log({hash, token})
        if(!token && hash?.length !== 0){
            token = hash?.substring(1)?.split("&")?.find(elem => elem?.startsWith("access_token"))?.split("=")[1]
            window?.localStorage?.setItem("token", token)
        }
        setToken(token)
    }, [])


    setTimeout(() => {
        window?.localStorage?.removeItem("token")
        setToken("")
    }, 3600000)

    var randomGeneratedColor = randomColor({
      luminosity: "light",
      hue: "random",
      format: "rgba"
    });

    useEffect(() => {
      if (!color) {
        setColor(randomGeneratedColor);
      }
    }, [randomGeneratedColor]);

    console.log({color})
    return (
      <MusicContext.Provider
        value={{ audioUrl: audioUrl, setAudioUrl: setAudioUrl }}
      >
        <div className="p-3 pb-0">
          {window?.localStorage?.getItem("token") === null || !token ? (
            <LoginSpotify />
          ) : (
            <div className="h-[100%]">
              <div className="h-[100%] grid grid-cols-12 gap-x-3">
                <div className="h-[87vh] col-span-3 sticky left-0 top-0">
                  <SideBar />
                </div>
                <div className="h-[87vh] col-span-9 bg-[#121212] overflow-scroll text-white pb-[6vh]">
                  <TopNavigation />
                  <Outlet />
                </div>
              </div>
              <div className="h-[10vh] bg-[#000]">
                <FooterPlayer />
              </div>
            </div>
          )}
        </div>
      </MusicContext.Provider>
    );
}

/*http://localhost:3000/?code=AQDIiFhJ5J4aUSUXDtk9mX9u7_2E2qjAtaIA4vVH_K4zv72LuK80qGju86RvF-FxPVKVTTvAaC0gHHy0zoMlfx3OeUej9UiVoyPyVrFrZwfxtWdDqNv0w1w4qKVlAnp_0HmIJVD-2efpe6iLTOaqOKv0kio8qXsStlPDwDAJz4yPbK12j_rDz5554xC92O_Bwib4hemhQ4rLyXszxuEVAjsvamorKcZCwmBIpLoqupjHgDEAPK83hyTHVjgQF3DWJHPTavYdg2tGRRlWmsj8oX3aFXsNcJzNnKZzfrUQcUrs8zrNAh_DSCjdH1yGLdHkoLqCsrHABhp6p2GhfYqSR5OEVsL_3A */

// className={`p-[20px] bg-[${color}] overflow-scroll `}
                // style={{
                //   backgroundColor: color,
                //   padding: "20px",
                //   overflow: "scroll",
                //   backgroundImage: `linear-gradient(${color}, rgba(18,18,18,1))`,
                // }}
export default MainBody